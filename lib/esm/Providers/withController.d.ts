import React from 'react';
export interface ReactiveController {
    controller: string;
    state: object;
    setState: (state: any) => undefined;
}
export interface ReactiveControllerProperties {
    controller: string;
}
export declare function withController<P>(Properties: ReactiveControllerProperties, WrappedComponent: React.ComponentType<P>): any;
