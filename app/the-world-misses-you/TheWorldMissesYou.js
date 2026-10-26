'use client';

import ProjectPage from '../components/v3/ProjectPage';
import { Section, WidePhoto, PhotoPair, BodyText, Loops, Videos } from '../components/v3/ProjectBlocks';

const photo = (n, alt) => ({ src: `/images/software/dadalab/dadalab${n}.webp`, alt });

export default function TheWorldMissesYou() {
  return (
    <ProjectPage
      title="The World Misses You"
      projectId="the-world-misses-you"
      tag="Installation"
      year="2021"
      subtitle="Exhibited at Dadageek, Austin, 2022"
    >
      <Section>
        <WidePhoto {...photo(2, 'A visitor looking up at the LED installation in the hallway')} />
        <BodyText>
          &ldquo;The World Misses You&rdquo; is an LED installation that responds to the changing weather and time via web APIs to automatically transition to matching animations, such as rain drops when it&rsquo;s raining and a twinkling animation when it turns night, bringing the outside conditions inside and giving the indoors a life of its own.
        </BodyText>
      </Section>

      <Section title="In motion" role="Unreleased footage" years="2022">
        <Loops clips={[
          { src: '/videos/the-world-misses-you/rain.mp4', poster: '/videos/the-world-misses-you/rain.jpg', caption: 'Rain' },
          { src: '/videos/the-world-misses-you/twinkle.mp4', poster: '/videos/the-world-misses-you/twinkle.jpg', caption: 'Twinkle' },
          { src: '/videos/the-world-misses-you/opening-night.mp4', poster: '/videos/the-world-misses-you/opening-night.jpg', caption: 'Opening night' },
        ]} />
      </Section>

      <Section title="The exhibition" role="Dadageek, Austin" years="2022">
        <PhotoPair photos={[
          photo(1, 'Rain animation at the exhibition'),
          photo(5, 'The installation glowing pink at the end of the hallway'),
        ]} />
        <PhotoPair photos={[
          photo(3, 'Starry night animation at the exhibition'),
          photo(4, 'Viewing the exhibition'),
        ]} />
        <Videos videos={[{ id: 'CcSitqAJFZk', venue: 'Dadageek, Austin', date: '2022' }]} />
      </Section>
    </ProjectPage>
  );
}
