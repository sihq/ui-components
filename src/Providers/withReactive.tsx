import { Event, Queue } from '../Services';
import React, { Component } from 'react';

import { Debounce } from '../Tools';
import { ReactiveContext } from '../Contexts/ReactiveContext';
import { ReactiveController } from './withController';
import axios from 'axios';

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

export function withReactive<P>(WrappedComponent: React.ComponentType<P>): any {
    return class Reactive extends Component<P, any> {
        static debug = false;
        static delay = 100;
        protected uuid: string;
        public states: ReactiveControllerRegistration[] = [];

        constructor(props: P) {
            super(props);
            this.uuid = 'randomid';
            this.state = {
                htmlResponse: null,
            };
            this.onMount = Debounce(this.onMount.bind(this), Reactive.delay);
            this.onUnmount = this.onUnmount.bind(this);
            this.onDispatch = this.onDispatch.bind(this);
            this.onEvent = this.onEvent.bind(this);
            this.request = this.request.bind(this);
            this.renderHtml = this.renderHtml.bind(this);
        }

        componentWillMount(): void {
            Event.subscribe(this.uuid, this.onEvent);
        }

        componentWillUnmount(): void {
            Event.unsubscribe(this.uuid, this.onEvent);
        }

        request(payload: object): Promise<object> {
            const handleHtmlResponse = (response: any): void => {
                this.setState({ htmlResponse: response });
            };
            const handleValidationResponse = (response: any): void => {
                console.log(response);
            };

            return new Promise((resolve, reject) => {
                axios
                    .post(
                        '/reactive-x',
                        { payload: Reactive.debug ? payload : btoa(JSON.stringify(payload)) },
                        {
                            headers: {
                                'x-debug': Reactive.debug,
                            },
                        },
                    )
                    .then((response) => {
                        const payload = Reactive.debug
                            ? response.data.payload
                            : JSON.parse(atob(response.data.payload));
                        payload.map((data: any, index: number) => {
                            const merge = { ...this.states[index].controller.state, data: data.state };
                            this.states[index].controller.setState(merge);
                        });
                        resolve(response);
                    })
                    .catch((error) => {
                        const response = error.response;
                        if (error.response.status === 422) {
                            handleValidationResponse(response.data.errors);
                        } else {
                            handleHtmlResponse(response.data);
                        }

                        reject();
                    });
            });
        }

        onEvent(data: ReactiveDataEvent): void {
            if (data.action === 'onDispatch') {
                this.onDispatch(data);
            } else if (data.action === 'onMount') {
                const onMountEvent = data as ReactiveOnMountDataEvent;
                this.states.push({ state: onMountEvent.state, controller: onMountEvent.controller, mounted: false });
                this.onMount();
            } else if (data.action === 'onUnmount') {
                this.states = this.states.filter(({ controller }) => {
                    return controller !== data.controller;
                });
                this.onUnmount();
            }
        }

        onMount(): void {
            Queue.enqueue(
                new Promise((resolve) => {
                    const payload = this.states.map(({ controller }, index) => {
                        const payload = {
                            action: this.states[index].mounted ? 'onRequest' : 'onMount',
                            controller: controller.controller,
                            state: controller.state.data,
                        };
                        this.states[index].mounted = true;
                        return payload;
                    });
                    this.request(payload).then(() => {
                        resolve(true);
                    });
                }),
            );
        }

        onUnmount(): void {}

        onDispatch(data: ReactiveDataEvent): void {
            Queue.enqueue(
                new Promise((resolve) => {
                    const payload = this.states.map(({ controller }) => {
                        const isCaller = controller === data.controller && data.event !== undefined;
                        const payload = {
                            action: isCaller ? 'onRequest' : 'onDispatch',
                            ...(isCaller ? { event: data.event } : {}),
                            controller: controller.controller,
                            state: controller.state.data,
                        };
                        const merge = {
                            ...controller.state,
                            scope: isCaller ? data.event : null,
                            status: isCaller ? 'onRequest' : 'onDispatch',
                        };
                        controller.setState(merge);
                        return payload;
                    });
                    this.request(payload).then(() => {
                        this.states.map(({ controller }) => {
                            const merge = { ...controller.state, scope: '', status: 'idle' };
                            controller.setState(merge);
                        });
                        resolve(true);
                    });
                }),
            );
        }

        renderHtml(frame: HTMLIFrameElement): void {
            const { htmlResponse = false } = this.state;
            if (!frame) {
                return;
            }
            const doc = frame.contentDocument;
            doc?.open();
            doc?.write(htmlResponse);
            doc?.close();
        }

        render(): JSX.Element {
            const { htmlResponse = false } = this.state;

            return (
                <ReactiveContext.Provider value={{ uuid: this.uuid }}>
                    {htmlResponse ? (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-75"
                            style={{ zIndex: 9999 }}
                            onClick={(): void => this.setState({ htmlResponse: null })}
                        >
                            <div className="shadow-2xl  rounded-lg rounded-b-none absolute inset-20 bottom-0 bg-gray-200 p-10">
                                <iframe className="h-full w-full" ref={this.renderHtml}></iframe>
                            </div>
                        </div>
                    ) : null}
                    <WrappedComponent {...this.props} />
                </ReactiveContext.Provider>
            );
        }
    };
}