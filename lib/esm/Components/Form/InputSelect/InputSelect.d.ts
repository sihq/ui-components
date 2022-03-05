import React from 'react';
import { TypeInput, TypeOptions } from '../../../Types';
interface SelectProperties extends TypeInput {
    label?: string;
    defer?: boolean;
    options?: TypeOptions;
}
declare const _default: React.ForwardRefExoticComponent<SelectProperties & React.RefAttributes<HTMLSelectElement>>;
export default _default;
