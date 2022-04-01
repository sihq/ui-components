/// <reference types="react" />
export interface RowProps {
    children: JSX.Element | JSX.Element[];
    title?: JSX.Element | string;
    description?: JSX.Element | string;
}
declare const Row: ({ children, title, description }: RowProps) => JSX.Element;
export default Row;
