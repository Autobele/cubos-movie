"use client";

import { ReactNode } from "react";
import { StaticImageData } from "next/image";

type WallpaperProps = {
    src: string | StaticImageData;
    alt?: string;
    className?: string;
    children?: ReactNode;
};

export const Wallpaper = ({ src, className = "", children }: WallpaperProps) => {
    return (
        <main
            className={`relative w-full min-h-screen overflow-hidden bg-black ${className}`}
            style={{
                backgroundImage: `
          linear-gradient(180deg, #121113 0%, rgba(18,17,19,0.46) 49.48%, #121113 100%),
          url(${typeof src === "string" ? src : src.src})
        `,
                backgroundSize: "cover",
                backgroundPosition: "top center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="relative z-10">{children}</div>
        </main>
    );
}
