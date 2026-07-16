'use client';

import styles from './resume.module.css';
import Navbar from '../components/Navbar';

const RESUME_PDF = '/Abhi%20Velaga%20Resume.pdf';

export default function Resume() {
  return (
    <div className="page">
      <Navbar />
      <a
        className={styles.downloadBtn}
        href={RESUME_PDF}
        download="Abhi Velaga Resume.pdf"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Download PDF
      </a>

      <div id="resume-content" className={styles.content}>
        <header>
          <h1 className={styles.name}>Abhi Velaga</h1>
          <div className={styles.contact}>
            <span className={styles.contactItem}>
              <a href="mailto:abhinav.velaga@gmail.com">abhinav.velaga@gmail.com</a>
            </span>
            <span className={styles.contactItem}>
              <a href="https://abhi.work" target="_blank" rel="noopener">abhi.work</a>
            </span>
            <span className={styles.contactItem}>
              <a href="https://github.com/avelaga" target="_blank" rel="noopener">github.com/avelaga</a>
            </span>
            <span className={styles.contactItem}>
              <a href="https://linkedin.com/in/abhivelaga" target="_blank" rel="noopener">linkedin.com/in/abhivelaga</a>
            </span>
          </div>
        </header>

        <p className={styles.bio}>
          Senior frontend engineer specializing in design systems and UI architecture - with experience spanning both founding-stage startup and global enterprise products.
        </p>

        <section aria-label="Skills">
          <div className={styles.sectionLabel}>Skills</div>
          <div className={styles.skillsGrid}>
            <div className={styles.skillRow}>
              <span className={styles.skillCategory}>Frontend</span>
              <span className={styles.skillValues}>React, Next.js, Astro.js, Node.js, Radix UI, WCAG 2.1</span>
            </div>
            <div className={styles.skillRow}>
              <span className={styles.skillCategory}>Design &amp; Tooling</span>
              <span className={styles.skillValues}>Figma, Design Systems, Storybook, Playwright</span>
            </div>
            <div className={styles.skillRow}>
              <span className={styles.skillCategory}>Infrastructure</span>
              <span className={styles.skillValues}>AWS, Cloudflare, Vercel, Docker, CI/CD</span>
            </div>
            <div className={styles.skillRow}>
              <span className={styles.skillCategory}>Languages</span>
              <span className={styles.skillValues}>TypeScript, JavaScript, Python, Java, SQL</span>
            </div>
          </div>
        </section>

        <section aria-label="Experience">
          <div className={styles.sectionLabel}>Experience</div>
          <div className={styles.experienceList}>

            <article className={styles.job}>
              <div className={styles.jobCompanyHeader}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                  <span className={styles.company}>Biorce</span>
                  <span className={styles.companyTag}>Series A MedTech AI Startup</span>
                </div>
                <span className={styles.location}>Austin, TX</span>
              </div>
              <div className={styles.roles}>
                <div className={styles.roleBlock}>
                  <div className={styles.roleHeader}>
                    <span className={styles.roleTitle}>Senior Frontend Engineer</span>
                    <span className={styles.dates}>April 2026 - Present</span>
                  </div>
                  <ul className={styles.bullets}>
                    <li>Founding US frontend engineer; architected the company's design system (<em>Biorce UI</em>) from scratch - stack, CI/CD setup, linting toolchain, scoped npm distribution, and AI-readable docs (CLAUDE.md, llms.txt) for agent-assisted development.</li>
                    <li>Established the company's first engineering interview process and lead all engineering hiring strategy - rubrics, assessments, and evaluation frameworks - while personally driving hiring for the founding US frontend team.</li>
                    <li>Shipped 20+ accessible, localized components (Radix UI, TypeScript, CSS Modules, Storybook) on a three-tier design token architecture, adopted by all 6 engineering teams.</li>
                    <li>Built a feature-rich data table - sticky columns, inline editing, bulk actions, 10+ cell types - and enforced system consistency via custom Stylelint rules and Playwright visual regression testing.</li>
                    <li>Drove org-wide adoption through stakeholder presentations, developer onboarding, and recurring office hours, making Biorce UI the default foundation for all new products.</li>
                  </ul>
                </div>
              </div>
            </article>

            <article className={styles.job}>
              <div className={styles.jobCompanyHeader}>
                <span className={styles.company}>Visa</span>
                <span className={styles.location}>Austin, TX</span>
              </div>
              <div className={styles.roles}>
                <div className={styles.roleBlock}>
                  <div className={styles.roleHeader}>
                    <span className={styles.roleTitle}>UI/UX Software Engineer → Senior Software Engineer</span>
                    <span className={styles.dates}>June 2021 - April 2026 · Intern, Summer 2020</span>
                  </div>
                  <ul className={styles.bullets}>
                    <li>Built and maintained Visa's company-wide React component library, shipped to millions of users across Visa's global products.</li>
                    <li>Led a white-label UI infrastructure overhaul enabling fully ADA-compliant brand customization, adopted by major U.S. banks including Wells Fargo and Bank of America.</li>
                    <li>Owned frontend architecture and cross-functional delivery for merchant-facing payment features serving ~5,000 businesses and processing ~$83M/month - acting as technical lead across engineering, product, and design.</li>
                    <li>Drove full WCAG 2.1 compliance across a high-traffic React application - screen readers, 400% zoom reflow, semantic HTML, keyboard navigation - eliminating legal risk and meeting enterprise accessibility standards.</li>
                  </ul>
                </div>
              </div>
            </article>

            <article className={styles.job}>
              <div className={styles.jobCompanyHeader}>
                <span className={styles.company}>Schlumberger</span>
                <span className={styles.location}>Houston, TX</span>
              </div>
              <div className={styles.roles}>
                <div className={styles.roleBlock}>
                  <div className={styles.roleHeader}>
                    <span className={styles.roleTitle}>Software Engineer Intern</span>
                    <span className={styles.dates}>Summer 2019</span>
                  </div>
                  <ul className={styles.bullets}>
                    <li>Developed a modular micro-frontend packaging solution in Angular, reducing go-to-market time and engineering overhead while accelerating product delivery for internal tools.</li>
                  </ul>
                </div>
              </div>
            </article>

          </div>
        </section>

        <section aria-label="Projects">
          <div className={styles.sectionLabel}>Projects</div>
          <div className={styles.projectsList}>

            <article className={styles.project}>
              <div className={styles.projectHeader}>
                <span className={styles.projectName}>
                  <a href="https://abhi.work" target="_blank" rel="noopener">abhi.work</a>
                </span>
                <span className={styles.projectMeta}>
                  Personal Portfolio &amp; UX Case Study
                  {' · '}<a href="https://github.com/avelaga/portfolio" target="_blank" rel="noopener">github.com/avelaga/portfolio</a>
                </span>
              </div>
              <ul className={styles.bullets}>
                <li>Designed and built a responsive Next.js site with SSG, performance optimizations, and CI/CD deployment to AWS S3 + CloudFront.</li>
                <li>Reduced load time by 75% and iterated on UX based on analytics from 47k+ pageviews.</li>
              </ul>
            </article>

            <article className={styles.project}>
              <div className={styles.projectHeader}>
                <span className={styles.projectName}>pebble</span>
                <span className={styles.projectMeta}>
                  Open-Source Headless CMS
                  {' · '}<a href="https://github.com/avelaga/pebble" target="_blank" rel="noopener">github.com/avelaga/pebble</a>
                </span>
              </div>
              <ul className={styles.bullets}>
                <li>Architected a Cloudflare-native headless CMS (Workers, D1, R2) with versioned REST API and JWT auth.</li>
                <li>Built a dedicated Next.js editor and automated deployment tooling for rapid self-hosted setup.</li>
              </ul>
            </article>

            <article className={styles.project}>
              <div className={styles.projectHeader}>
                <span className={styles.projectName}>
                  <a href="https://velagaadvisors.com" target="_blank" rel="noopener">velagaadvisors.com</a>
                </span>
                <span className={styles.projectMeta}>Private Wealth Management Firm Site</span>
              </div>
              <ul className={styles.bullets}>
                <li>Designed and built a mobile-optimized Next.js site with serverless lead capture (with blacklist filtering), and TinaCMS-powered self-editing - plus a self-hosted blog running on pebble, my open-source CMS, with its own editing UI and automatic rebuilds.</li>
              </ul>
            </article>

          </div>
        </section>

        <section aria-label="Education">
          <div className={styles.sectionLabel}>Education</div>
          <div className={styles.eduRow}>
            <div className={styles.eduLine}>
              <span className={styles.eduDegree}>University of Texas at Austin</span>
              <span className={styles.eduSchool}>Bachelor's in Computer Science · Minor in Studio Art</span>
            </div>
            <div className={styles.eduDate}>May 2021</div>
          </div>
        </section>

      </div>
    </div>
  );
}
