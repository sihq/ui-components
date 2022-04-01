/// <reference types="react" />
interface Props {
    children: JSX.Element;
    expresion: boolean | null | undefined;
}
declare const Conditional: ({ expresion, children }: Props) => JSX.Element | null;
export default Conditional;
