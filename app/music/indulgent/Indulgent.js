'use client';

import ProjectPage from '../../components/v3/ProjectPage';
import { Section, WidePhoto, PhotoPair, BodyText, Releases } from '../../components/v3/ProjectBlocks';
import { indulgentReleases } from '../../data/musicImports.js';

export default function Indulgent() {
  return (
    <ProjectPage
      title="Indulgent"
      projectId="indulgent"
      tag="Music"
      year="2015–now"
      subtitle="Guitar, vocals, drums, bass"
    >
      <Section>
        <WidePhoto src="/images/music/indulgent/indulgentlive.webp" alt="Indulgent performing on stage" />
        <BodyText>
          I perform all vocals, drums, guitars, and bass myself for my solo project, Indulgent, and released my recent album, <a href="https://open.spotify.com/album/2d7c0N7uNdi3jfdsTWeZNV?si=K98wvkQmQd6uMvHFrQt2ng" target="_blank" rel="noopener noreferrer">No Drive Will Take Me Home</a>, in 2018 and my debut album, <a href="https://open.spotify.com/album/67RH1N86fW4hIA10m3DhFl?si=Hl4dag6_QhSyX3f4Zv0mhg" target="_blank" rel="noopener noreferrer">Toxic</a>, in 2015.
        </BodyText>
        <PhotoPair photos={[
          { src: '/images/music/indulgent/guitar1.webp', alt: 'Recording guitar in the studio' },
          { src: '/images/music/indulgent/guitar2.webp', alt: 'Recording guitar in the studio 2' },
        ]} />
      </Section>

      <Section title="Releases" role="Albums and singles" years="2015–2022">
        <Releases releases={indulgentReleases} />
      </Section>
    </ProjectPage>
  );
}
