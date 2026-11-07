'use client';

import { Children, cloneElement, isValidElement } from 'react';
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
        <div className="v3-gallery">
          {/* The first photo is the one the visitor came for: it loads first, with no fade */}
          {Children.toArray(children).map((child, i) => (i === 0 && isValidElement(child) ? cloneElement(child, { priority: true }) : child))}
        </div>
      </GalleryContext.Provider>
    </ProjectPage>
  );
}
