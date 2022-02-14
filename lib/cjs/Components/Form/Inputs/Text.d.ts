import React from 'react';
import { TypeInput } from '../../../Types';
interface TextProperties extends TypeInput {
    label?: string;
    defer?: boolean;
}
declare const _default: React.ForwardRefExoticComponent<TextProperties & React.RefAttributes<HTMLInputElement>>;
export default _default;
