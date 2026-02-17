'use client';

import { useState, useEffect } from 'react';
import FadeInOnLoad from './FadeInOnLoad';

const bigPadding = "5rem";
const smallPadding = "1rem";
const navbarWidth = 275;

export default function ModularPhoto({ img, alt, width, padding, align, numColumns }) {
    const imgSrc = typeof img === 'object' ? img.src : img;
    const naturalWidth = typeof img === 'object' ? img.width : undefined;
    const naturalHeight = typeof img === 'object' ? img.height : undefined;
    const [usableWidth, setUsableWidth] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setUsableWidth(window.innerWidth - navbarWidth);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Don't render until we know the window width (prevents hydration mismatch)
    if (usableWidth === null) {
        return <div className="modular-photo">
            <FadeInOnLoad src={imgSrc} alt={alt} style={{ width: "100vw", marginBottom: "1px" }} width={naturalWidth} height={naturalHeight} />
        </div>;
    }

    let photoStyle = {};
    let containerStyle = {};

    if(usableWidth + navbarWidth > 500){
        // desktop
        let colWidth = usableWidth / numColumns;
        if (width) {
            if (width > colWidth) {
                photoStyle["width"] = `${colWidth}px`;
            } else {
                photoStyle["width"] = `${width}px`;
            }
        }

        if (padding) {
            photoStyle["padding"] = bigPadding;
        } else {
            photoStyle["padding"] = smallPadding;
        }

        if (align === "left") {
            containerStyle["justifyContent"] = `flex-start`;
        } else if ((align === "center")) {
            containerStyle["justifyContent"] = `center`;
        } else {
            containerStyle["justifyContent"] = `flex-end`;
        }

        containerStyle["minHeight"] = "100vh";
        containerStyle["alignItems"] = "center";

        const containerWidth = usableWidth / numColumns;
        containerStyle["width"] = `${containerWidth}px`;
    } else {
        // mobile
        photoStyle["width"] = "100vw";
        photoStyle["marginBottom"] = "1px";
        containerStyle["justifyContent"] = `center`;
    }

    return <div className="modular-photo" style={containerStyle}>
        <FadeInOnLoad src={imgSrc} alt={alt} style={photoStyle} width={naturalWidth} height={naturalHeight} />
    </div>;
}
