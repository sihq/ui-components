import React from 'react';
export interface ButtonProperties extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: string;
    size?: string;
    icon?: JSX.Element;
    action?: VoidFunction | undefined;
    to?: string;
}
export declare const Button: (options: any) => JSX.Element;
export default Button;
