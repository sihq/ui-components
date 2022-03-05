import React, { Component } from 'react';

import { Event } from '../Services';
import { ReactiveContext } from '../Contexts/ReactiveContext';
import { ReactiveControllerContext } from '../Contexts/ReactiveControllerContext';

export interface ReactiveController {
    controller: string;
    state: object;
    setState: (state: any) => undefined;
}
export interface ReactiveControllerProperties {
    controller: string;
}

export function withController<P>(
    Properties: ReactiveControllerProperties,
    WrappedComponent: React.ComponentType<P>,
): any {
    const Controller = class Controller extends Component<P> {
        protected controller = '';

        constructor(props: P) {
            super(props);
            this.controller = Properties.controller;
            this.state = {};
            this.dispatch = this.dispatch.bind(this);
            this.update = this.update.bind(this);
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
            this.setState(state, () => (triggerDispatch ? this.dispatch() : null));
        }

        render(): JSX.Element {
            return (
                <ReactiveControllerContext.Provider
                    value={{ state: this.state, update: this.update, dispatch: this.dispatch }}
                >
                    <WrappedComponent {...this.props} />
                </ReactiveControllerContext.Provider>
            );
        }
    };
    Controller.contextType = ReactiveContext;
    return Controller;
}
