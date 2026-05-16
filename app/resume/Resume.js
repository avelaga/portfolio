'use client';

import styles from './resume.module.css';
import Navbar from '../components/Navbar';

async function exportPDF() {
  const html2pdf = (await import('html2pdf.js')).default;
  const element = document.getElementById('resume-content');
  html2pdf().set({
    margin: [0.4, 0],
    filename: 'abhi-velaga-resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    pagebreak: { avoid: ['article', 'li'] },
  }).from(element).save();
}

export default function Resume() {
  return (
    <div className="page">
      <Navbar />
      {/* <button className={styles.printBtn} onClick={exportPDF}>
        Export PDF
      </button> */}

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
          Senior frontend engineer specializing in design systems and component architecture - with experience spanning founding-stage startups and enterprise product surfaces at scale.
        </p>

        <section aria-label="Skills">
          <div className={styles.sectionLabel}>Skills</div>
          <div className={styles.skillsGrid}>
            <div className={styles.skillRow}>
              <span className={styles.skillCategory}>Stack</span>
              <span className={styles.skillValues}>React, Next.js, Astro.js, Node.js, Angular, Jest, AWS, Cloudflare, Vercel, Robot</span>
            </div>
            <div className={styles.skillRow}>
              <span className={styles.skillCategory}>Tools</span>
              <span className={styles.skillValues}>WCAG 2.1, CI/CD, Docker, UI/UX Design, Figma, Jenkins</span>
            </div>
            <div className={styles.skillRow}>
              <span className={styles.skillCategory}>Languages</span>
              <span className={styles.skillValues}>JavaScript, TypeScript, Python, Java, SQL</span>
            </div>
          </div>
        </section>

        <section aria-label="Experience">
          <div className={styles.sectionLabel}>Experience</div>
          <div className={styles.experienceList}>

            <article className={styles.job}>
              <div className={styles.jobCompanyHeader}>
                <span className={styles.company}>Biorce</span>
                <span className={styles.location}>Austin, TX</span>
              </div>
              <div className={styles.roles}>
                <div className={styles.roleBlock}>
                  <div className={styles.roleHeader}>
                    <span className={styles.roleTitle}>Senior Frontend Developer</span>
                    <span className={styles.dates}>April 2026 – Present</span>
                  </div>
                  <ul className={styles.bullets}>
                    <li><strong>Founding US frontend engineer</strong> at a European MedTech AI startup, reporting directly to the CTO and architecting the company's design system from the ground up.</li>
                    <li><strong>Established the full technical architecture</strong> for the design system - stack selection, repo setup, and component infrastructure - collaborating directly with the design team to align on requirements from day one.</li>
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
                    <span className={styles.roleTitle}>Senior Software Engineer</span>
                    <span className={styles.dates}>March 2023 – April 2026</span>
                  </div>
                  <ul className={styles.bullets}>
                    <li><strong>Owned frontend architecture and cross-functional delivery</strong> for merchant-facing payment features serving ~5,000 businesses and processing ~$83M/month, acting as technical lead across engineering, product, and design.</li>
                    <li><strong>Drove full WCAG 2.1 compliance</strong> across a high-traffic React application - screen readers, 400% zoom reflow, semantic HTML, keyboard navigation - eliminating legal risk and meeting enterprise accessibility standards.</li>
                    <li><strong>Shipped mobile-responsive payment flows</strong> used by global merchants across Visa's acquiring network, improving usability and consistency across devices.</li>
                    <li><strong>Owned monthly production releases and incident response,</strong> executing hotfixes with zero customer impact.</li>
                  </ul>
                </div>
                <div className={styles.roleBlock}>
                  <div className={styles.roleHeader}>
                    <span className={styles.roleTitle}>UI/UX Software Engineer</span>
                    <span className={styles.dates}>June 2021 – February 2023</span>
                  </div>
                  <ul className={styles.bullets}>
                    <li><strong>Built and maintained Visa's company-wide React component library,</strong> shipped to millions of users across Visa's global product surface, including full WCAG 2.1 accessibility features - mobile reflow, screen reader support, focus management, and high-contrast themes.</li>
                    <li><strong>Led a white-label UI infrastructure overhaul</strong> enabling fully ADA-compliant brand customization, adopted by major U.S. banks including Wells Fargo and Bank of America.</li>
                    <li><strong>Built end-to-end UI and database test automation</strong> using Robot Framework and Selenium, eliminating production rollbacks and achieving 100% transaction settlement accuracy across payment networks.</li>
                  </ul>
                </div>
                <div className={styles.roleBlock}>
                  <div className={styles.roleHeader}>
                    <span className={styles.roleTitle}>Software Engineer Intern</span>
                    <span className={styles.dates}>Summer 2020</span>
                  </div>
                  <ul className={styles.bullets}>
                    <li><strong>Designed and built a proof-of-concept platform</strong> to help small merchants drive sales during COVID-19 - React frontend consuming a Django REST API (25+ endpoints) with Visa payment integration, shipped to AWS via CI/CD.</li>
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
                    <li><strong>Developed a modular micro-frontend packaging solution</strong> in Angular reducing go-to-market time, internal engineering overhead, and accelerating product delivery for new internal tools.</li>
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
                <li>Designed and built a <strong>responsive Next.js site</strong> with SSG, performance optimizations, and CI/CD deployment to AWS S3 + CloudFront.</li>
                <li>Improved load performance by <strong>300%</strong> and iterated on UX based on analytics from 47k+ pageviews.</li>
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
                <li>Architected a <strong>Cloudflare-native headless CMS</strong> (Workers, D1, R2) with versioned REST API and JWT Auth.</li>
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
                <li>Designed and developed a <strong>mobile-optimized Next.js site</strong> on AWS with automated serverless lead capture.</li>
              </ul>
            </article>

          </div>
        </section>

        <section aria-label="Education">
          <div className={styles.sectionLabel}>Education</div>
          <div className={styles.eduRow}>
            <div>
              <div className={styles.eduDegree}>Bachelor's in Computer Science - University of Texas at Austin</div>
              <div className={styles.eduSchool}>Minor in Studio Art</div>
            </div>
            <div className={styles.eduDate}>May 2021</div>
          </div>
        </section>

      </div>
    </div>
  );
}
