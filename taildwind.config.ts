import type { Config } from "tailwindcss";
import {
    mauve,
    mauveDark,
    purple,
    purpleDark,
    purpleA,
    mauveA,
} from "@radix-ui/colors";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

const config: Config = {
    content: [
        "./src/app/**/*.{ts,tsx,js,jsx}",
        "./src/components/**/*.{ts,tsx,js,jsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                montserrat: [montserrat.style.fontFamily, "sans-serif"],
            },
            colors: {
                ...mauve,
                ...mauveDark,
                ...mauveA,
                ...purple,
                ...purpleDark,
                ...purpleA,
                primary: "var(--purple9)",
                secondary: "var(--purpleA2)",
                "text-base": "var(--base)",
                foreground: "var(--foreground)",
                background: "var(--background)",
                "mauve1-opaque": "rgba(250, 250, 250, 0.5)"
            },
        },
    },
    plugins: [],
};
export default config;