import React from "react";

interface CircularRatingProps {
    rating: number;
    size?: number;
    strokeWidth?: number;
}

export const CircularRating: React.FC<CircularRatingProps> = ({
    rating,
    size = 98,
    strokeWidth = 6,
}) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (rating / 100) * circumference;

    let strokeColor = "#FACB48";
    if (rating >= 70) strokeColor = "#21cf79";
    else if (rating >= 40) strokeColor = "#ffe000";
    else strokeColor = "#f76b15";

    return (
        <div className="relative flex items-center justify-center">
            <svg width={size} height={size}>
                <circle
                    stroke="#525153"
                    fill="#00000040"
                    strokeWidth={strokeWidth}
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
                <circle
                    className={"#A1A1A1"}
                    stroke={strokeColor}
                    fill="#00000040"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                />
            </svg>
            <span className={`absolute text-[20px] font-bold text-[${strokeColor}]`}>{`${rating}`}<span className="text-[12px]">%</span></span>
        </div>
    );
};
