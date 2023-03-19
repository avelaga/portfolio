import React, { useState, useEffect } from 'react';
import '../pages.scss';

// 3 image widths OR heights - other aspect will be auto
    // second prop for w or h
// 2 paddings
// 3 alignments
// 3 div widths - smallest will allow 3 in a row

// img - image
// width or height - int
// padding - boolean for yes or no
// align - string - "left", "center", "right"
// numColumns - int - divide total width by this to get div width for the one component

const bigPadding = "100px";
const smallPadding = "25px";
const navbarWidth = 275;

export default function ModularPhoto({img, width, height, padding, align, numColumns}){
    const [usableWidth, setUsableWidth] = useState(window.innerWidth - navbarWidth);
 
    const handleResize = () => {
        setUsableWidth(window.innerWidth - navbarWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    let computedStyle = {};

    if(width){
        if(width > usableWidth){
            computedStyle["width"] = `${usableWidth}px`;
        }else{
            computedStyle["width"] = `${width}px`;
        }
    }

    if(height){
        computedStyle["height"] = `${height}px`;
    }

    if(padding){
        computedStyle["padding"] = bigPadding;
    } else{
        computedStyle["padding"] = smallPadding;
    }

    let containerComputedStyle = {};
    if(align === "left"){
        containerComputedStyle["justifyContent"] = `flex-start`;
    } else if((align === "center")){
        containerComputedStyle["justifyContent"] = `center`;
    } else {
        containerComputedStyle["justifyContent"] = `flex-end`;
    }

    containerComputedStyle["alignItems"] = "center"

    const containerWidth = usableWidth / numColumns;
    containerComputedStyle["width"] = `${containerWidth}px`;
    containerComputedStyle["minHeight"] = "100vh";

    return <div className="modular-photo" style={containerComputedStyle}>
        <img src={img} style={computedStyle}/>
    </div>
}