import { useEffect, useState } from "react";

const breakpoint = 500;

export default function mediaQuery(){
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    return width < breakpoint;
}