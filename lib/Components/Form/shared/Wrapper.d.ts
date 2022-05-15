/// <reference types="react" />
interface Props {
    children: JSX.Element | JSX.Element[];
}
export default function Wrapper({ children }: Props): JSX.Element | null;
export {};
