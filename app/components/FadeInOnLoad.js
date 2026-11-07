'use client';

import { useEffect, useRef } from "react";
import { srcSetFor } from "../lib/imageSizes";

// Photos further down a page load as they're scrolled to and fade in once loaded.
// The first photo on a page (priority) does neither: it's the reason the page was
// opened, so it starts downloading at once, at high priority, and shows the moment
// it arrives. The fade waits on the page's scripts (it's what marks the photo
// loaded), and on a slow phone that kept the first photo invisible for 10-15 s
// after it had downloaded.
// sizes: how wide the photo shows, so the browser can pick the phone-sized copy
// when it's enough (defaults to the full window width)
export default function FadeInOnLoad({ src, alt, cls = "", style={}, width, height, priority = false, sizes = "100vw" }) {
    const imgRef = useRef(null);
    const srcSet = srcSetFor(src);

    useEffect(() => {
        const img = imgRef.current;
        if (img && img.complete && img.naturalWidth !== 0) {
            img.classList.add("loaded");
        }
    }, []);

    const handleLoad = (e) => {
        e.target.classList.add("loaded");
    };

    if (priority) {
        return (
            <img
                src={src}
                srcSet={srcSet}
                sizes={srcSet && sizes}
                alt={alt}
                fetchPriority="high"
                className={cls}
                style={style}
                width={width}
                height={height}
            />
        );
    }

    return (
        <img
            ref={imgRef}
            src={src}
            srcSet={srcSet}
            sizes={srcSet && sizes}
            alt={alt}
            loading="lazy"
            className={`${cls} fade-media`}
            onLoad={handleLoad}
            style={style}
            width={width}
            height={height}
        />
    );
}
