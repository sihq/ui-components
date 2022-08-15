import { TypeIcon, TypeLabel, TypeOptions, TypeSize, TypeVariant } from '../../Types';
export interface FieldProperties {
    id?: string;
    label?: TypeLabel;
    name: string;
    type: string;
    defer?: boolean;
    secured?: boolean;
    size?: TypeSize;
    variant?: TypeVariant;
    options?: TypeOptions;
    icon?: TypeIcon;
    description?: string;
    value?: string;
}
export declare const Field: (props: FieldProperties) => JSX.Element;
export default Field;
