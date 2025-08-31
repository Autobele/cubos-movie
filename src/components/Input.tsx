import { ChangeEvent, FC, ReactNode } from "react";

type InputProps = {
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    customStyles?: string;
    icon?: ReactNode;
};

export const Input: FC<InputProps> = ({
    type = "text",
    placeholder,
    value,
    onChange,
    customStyles = "",
    icon,
}) => {
    return (
        <div className={`flex h-[56px] items-center border border-mauve1-opaque rounded-[4px] ${customStyles}`}>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="pl-[16px] py-[18px] flex-1 border-none bg-transparent rounded-[4px] outline-none text-mauve-9 placeholder:text-mauve-9"
            />
            {icon && <div className="mx-[16px] outline-none">{icon}</div>}
        </div>
    );
};
