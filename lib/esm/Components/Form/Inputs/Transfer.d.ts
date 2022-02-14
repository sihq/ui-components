import { TypeIcon, TypeLabel, TypeOptions, TypeSize, TypeVariant } from '../../../Types';
interface Props {
    label?: TypeLabel;
    options?: TypeOptions;
    variant?: TypeVariant;
    size?: TypeSize;
    icon?: TypeIcon;
}
declare const Transfer: ({ options, label }: Props) => JSX.Element | null;
export default Transfer;
