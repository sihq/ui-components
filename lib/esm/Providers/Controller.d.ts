import React from 'react';
export interface ControllerProperties {
    state: any;
    dispatching: (action: string) => boolean;
    dispatch: (action: string) => undefined;
}
export interface ControllerParameters {
    controller: string;
    parameters?: string[];
}
export interface bindProps {
    defer?: boolean;
    name: string;
}
export interface ControllerContext {
    state: object;
    errors: {
        [key: string]: string[];
    };
    bind?: ({ defer }: bindProps) => object;
    value: (name: string) => string | object | boolean;
    setValue: (name: string, value: string | object | boolean, defer?: boolean) => void;
}
export interface ControllerState {
    subscriptions: string[];
    version: string;
    state: object;
    errors: {
        [key: string]: string[];
    };
    dispatching: null | string;
    _subscribed: string[];
}
export declare const ControllerContext: React.Context<ControllerContext>;
export default function Controller({ controller }: ControllerParameters, Component: any): React.ComponentType;
