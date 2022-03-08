import React from 'react';
import { ReactiveController } from './withController';
export interface ReactiveDataEvent {
    action: string;
    controller: ReactiveController;
    event?: string;
}
export interface ReactiveOnMountDataEvent extends ReactiveDataEvent {
    state: VoidFunction;
}
export interface ReactiveControllerRegistration {
    controller: ReactiveController;
    state: VoidFunction;
    mounted: boolean;
}
export interface ReactiveProps {
    debug?: boolean;
    navigate: (to: string) => undefined;
}
export declare function withReactive<P>(WrappedComponent: React.ComponentType<P>): any;
