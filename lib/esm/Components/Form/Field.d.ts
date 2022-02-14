import { TypeIcon, TypeLabel, TypeOptions, TypeSize, TypeVariant } from '../../Types';
interface FieldProperties {
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
}
declare const _default: (props: FieldProperties) => JSX.Element;
export default _default;
