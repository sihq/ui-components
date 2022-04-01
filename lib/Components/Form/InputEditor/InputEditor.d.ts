import React, { ReactNode } from 'react';
interface EditorProperties extends React.InputHTMLAttributes<HTMLInputElement> {
    id?: string;
    label?: string;
    name: string;
    type: string;
    defer?: boolean;
    prepend?: ReactNode;
    append?: ReactNode;
    size?: string;
    variant?: string;
}
declare const _default: (props: EditorProperties) => JSX.Element;
export default _default;
