"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonAltFill, Sun } from "@/icons";
import { IconToggle } from "./IconToggle";

export const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;


    return (
        <header className="relative top-0 left-0 w-full z-50 bg-background border-b-[1px] border-b-mauve-12/30">
            <nav className="max-w-6xl mx-auto w-[90%] flex justify-between px-4 py-[22px]">
                <Link href="/" legacyBehavior>
                    <a className="flex items-center text-mauve-12 no-underline justify-center flex-shrink-0">
                        <Image
                            src={`/assets/logo-cubos${theme === "dark" ? "-white" : ""}.svg`}
                            alt="Logo"
                            width={160}
                            height={36}
                            priority
                        />
                        <h2 className={`font-inter text-[20px] ml-[16px] no-underline`}>Movies</h2>
                    </a>
                </Link>

                <IconToggle
                    className="ml-[10px]"
                    active={theme === "light"}
                    onToggle={() => setTheme(theme === "dark" ? "light" : "dark")}
                    icon={<Sun width={24} height={24} />}
                    activeIcon={<MoonAltFill width={24} height={24} />}
                />
            </nav>
        </header>
    );
}
