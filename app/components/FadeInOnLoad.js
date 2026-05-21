'use client';

import { useEffect, useRef } from "react";

export default function FadeInOnLoad({ src, alt, cls = "", style={}, width, height }) {
    const imgRef = useRef(null);

    useEffect(() => {
        const img = imgRef.current;
        if (img && img.complete && img.naturalWidth !== 0) {
            img.classList.add("loaded");
        }
    }, []);

    const handleLoad = (e) => {
        e.target.classList.add("loaded");
    };

    return (
        <img
            ref={imgRef}
            src={src}
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
