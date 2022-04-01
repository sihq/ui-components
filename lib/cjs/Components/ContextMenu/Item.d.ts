/// <reference types="react" />
export interface ItemProps {
    children?: JSX.Element | JSX.Element[] | string | null | undefined;
    icon?: JSX.Element;
    label?: string;
    route?: string;
}
export declare const Item: ({ children, icon, label, route }: ItemProps) => JSX.Element;
export default Item;
