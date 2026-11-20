'use client';

import ProjectPage from '../components/v3/ProjectPage';
import Button from '../components/v3/Button';
import { Section, TextBeside, BodyText } from '../components/v3/ProjectBlocks';
import { EXTERNAL_ARROW } from '../components/v3/arrows';

const REPO = 'https://github.com/avelaga/spool';

// Same form as Pebble: what it is beside a screen, then setup beside a second
// one, with the repo linked at the top and the end. Copy drafted from the README
// (2026-11-09), for Abhi to rewrite in his own words
export default function Spool() {
  return (
    <ProjectPage
      title="Spool"
      projectId="spool"
      tag="Software"
      year="2026"
      statement={<Button href={REPO} external>View on GitHub <span aria-hidden="true">{EXTERNAL_ARROW}</span></Button>}
    >
      <Section>
        <TextBeside screenshot={{ src: '/images/software/spool/grid.webp', alt: "Spool on desktop: filters above a roll of frames, with the timeline down the right edge", priority: true }}>
          <BodyText>
            Spool is a calm, self-hosted viewer for a film photography archive. Point it at the folders of scans you already have, and it becomes a fast, filterable archive you browse roll by roll. It&rsquo;s read-only: it never moves, renames or writes a single file in your archive.
          </BodyText>
          <BodyText>
            I built it to replace Flickr for my own ~6,000 film scans. It runs on a Raspberry Pi next to the NAS that holds them.
          </BodyText>
          <BodyText>
            Your folder names become the filters: format, film stock, black and white or colour, and year all come from how you already name your folders, and each dated folder is a roll. It shows one clean JPEG per frame, hides raw scans and duplicates, and new scans copied onto the NAS appear within minutes.
          </BodyText>
        </TextBeside>
      </Section>

      <Section title="Setup and usage">
        <TextBeside screenshot={{ src: '/images/software/spool/phone.webp', alt: "Spool on a phone: filters for type, format, film, tone, year and picks" }}>
          <BodyText>
            Spool runs in Docker on a Raspberry Pi, with the archive mounted read-only. A setup script installs Docker, finds your NAS shares, chooses who can reach it (home network, WireGuard or both) and starts Spool, so from home it&rsquo;s just spool.local.
          </BodyText>
          <BodyText>
            The rules for reading folder names live in one config file, meant to be edited to match how you name things, and a dry run reports how every roll parsed before anything is indexed.
          </BodyText>
        </TextBeside>
      </Section>

      <Section>
        <div className="v3-product-close">
          <BodyText>Check out the code and full documentation on GitHub.</BodyText>
          <Button href={REPO} external>View on GitHub <span aria-hidden="true">{EXTERNAL_ARROW}</span></Button>
        </div>
      </Section>
    </ProjectPage>
  );
}
