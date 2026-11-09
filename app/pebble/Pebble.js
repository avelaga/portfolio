'use client';

import ProjectPage from '../components/v3/ProjectPage';
import Button from '../components/v3/Button';
import { Section, TextBeside, BodyText } from '../components/v3/ProjectBlocks';
import { EXTERNAL_ARROW } from '../components/v3/arrows';

const REPO = 'https://github.com/avelaga/pebble';

// The copy is Abhi's own (2026-11-09): what it is and what it does beside the
// editor, then setup beside the posts list, then the GitHub link
export default function Pebble() {
  return (
    <ProjectPage
      title="Pebble"
      projectId="pebble"
      tag="Software"
      year="2026"
      // The repo is where the project lives, so it's linked up front, not only at the end
      statement={<Button href={REPO} external>View on GitHub <span aria-hidden="true">{EXTERNAL_ARROW}</span></Button>}
    >
      <Section>
        <TextBeside screenshot={{ src: '/images/software/pebble/editor.webp', alt: "Writing a post in Pebble's editor, with a photo of the Miata embedded", priority: true }}>
          <BodyText>
            Pebble is a minimalist, self-hosted headless blog CMS built on serverless infrastructure - AKA a dead simple blog editor that you host yourself and is free to use.
          </BodyText>
          <BodyText>
            It includes a minimalist editor to create and manage blog posts, lets you write in both rich text or HTML (useful if you want to embed interactive elements like calculators or charts), and lets you rebuild your site with a single button when your changes are finalized. This means you can optimize your site performance and SEO with static site generation.
          </BodyText>
          <BodyText>
            It&rsquo;s completely tech stack agnostic - it includes an editor UI and an API to access posts - allowing you to integrate it with whatever frontend you&rsquo;re already using.
          </BodyText>
        </TextBeside>
      </Section>

      <Section title="Setup and usage">
        <TextBeside screenshot={{ src: '/images/software/pebble/posts.webp', alt: "Pebble's list of posts, with their status and tags" }}>
          <BodyText>
            Sticking with the theme of minimalism and simplicity, Pebble is also set up with a single setup script, which prompts you to connect a Cloudflare account and then handles the database, image storage, API and editor creation on its own.
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
