import { MouseEventHandler, ReactNode } from "react";

interface IconButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
    className?: string;
}

export function IconButton({ onClick, children, className }: IconButtonProps) {
    return (
        <button
            className={`rounded-button ${className ?? ""}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}