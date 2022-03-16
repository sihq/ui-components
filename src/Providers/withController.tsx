import React, { Component } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Event } from '../Services';
import { ReactiveContext } from '../Contexts/ReactiveContext';
import { ReactiveControllerContext } from '../Contexts/ReactiveControllerContext';
import _ from 'lodash';

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
                mounted: false,
            };
            this.dispatch = this.dispatch.bind(this);
            this.update = this.update.bind(this);
            this.dispatching = this.dispatching.bind(this);
            this.bind = this.bind.bind(this);
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

        bind({ defer, name }: bindProps): object {
            return {
                value: _.get(this.state.data, name) ?? '',
                onChange: ({ target: { value, name, type } }: any): void => {
                    const initial = _.get(this.state.data, name);
                    this.update(_.set(this.state.data, name, type === 'checkbox' ? !initial : value), !defer);
                },
            };
        }

        dispatching(event: string) {
            const { scope, status } = this.state;
            return scope === event && status === 'onRequest';
        }

        render(): JSX.Element {
            return (
                <ReactiveControllerContext.Provider
                    value={{
                        mounted: this.state.mounted,
                        status: this.state.status,
                        scope: this.state.scope,
                        exceptions: this.state.exceptions,
                        state: this.state.data,
                        update: this.update,
                        dispatch: this.dispatch,
                        dispatching: this.dispatching,
                        bind: this.bind,
                    }}
                >
                    <WrappedComponent {...this.props} />
                </ReactiveControllerContext.Provider>
            );
        }
    };
    Controller.contextType = ReactiveContext;

    return (props: any) => {
        const navigate = useNavigate();
        const parameters = useParams();
        return <Controller navigate={navigate} {...parameters} {...props} />;
    };
}
