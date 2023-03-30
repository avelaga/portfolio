import React, { useState, useEffect } from 'react';
import '../pages.scss';

// 3 image widths OR heights - other aspect will be auto
// second prop for w or h
// 2 paddings
// 3 alignments
// 3 div widths - smallest will allow 3 in a row

// img - image
// width - int
// padding - boolean for yes or no
// align - string - "left", "center", "right"
// numColumns - int - divide total width by this to get div width for the one component

const bigPadding = "5rem";
const smallPadding = "1rem";
const navbarWidth = 275;

// TODO: lazy load images

export default function ModularPhoto({ img, width, padding, align, numColumns }) {
    const [usableWidth, setUsableWidth] = useState(window.innerWidth - navbarWidth);

    const handleResize = () => {
        setUsableWidth(window.innerWidth - navbarWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

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
        containerStyle["alignItems"] = "center"

        const containerWidth = usableWidth / numColumns;
        containerStyle["width"] = `${containerWidth}px`;
    } else {
        // mobile
        photoStyle["width"] = "100vw";
        photoStyle["marginBottom"] = "1px";
        containerStyle["justifyContent"] = `center`;
    }

    return <div className="modular-photo" style={containerStyle}>
        <img src={img} style={photoStyle} />
    </div>
}