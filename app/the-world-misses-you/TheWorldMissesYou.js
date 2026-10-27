'use client';

import ProjectPage from '../components/v3/ProjectPage';
import { Section, WidePhoto, WideVideo, PhotoPair, BodyText, Videos } from '../components/v3/ProjectBlocks';

const photo = (n, alt) => ({ src: `/images/software/dadalab/dadalab${n}.webp`, alt });

// One continuous sequence, no section titles; the venue is named once, in the
// subtitle, and the twinkle clip sits among the photos as if it were one
export default function TheWorldMissesYou() {
  return (
    <ProjectPage
      title="The World Misses You"
      projectId="the-world-misses-you"
      tag="Installation"
      year="2022"
      subtitle="Exhibited at Dadalab, Austin, TX"
    >
      <Section>
        <WidePhoto {...photo(2, 'A visitor looking up at the LED installation in the hallway')} />
        <BodyText>
          &ldquo;The World Misses You&rdquo; is an LED installation that responds to the changing weather and time via web APIs to automatically transition to matching animations, such as rain drops when it&rsquo;s raining and a twinkling animation when it turns night, bringing the outside conditions inside and giving the indoors a life of its own.
        </BodyText>
        <PhotoPair photos={[
          photo(1, 'Rain animation at the exhibition'),
          photo(5, 'The installation glowing pink at the end of the hallway'),
        ]} />
        <WideVideo
          src="/videos/the-world-misses-you/twinkle.mp4"
          poster="/videos/the-world-misses-you/twinkle.jpg"
          label="The installation's twinkling night animation"
        />
        <PhotoPair photos={[
          photo(3, 'Starry night animation at the exhibition'),
          photo(4, 'Viewing the exhibition'),
        ]} />
        {/* No caption: it's one more piece of the sequence (the title is for screen readers) */}
        <Videos videos={[{ id: 'CcSitqAJFZk', title: 'The World Misses You, opening night' }]} />
      </Section>
    </ProjectPage>
  );
}
