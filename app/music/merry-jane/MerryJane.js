'use client';

import ProjectPage from '../../components/v3/ProjectPage';
import { Section, WidePhoto, BodyText, Releases, Videos } from '../../components/v3/ProjectBlocks';

const EP_LINK = 'https://open.spotify.com/album/097Hlqmh6mqEv6GJbxf61L?si=NO5UrK5mTlymBRe4vKErNw';

export default function MerryJane() {
  return (
    <ProjectPage
      title="Merry Jane & The Fondas"
      projectId="merry-jane"
      tag="Music"
      year="2018–19"
      subtitle="Drums"
    >
      <Section>
        <WidePhoto src="/images/music/mjf/mjf.webp" alt="Merry Jane & The Fondas portrait" />
        <BodyText>
          As the drummer for Merry Jane &amp; The Fondas from 2018 to 2019, I recorded a <a href={EP_LINK} target="_blank" rel="noopener noreferrer">studio EP</a> with renowned guitarist and songwriter, Jackie Venson, and also played an <a href="https://schedule.sxsw.com/2019/artists/2008465" target="_blank" rel="noopener noreferrer">official SXSW showcase</a>.
        </BodyText>
        <WidePhoto src="/images/music/mjf/studio.webp" alt="Merry Jane & The Fondas recording with Jackie Venson" />
      </Section>

      <Section title="Live" role="SXSW" years="2019">
        <Videos videos={[{ id: 'XXMGt_N6Mc0', venue: 'Porchfire Fest SXSW', date: '3.10.19' }]} />
      </Section>

      <Section title="Release" role="Studio EP" years="2019">
        <Releases releases={[{
          cover: '/images/music/mjf/cover.webp',
          title: 'Pulls You Under',
          year: 2019,
          link: EP_LINK,
          alt: 'Pulls You Under album cover',
        }]} />
      </Section>
    </ProjectPage>
  );
}
