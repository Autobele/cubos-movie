import { ReactNode } from "react";

interface IconToggleProps {
    active: boolean;
    onToggle: () => void;
    icon: ReactNode;
    activeIcon?: ReactNode;
    className?: string;
}

export function IconToggle({ active, onToggle, icon, activeIcon, className }: IconToggleProps) {
    return (
        <button
            type="button"
            onClick={onToggle}
            className={`
        rounded-button 
        border-none
        outline-none
        ${active ? "bg-purple9 text-white" : "bg-[#B744F714]"} 
        ${className ?? ""}
      `}
        >
            {active && activeIcon ? activeIcon : icon}
        </button>
    );
}