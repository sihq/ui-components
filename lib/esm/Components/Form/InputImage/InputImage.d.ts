/// <reference types="react" />
import { TypeInput } from '../../../Types';
interface ImageProperties extends TypeInput {
    label?: string;
    defer?: boolean;
}
export default function Image(props: ImageProperties): JSX.Element;
export {};
