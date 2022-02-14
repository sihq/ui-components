import React, { ReactNode } from 'react';
import { TypeIcon } from '../../../Types';
interface ToggleButtonProperties extends React.InputHTMLAttributes<HTMLButtonElement> {
    id?: string;
    label?: string;
    name: string;
    type: string;
    defer?: boolean;
    prepend?: ReactNode;
    append?: ReactNode;
    size?: string;
    variant?: string;
    icon?: TypeIcon;
    description?: string;
}
declare const _default: React.ForwardRefExoticComponent<ToggleButtonProperties & React.RefAttributes<HTMLButtonElement>>;
export default _default;
