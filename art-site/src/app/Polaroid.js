"use client";
import Image from "next/image";
import { Beth_Ellen } from "next/font/google";

const bethEllen = Beth_Ellen({
  variable: "--font-beth-ellen",
  weight:'400',
  subsets: ["latin"],
});

export default function Polaroid({src, alt, text}) {
    return (
        <div className={bethEllen.className}>
            <svg width="160" height="190">
                <rect width="150" height="190" fill="white" />
                </svg>
            <Image 
                src={src}
                alt={alt}
                width={110}
                height={110}
                className="absolute bottom-18 left-15"
            />
            <p className="absolute bottom-12 left-16">{text}</p>
        </div>
    );
}