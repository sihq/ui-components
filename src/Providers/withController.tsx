import React, { Component } from 'react';

import { Event } from '../Services';
import { ReactiveContext } from '../Contexts/ReactiveContext';
import { ReactiveControllerContext } from '../Contexts/ReactiveControllerContext';

export interface ReactiveController {
    controller: string;
    state: ReactiveControllerState;
    setState: (state: any) => undefined;
}
export interface ReactiveControllerProperties {
    controller: string;
}

export interface ReactiveControllerState {
    data: object;
    exceptions: object;
    status: string;
    scope: string | null;
}

export function withController<P>(
    Properties: ReactiveControllerProperties,
    WrappedComponent: React.ComponentType<P>,
): any {
    const Controller = class Controller extends Component<P, ReactiveControllerState> {
        protected controller = '';

        constructor(props: P) {
            super(props);
            this.controller = Properties.controller;
            this.state = {
                data: {},
                exceptions: {},
                status: 'idle',
                scope: null,
            };
            this.dispatch = this.dispatch.bind(this);
            this.update = this.update.bind(this);
            this.dispatching = this.dispatching.bind(this);
        }

        componentWillMount(): void {
            Event.dispatch(this.context.uuid, { action: 'onMount', controller: this });
        }

        componentWillUnmount(): void {
            Event.dispatch(this.context.uuid, { action: 'onUnmount', controller: this });
        }

        dispatch(event: string | null = null): void {
            Event.dispatch(this.context.uuid, { action: 'onDispatch', event, controller: this });
        }

        update(state: object, triggerDispatch = false): void {
            const merge = { ...this.state, data: state };
            this.setState(merge, () => (triggerDispatch ? this.dispatch() : null));
        }

        dispatching(event: string) {
            const { scope, status } = this.state;
            return scope === event && status === 'onDispatch';
        }

        render(): JSX.Element {
            return (
                <ReactiveControllerContext.Provider
                    value={{
                        status: this.state.status,
                        scope: this.state.scope,
                        exceptions: this.state.exceptions,
                        state: this.state.data,
                        update: this.update,
                        dispatch: this.dispatch,
                        dispatching: this.dispatching,
                    }}
                >
                    <WrappedComponent {...this.props} />
                </ReactiveControllerContext.Provider>
            );
        }
    };
    Controller.contextType = ReactiveContext;
    return Controller;
}
