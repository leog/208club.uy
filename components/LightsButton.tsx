"use client"
import { useTheme } from "next-themes";
import React, { useEffect, useState } from 'react'


const LightsButton = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => setHasMounted(true), []);

    if (!hasMounted) return null;

    return (
        <button
            onClick={() => resolvedTheme === "dark" ? setTheme('light') : setTheme("dark")}
            className={`${resolvedTheme === "dark" ? "text-gray-400 hover:text-green-500" : "text-green-500 hover:text-black"} transition-all duration-200`}>
            <svg fill="currentColor" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <g>
                    <g>
                        <path d="M499.2,76.8H345.6c-7.074,0-12.8,5.726-12.8,12.8c0,7.074,5.726,12.8,12.8,12.8h153.6c7.074,0,12.8-5.726,12.8-12.8
			C512,82.526,506.274,76.8,499.2,76.8z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M499.2,243.2H345.6c-7.074,0-12.8,5.726-12.8,12.8c0,7.074,5.726,12.8,12.8,12.8h153.6c7.074,0,12.8-5.726,12.8-12.8
			C512,248.926,506.274,243.2,499.2,243.2z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M499.2,409.6H345.6c-7.074,0-12.8,5.726-12.8,12.8s5.726,12.8,12.8,12.8h153.6c7.074,0,12.8-5.726,12.8-12.8
			S506.274,409.6,499.2,409.6z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M499.2,326.4H345.6c-7.074,0-12.8,5.726-12.8,12.8s5.726,12.8,12.8,12.8h153.6c7.074,0,12.8-5.726,12.8-12.8
			S506.274,326.4,499.2,326.4z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M499.2,160H345.6c-7.074,0-12.8,5.726-12.8,12.8c0,7.074,5.726,12.8,12.8,12.8h153.6c7.074,0,12.8-5.726,12.8-12.8
			C512,165.726,506.274,160,499.2,160z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M251.699,62.601c-4.864-7.296-12.945-11.401-21.308-11.401c-3.183,0-6.4,0.597-9.498,1.835l-17.417,6.946
			C85.35,107.008,0,140.979,0,256s85.35,148.992,203.469,196.019l17.417,6.946c3.106,1.246,6.323,1.835,9.506,1.835
			c8.363,0,16.444-4.105,21.308-11.401C308.335,364.45,308.335,147.55,251.699,62.601z M230.4,435.2C102.4,384,25.6,358.4,25.6,256
			s76.8-128,204.8-179.2C281.6,153.6,281.6,358.4,230.4,435.2z"/>
                    </g>
                </g>
            </svg>
        </button>
    )
}

export default LightsButton