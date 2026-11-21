import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import { usePluginData } from '@docusaurus/useGlobalData';
import recommendations from '@site/src/data/recommendations';
import gallery from '@site/src/data/gallery';
import styles from './index.module.css';

const GITHUB = 'https://github.com/wutianchen';
const LINKEDIN = '#';
const EMAIL = 'you@example.com';

function Section({ id, index, title, children }) {
  // Register the id so the build's broken-anchor check knows /#about etc. exist.
  useBrokenLinks().collectAnchor(id);
  return (
    <section className={styles.section} id={id}>
      <h2>
        <span className={styles.sectionIndex}>{index}</span> {title}
      </h2>
      {children}
    </section>
  );
}

function formatDate(isoDate) {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

function RecList({ type }) {
  return (
    <ul className={styles.recList}>
      {recommendations
        .filter((item) => item.type === type)
        .map((item) => (
          <li key={item.title}>
            <a className={styles.recTitle} href={item.url} rel="noopener">
              {item.title}
            </a>
            {item.creator && <span className={styles.recCreator}> · {item.creator}</span>}
            {item.note && <p className={styles.recNote}>{item.note}</p>}
          </li>
        ))}
    </ul>
  );
}

function GalleryItem({ item }) {
  return (
    <figure className={styles.galleryItem}>
      <img src={useBaseUrl(item.image)} alt={item.alt || item.title} loading="lazy" />
      <figcaption>
        <strong>{item.title}</strong>
        <p>{item.caption}</p>
      </figcaption>
    </figure>
  );
}

export default function Home() {
  const { posts } = usePluginData('recent-posts');

  return (
    <Layout
      title="Personal Website"
      description="Personal website of Your Name — [one-line summary of what you do]."
    >
      <main className={styles.page}>
        {/* ============ HERO ============ */}
        <section className={styles.hero} id="top">
          <h1 className={styles.heroName}>Your Name</h1>
          <p className={styles.heroTitle}>
            [Your headline — e.g. “Cloud &amp; DevOps Engineer” or “Software Engineer, Robotics”]
          </p>
          <p className={styles.heroSummary}>
            [Two or three sentences about who you are professionally: what you build, what you
            care about, and what kind of problems you enjoy solving.]
          </p>
          <div className={styles.actions}>
            <Link className={`${styles.btn} ${styles.btnPrimary}`} to="#contact">
              Get in touch
            </Link>
            <a className={styles.btn} href={GITHUB} rel="me noopener">
              GitHub
            </a>
            <a className={styles.btn} href={LINKEDIN} rel="me noopener">
              LinkedIn
            </a>
          </div>
        </section>

        {/* ============ ABOUT ============ */}
        <Section id="about" index="01" title="About">
          <div className={styles.prose}>
            <p>
              [A short paragraph about your background: where you’re based, what you’ve worked
              on, and the thread that connects it all.]
            </p>
            <p>
              [Optionally a second paragraph: what you’re exploring right now, or what you’re
              looking for next.]
            </p>
          </div>
        </Section>

        {/* ============ EXPERIENCE ============ */}
        <Section id="experience" index="02" title="Experience">
          <ol className={styles.timeline}>
            <li className={styles.timelineItem}>
              <span className={styles.timelineDates}>2023 — Present</span>
              <div className={styles.timelineBody}>
                <h3>
                  [Job Title] · <span className={styles.org}>[Company]</span>
                </h3>
                <p>[One sentence on the scope of the role.]</p>
                <ul>
                  <li>[A concrete achievement with impact — what changed because of your work.]</li>
                  <li>[Another achievement or responsibility.]</li>
                </ul>
              </div>
            </li>
            <li className={styles.timelineItem}>
              <span className={styles.timelineDates}>2020 — 2023</span>
              <div className={styles.timelineBody}>
                <h3>
                  [Previous Title] · <span className={styles.org}>[Company]</span>
                </h3>
                <p>[One sentence on the scope of the role.]</p>
                <ul>
                  <li>[Achievement.]</li>
                </ul>
              </div>
            </li>
          </ol>
        </Section>

        {/* ============ BLOG ============ */}
        <Section id="blog" index="03" title="Blog">
          {posts.length > 0 ? (
            <ul className={styles.postList}>
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link className={styles.postLink} to={`/blog/${post.slug}/`}>
                    <span className={styles.postTitle}>{post.title}</span>
                    <time className={styles.postDate} dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>
                  </Link>
                  {post.description && <p className={styles.postExcerpt}>{post.description}</p>}
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.prose}>
              <p>No posts yet — the first one is coming soon.</p>
            </div>
          )}
        </Section>

        {/* ============ RECOMMENDATIONS ============ */}
        <Section id="recommendations" index="04" title="Recommendations">
          <div className={styles.recGroups}>
            <div>
              <h3>Lectures</h3>
              <RecList type="lecture" />
            </div>
            <div>
              <h3>Books</h3>
              <RecList type="book" />
            </div>
          </div>
        </Section>

        {/* ============ GALLERY ============ */}
        <Section id="gallery" index="05" title="Gallery">
          <div className={styles.galleryGrid}>
            {gallery.map((item) => (
              <GalleryItem key={item.image} item={item} />
            ))}
          </div>
        </Section>

        {/* ============ SKILLS ============ */}
        <Section id="skills" index="06" title="Skills">
          <dl className={styles.skills}>
            <div>
              <dt>[Category — e.g. Cloud &amp; Infrastructure]</dt>
              <dd>
                <span className={styles.chip}>[Skill]</span>
                <span className={styles.chip}>[Skill]</span>
                <span className={styles.chip}>[Skill]</span>
              </dd>
            </div>
            <div>
              <dt>[Category — e.g. Languages &amp; Frameworks]</dt>
              <dd>
                <span className={styles.chip}>[Skill]</span>
                <span className={styles.chip}>[Skill]</span>
              </dd>
            </div>
            <div>
              <dt>[Category — e.g. Tooling]</dt>
              <dd>
                <span className={styles.chip}>[Skill]</span>
                <span className={styles.chip}>[Skill]</span>
              </dd>
            </div>
          </dl>
        </Section>

        {/* ============ CONTACT ============ */}
        <Section id="contact" index="07" title="Contact">
          <div className={styles.prose}>
            <p>
              [An invitation to reach out — what you’re open to: roles, freelance work,
              collaboration, or just a conversation.]
            </p>
          </div>
          <div className={styles.actions}>
            <a className={`${styles.btn} ${styles.btnPrimary}`} href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            <a className={styles.btn} href={GITHUB} rel="me noopener">
              GitHub
            </a>
            <a className={styles.btn} href={LINKEDIN} rel="me noopener">
              LinkedIn
            </a>
          </div>
        </Section>
      </main>
    </Layout>
  );
}
