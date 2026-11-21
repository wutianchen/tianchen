// Reads blog/ front matter at build time and publishes the post list as global data,
// so the homepage can list posts the way the Jekyll site did with site.posts.
// Read it with usePluginData('recent-posts').

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const FILE_RE = /^(\d{4}-\d{2}-\d{2})-(.+)\.mdx?$/;

function frontMatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return match ? yaml.load(match[1]) || {} : {};
}

module.exports = function recentPosts(context) {
  const blogDir = path.join(context.siteDir, 'blog');

  return {
    name: 'recent-posts',

    getPathsToWatch() {
      return [path.join(blogDir, '*.{md,mdx}')];
    },

    async loadContent() {
      return fs
        .readdirSync(blogDir)
        .map((file) => ({ file, match: file.match(FILE_RE) }))
        .filter(({ match }) => match)
        .map(({ file, match }) => {
          const fm = frontMatter(fs.readFileSync(path.join(blogDir, file), 'utf8'));
          return {
            title: fm.title || match[2],
            description: fm.description || '',
            date: match[1],
            slug: fm.slug || match[2],
            draft: Boolean(fm.draft),
          };
        })
        .filter((post) => !post.draft)
        .sort((a, b) => b.date.localeCompare(a.date));
    },

    async contentLoaded({ content, actions }) {
      actions.setGlobalData({ posts: content });
    },
  };
};
