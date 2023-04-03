import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from '../styles/Pages.module.scss'

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

// TODO: use next Image blur lazy load, also add transition css 

export default function ModularPhoto({ img, width, padding, align, numColumns }) {


    const [windowWidth] = useDeviceSize();

    let photoStyle = {};
    let containerStyle = {};
    photoStyle["height"] = "auto";
    if (windowWidth > 500) {
        // desktop
        let colWidth = (windowWidth - navbarWidth) / numColumns;
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

        const containerWidth = (window.innerWidth - navbarWidth) / numColumns;
        containerStyle["width"] = `${containerWidth}px`;
    } else {
        // mobile
        photoStyle["width"] = "100vw";
        photoStyle["marginBottom"] = "1px";
        containerStyle["justifyContent"] = `center`;
    }

    return <div className={styles.modular_photo} style={containerStyle}>
        <Image src={img} style={photoStyle} />
    </div>
}

const useDeviceSize = () => {

    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        // component is mounted and window is available
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        // unsubscribe from the event on component unmount
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return [width, height]

}