'use client';

import ProjectPage from '../../components/v3/ProjectPage';
import { Section, WidePhoto, PhotoPair, BodyText, Releases, Videos } from '../../components/v3/ProjectBlocks';

const EP_LINK = 'https://open.spotify.com/album/097Hlqmh6mqEv6GJbxf61L?si=NO5UrK5mTlymBRe4vKErNw';

// Drums in other people's bands, one section per band, oldest first. Merry Jane &
// The Fondas and Live drumming (Caladan, Shivering Demons) used to be two cards
// saying the same thing; together they're one piece of the range (V3-ethos.md)
export default function Drumming() {
  return (
    <ProjectPage
      title="Drumming"
      projectId="drumming"
      tag="Music"
      year="2018–23"
      subtitle="Drums for Merry Jane & The Fondas, Caladan and Shivering Demons"
    >
      <Section title="Merry Jane & The Fondas" role="Drums" years="2018–19">
        <WidePhoto priority src="/images/music/mjf/mjf.webp" alt="Merry Jane & The Fondas portrait" />
        <BodyText>
          As the drummer for Merry Jane &amp; The Fondas from 2018 to 2019, I recorded a <a href={EP_LINK} target="_blank" rel="noopener noreferrer">studio EP</a> with renowned guitarist and songwriter, Jackie Venson, and also played an <a href="https://schedule.sxsw.com/2019/artists/2008465" target="_blank" rel="noopener noreferrer">official SXSW showcase</a>.
        </BodyText>
        <WidePhoto src="/images/music/mjf/studio.webp" alt="Merry Jane & The Fondas recording with Jackie Venson" />
        {/* No caption: YouTube shows the video's own title on the player */}
        <Videos videos={[{ id: 'XXMGt_N6Mc0', title: 'Merry Jane & The Fondas, Porchfire Fest SXSW, 3.10.19' }]} />
        <Releases releases={[{
          cover: '/images/music/mjf/cover.webp',
          title: 'Pulls You Under',
          year: 2019,
          link: EP_LINK,
          alt: 'Pulls You Under album cover',
        }]} />
      </Section>

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
