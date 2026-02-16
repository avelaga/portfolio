'use client';

import React, { useState, useEffect } from 'react';

const bigPadding = "5rem";
const smallPadding = "1rem";
const navbarWidth = 275;

export default function ModularPhoto({ img, width, padding, align, numColumns }) {
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
            <img src={img} style={{ width: "100vw", marginBottom: "1px" }} loading="lazy" />
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
        <img src={img} style={photoStyle} loading="lazy" />
    </div>;
}
