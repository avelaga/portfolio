'use client';

import dynamic from 'next/dynamic';
import ProjectPage from './ProjectPage';
import { GalleryContext } from '../ModularPhoto';

const ImageGallery = dynamic(() => import('react-image-gallery'), { ssr: false });

// V3 shell for the photo collection pages. The photos themselves are V2's
// ModularPhoto sequence, unchanged; this adds the optional book carousel and
// tells ModularPhoto there's no V2 sidebar to make room for.
export default function GalleryPage({ tag = 'Photo', carousel, children, ...intro }) {
  return (
    <ProjectPage {...intro} tag={tag} className="v3--gallery">
      {carousel && (
        <div className="v3-gallery-carousel">
          <ImageGallery
            items={carousel}
            showThumbnails={false}
            showFullscreenButton={false}
            useBrowserFullscreen={false}
            showPlayButton={false}
          />
        </div>
      )}

      <GalleryContext.Provider value={{ fullWidth: true }}>
        <div className="v3-gallery">{children}</div>
      </GalleryContext.Provider>
    </ProjectPage>
  );
}
