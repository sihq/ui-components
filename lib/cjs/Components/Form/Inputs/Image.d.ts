import React from 'react';
import { TypeInput } from '../../../Types';
interface ImageProperties extends TypeInput {
    label?: string;
    defer?: boolean;
}
declare const _default: React.ForwardRefExoticComponent<ImageProperties & React.RefAttributes<HTMLInputElement>>;
export default _default;
