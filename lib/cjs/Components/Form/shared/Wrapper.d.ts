/// <reference types="react" />
import { TypeSize, TypeVariant } from '../../../Types';
interface Props {
    children: JSX.Element | JSX.Element[];
    variant?: TypeVariant;
    size?: TypeSize;
}
export default function Wrapper({ children, size, variant }: Props): JSX.Element | null;
export {};
