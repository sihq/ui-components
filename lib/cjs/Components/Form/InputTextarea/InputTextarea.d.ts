import React, { ReactNode } from 'react';
export interface TextProperties extends React.InputHTMLAttributes<HTMLTextAreaElement> {
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
declare const _default: (props: TextProperties) => JSX.Element;
export default _default;
