'use client';

import styles from './resume.module.css';
import Header from '../components/v3/Header';
import Footer from '../components/v3/Footer';

const RESUME_PDF = '/Abhi%20Velaga%20Resume.pdf';

// fontClass: the resume sheet's Inter, set up in page.js (a server file, where
// Next's font loader runs)
export default function Resume({ fontClass = '' }) {
  return (
    // V3 page around V2's resume sheet: the sheet stays white so it reads (and
    // prints) like the PDF, sitting on the dark base like a document on a desk
    <div className={`v3 ${styles.page} ${fontClass}`}>
      <Header />
      <div className={styles.toolbar}>
        <div className="v3-label">Resume</div>
        <a
          className="v3-button v3-button--primary"
          href={RESUME_PDF}
          download="Abhi Velaga Resume.pdf"
        >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
          <span className={styles.downloadLabel}>Download PDF</span>
        </a>
      </div>

      <div id="resume-content" className={styles.content}>
        <header>
          <h1 className={styles.name}>Abhi Velaga</h1>
          <div className={styles.contact}>
            <span className={styles.contactItem}>
              <a href="https://abhi.work" target="_blank" rel="noopener">abhi.work</a>
            </span>
            <span className={styles.contactItem}>
              <a href="https://github.com/avelaga" target="_blank" rel="noopener">github.com/avelaga</a>
            </span>
            <span className={styles.contactItem}>
              <a href="https://linkedin.com/in/abhivelaga" target="_blank" rel="noopener">linkedin.com/in/abhivelaga</a>
            </span>
            <span className={styles.contactItem}>
              <a href="mailto:abhinav.velaga@gmail.com">abhinav.velaga@gmail.com</a>
            </span>
          </div>
        </header>

        <p className={styles.bio}>
          Design-minded frontend engineer and technical lead specializing in design systems, UI architecture, and agentic development - building team-multiplying foundations, processes, and teams at founding-stage startups and global enterprises.
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
              <span className={styles.skillValues}>Figma, Storybook, Playwright, Claude Code</span>
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
                  <span className={styles.companyTag}>Series A AI Startup</span>
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
                    <li><strong>Founding US frontend engineer; architected the company's design system and frontend foundation from scratch</strong> - growing it from zero to 70+ components in 6 months and making it the default for all new product development.</li>
                    <li><strong>Acting as technical lead</strong> for US engineering projects - overseeing delivery across 3 projects, coaching and unblocking engineers, and redesigning refinement and design-to-development handoff processes.</li>
                    <li><strong>Designed the frontend for agentic development</strong> with AI-readable documentation (CLAUDE.md, llms.txt), agent rules, PR guardrails, automated release processes, and Figma-to-code audits - enabling engineers and agents to rapidly ship consistent UI.</li>
                    <li><strong>Established the company's first engineering interview process</strong> - rubrics, assessments, and evaluation frameworks - and conducted 15 interviews, hiring 3 engineers, and onboarded them alongside the incoming engineering manager.</li>
                    <li><strong>Unblocked engineering teams</strong> by building a long-needed CI/CD pipeline tailored to the team's release workflow, and surfaced core product risks around concurrent-user scenarios.</li>
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
                    <li><strong>Built and maintained Visa's company-wide React component library</strong>, shipped to millions of users across Visa's global products.</li>
                    <li><strong>Led a white-label UI infrastructure overhaul</strong> enabling fully ADA-compliant brand customization, adopted by major U.S. banks including Wells Fargo and Bank of America.</li>
                    <li><strong>Owned frontend architecture</strong> and cross-functional delivery for merchant-facing payment features serving ~5,000 businesses and processing ~$83M/month - acting as technical lead across engineering, product, and design.</li>
                    <li><strong>Drove full WCAG 2.1 compliance</strong> across a high-traffic React application - screen readers, 400% zoom reflow, semantic HTML, keyboard navigation - eliminating legal risk and meeting enterprise accessibility standards.</li>
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
                    <li><strong>Developed a modular micro-frontend packaging solution</strong> in Angular, reducing go-to-market time and engineering overhead while accelerating product delivery for internal tools.</li>
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
                <li>Designed and built a responsive Next.js site with SSG, performance optimizations, and CI/CD deployment to CloudFront.</li>
                <li>Reduced load time by 75% and iterated on UX based on analytics from 47k+ pageviews.</li>
              </ul>
            </article>

            <article className={styles.project}>
              <div className={styles.projectHeader}>
                <span className={styles.projectName}>pebble</span>
                <span className={styles.projectMeta}>
                  Minimalist, Open-Source Headless CMS
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
                <li>Designed and built a mobile-optimized Next.js site with serverless lead capture, CMS self-editing, and a blog running on pebble.</li>
              </ul>
            </article>

          </div>
        </section>

        <section aria-label="Education">
          <div className={styles.sectionLabel}>Education</div>
          <div className={styles.eduRow}>
            <div>
              <div className={styles.eduDegree}>University of Texas at Austin</div>
              <div className={styles.eduSchool}>Bachelor's in Computer Science · Minor in Studio Art</div>
            </div>
            <div className={styles.eduDate}>May 2021</div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
