'use client';

import { useEffect } from "react";

export default function FadeInOnLoad({ src, alt, cls }) {
    useEffect(() => {
        // handle cached images on mount
        document.querySelectorAll("img.fade-media").forEach((img) => {
            if (img.complete && img.naturalWidth !== 0) {
                img.classList.add("loaded");
            }
        });
    }, []);

    const handleLoad = (e) => {
        e.target.classList.add("loaded");
    };

    return (
        <img
            src={src}
            alt={alt}
            loading="lazy"
            className={`${cls} fade-media`}
            onLoad={handleLoad}
        />
    );
}