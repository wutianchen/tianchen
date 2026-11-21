// Docusaurus site: a custom React homepage (src/pages/index.js) plus the blog (blog/).

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Your Name',
  tagline: '[Your headline]',
  url: 'https://wutianchen.github.io',
  // Served as a GitHub Pages project site under /tianchen/.
  baseUrl: '/tianchen/',
  trailingSlash: true,
  favicon: 'favicon.svg',

  organizationName: 'wutianchen',
  projectName: 'tianchen',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Exposes the newest blog posts to the homepage "Blog" section.
  plugins: ['./plugins/recent-posts'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: 'blog',
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          feedOptions: { type: ['rss', 'atom'] },
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'YN',
      items: [
        { to: '/#about', label: 'About', position: 'left' },
        { to: '/#experience', label: 'Experience', position: 'left' },
        { to: '/blog/', label: 'Blog', position: 'left' },
        { to: '/#recommendations', label: 'Recommendations', position: 'left' },
        { to: '/#gallery', label: 'Gallery', position: 'left' },
        { to: '/#contact', label: 'Contact', position: 'left' },
        { href: 'https://github.com/wutianchen', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Your Name · Built with Docusaurus, hosted on GitHub Pages.`,
    },
  },
};

module.exports = config;
