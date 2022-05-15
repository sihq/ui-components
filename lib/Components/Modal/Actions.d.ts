/// <reference types="react" />
export interface ActionsProps {
    children?: JSX.Element | JSX.Element[] | string | null;
    alignment?: 'between' | 'right' | 'left' | 'center';
}
export declare const Actions: ({ children, alignment }: ActionsProps) => JSX.Element;
