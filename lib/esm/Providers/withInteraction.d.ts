import { ComponentType } from 'react';
export interface Options {
    onClick?: VoidFunction;
    modal?: string;
    to?: string;
}
export default function withInteraction<T extends Options>(Component: ComponentType<T>): (options: any) => JSX.Element;
