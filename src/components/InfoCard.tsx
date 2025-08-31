import React, { FC, ReactNode } from "react";

interface InfoCardProps {
    title: string;
    subtitle?: string;
    children?: ReactNode;
    titleColor?: string;
    className?: string;
}

export const InfoCard: FC<InfoCardProps> = ({
    title,
    children,
    titleColor = "text-black",
    className = "",
}) => {
    return (
        <div className={`w-full flex flex-col p-[16px] bg-mauve-3/60 rounded-[8px] ${className}`}>
            <h2 className={`text-[16px] text-mauve-11 font-bold m-[0px] mb-[8px] ${titleColor}`}>{title}</h2>
            {children}
        </div>
    );
};
