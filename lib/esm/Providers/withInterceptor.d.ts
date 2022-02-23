import { ComponentType, SyntheticEvent } from 'react';
export interface Options {
    onChange?: VoidFunction;
}
export default function withInterceptor<T extends Options>(
    interceptor: (e: SyntheticEvent) => SyntheticEvent,
    Component: ComponentType<T>,
): (options: any) => JSX.Element;
