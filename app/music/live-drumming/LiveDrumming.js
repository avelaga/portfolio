'use client';

import ProjectPage from '../../components/v3/ProjectPage';
import { Section, WidePhoto, PhotoPair, Videos } from '../../components/v3/ProjectBlocks';

export default function LiveDrumming() {
  return (
    <ProjectPage
      title="Live drumming"
      projectId="live-drumming"
      tag="Music"
      year="2022–23"
      subtitle="Drums for Caladan and Shivering Demons"
    >
      <Section title="Caladan" role="Drums" years="2022–23">
        <WidePhoto src="/images/music/caladan/caladan.webp" alt="Caladan performing live" />
        <Videos videos={[
          { id: 'VQsZdVG8A8I', title: 'Caladan, Hole in the Wall, 1.7.23' },
          { id: 'hQgL_IebL_s', title: 'Caladan, Woodshed, 12.17.22' },
        ]} />
        <WidePhoto src="/images/music/caladan/group.webp" alt="Caladan portrait" />
      </Section>

      <Section title="Shivering Demons" role="Drums" years="2022–23">
        <WidePhoto src="/images/music/sd/sd1.webp" alt="Shivering Demons performing live" />
        <PhotoPair photos={[
          { src: '/images/music/sd/fallingKid.webp', alt: 'Shivering Demons performing at a house party' },
          { src: '/images/music/sd/sd2.webp', alt: 'Shivering Demons performing live 2' },
        ]} />
        <Videos videos={[
          { id: '1ap9ObDNqAU', title: 'Shivering Demons, Far Out Lounge, 1.13.23' },
          { id: '08FnNPD-Eng', title: 'Shivering Demons, Rio Market, 11.11.22' },
          { id: '6mEqHssj27Y', title: 'Shivering Demons, Pearl St. Co-op, 10.28.22' },
        ]} />
      </Section>
    </ProjectPage>
  );
}
