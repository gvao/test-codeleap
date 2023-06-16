import { ButtonHTMLAttributes } from "react";

export type ButtonProps = {
    isValid?: boolean,
    children?: React.ReactNode,
    fill?: null | 'none' | 'red',
} & ButtonHTMLAttributes<HTMLButtonElement>
