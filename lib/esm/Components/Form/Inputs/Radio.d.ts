import React, { ReactNode } from 'react';
interface RadioProperties extends React.InputHTMLAttributes<HTMLInputElement> {
    id?: string;
    label?: string;
    name: string;
    type: string;
    defer?: boolean;
    prepend?: ReactNode;
    append?: ReactNode;
    size?: string;
    variant?: string;
    value?: string;
}
declare const _default: (props: RadioProperties) => JSX.Element;
export default _default;
