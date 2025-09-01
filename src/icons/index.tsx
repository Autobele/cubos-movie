import { SVGAttributes } from "react";

export function MoonAltFill(props: SVGAttributes<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                fill="currentColor"
                d="M11.625 5.01Q11.812 5 12 5a7 7 0 1 1-3.625 12.99a7 7 0 0 0 3.25-12.98M5.4 10.2c.101.304.152.456.203.523a.5.5 0 0 0 .794 0c.05-.067.102-.219.203-.523c.082-.245.123-.368.176-.479a2 2 0 0 1 .945-.945c.111-.053.234-.094.479-.176c.304-.101.456-.152.523-.203a.5.5 0 0 0 0-.794c-.067-.05-.219-.102-.523-.203c-.245-.082-.368-.123-.479-.176a2 2 0 0 1-.945-.945A4 4 0 0 1 6.6 5.8c-.101-.304-.152-.456-.203-.522a.5.5 0 0 0-.794 0c-.05.066-.102.218-.203.522a4 4 0 0 1-.176.479a2 2 0 0 1-.945.945A4 4 0 0 1 3.8 7.4c-.304.101-.456.152-.522.203a.5.5 0 0 0 0 .794c.066.05.218.102.522.203c.245.082.368.123.479.176a2 2 0 0 1 .945.945c.053.111.094.234.176.479"
            ></path>
        </svg>
    )
}

export function SearchAltFill(props: SVGAttributes<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <g fill="none">
                <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M11 18a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0-12a5 5 0 0 0-5 5a1 1 0 1 0 2 0a3 3 0 0 1 3-3a1 1 0 1 0 0-2"
                    clipRule="evenodd"
                ></path>
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="m20 20l-2-2"
                ></path>
            </g>
        </svg>
    )
}

export function Filter(props: SVGAttributes<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <g fill="none" stroke="currentColor" strokeLinecap="round">
                <path d="M5 12V4m14 16v-3M5 20v-4m14-3V4m-7 3V4m0 16v-9"></path>
                <circle cx="5" cy="14" r="2"></circle>
                <circle cx="12" cy="9" r="2"></circle>
                <circle cx="19" cy="15" r="2"></circle>
            </g>
        </svg>
    )
}

export function Sun(props: SVGAttributes<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <g fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"></circle>
                <path
                    strokeLinecap="round"
                    d="M12 5V3m0 18v-2m4.95-11.95l1.414-1.414M5.636 18.364L7.05 16.95M19 12h2M3 12h2m11.95 4.95l1.414 1.414M5.636 5.636L7.05 7.05"
                ></path>
            </g>
        </svg>
    )
}


export function ExpandRight(props: SVGAttributes<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="m9 6l6 6l-6 6"
            ></path>
        </svg>
    )
}

export function ExpandLeft(props: SVGAttributes<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="m15 6l-6 6l6 6"
            ></path>
        </svg>
    )
}
