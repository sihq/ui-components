import React from 'react';
export interface ReactiveController {
    controller: string;
    state: ReactiveControllerState;
    setState: (state: any) => undefined;
    props: any;
}
export interface ReactiveControllerProperties {
    controller: string;
}
export interface ReactiveControllerState {
    data: object;
    exceptions: object;
    status: string;
    scope: string | null;
    mounted: boolean;
}
export interface bindProps {
    defer?: boolean;
    name: string;
}
export declare function withController<P>(Properties: ReactiveControllerProperties, WrappedComponent: React.ComponentType<P>): any;
