"use client";
import Image from "next/image";

export default function Polaroid({src, alt, text, width=110, height=110}) {
    return (
        <div>
            <svg width="150" height="190">
                <rect width="150" height="190" fill="white" />
            </svg>
            <Image 
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="absolute bottom-18 left-15"
            />
            <p className="absolute bottom-12 left-16">{text}</p>
        </div>
    );
}