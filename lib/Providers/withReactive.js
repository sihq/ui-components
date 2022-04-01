var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Event, Queue } from '../Services';
import React, { Component } from 'react';
import { Debounce } from '../Tools';
import { ReactiveContext } from '../Contexts/ReactiveContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export function withReactive(WrappedComponent) {
    var _a;
    var Reactive = (_a = /** @class */ (function (_super) {
            __extends(Reactive, _super);
            function Reactive(props) {
                var _a;
                var _this = _super.call(this, props) || this;
                _this.debug = false;
                _this.states = [];
                _this.debug = (_a = props === null || props === void 0 ? void 0 : props.debug) !== null && _a !== void 0 ? _a : false;
                _this.uuid = 'randomid';
                _this.state = {
                    htmlResponse: null,
                };
                _this.onMount = Debounce(_this.onMount.bind(_this), Reactive.delay);
                _this.onUnmount = _this.onUnmount.bind(_this);
                _this.onDispatch = _this.onDispatch.bind(_this);
                _this.onEvent = _this.onEvent.bind(_this);
                _this.request = _this.request.bind(_this);
                _this.renderHtml = _this.renderHtml.bind(_this);
                return _this;
            }
            Reactive.prototype.componentWillMount = function () {
                Event.subscribe(this.uuid, this.onEvent);
            };
            Reactive.prototype.componentWillUnmount = function () {
                Event.unsubscribe(this.uuid, this.onEvent);
            };
            Reactive.prototype.request = function (payload) {
                var _this = this;
                var handleHtmlResponse = function (response) {
                    _this.setState({ htmlResponse: response });
                };
                var handleValidationResponse = function (response) {
                    console.log(response);
                };
                var handleCsrfTokenMismatch = function () {
                    window.location.reload();
                };
                var handleRedirectResponse = function (redirect) {
                    _this.setState({ htmlResponse: null }, function () {
                        _this.props.navigate(new URL(redirect).pathname);
                    });
                };
                return new Promise(function (resolve, reject) {
                    axios
                        .post('/reactive', { payload: _this.debug ? payload : btoa(JSON.stringify(payload)) }, {
                        headers: {
                            'x-debug': _this.debug,
                        },
                    })
                        .then(function (response) {
                        var _a, _b;
                        var payload = _this.debug ? response.data.payload : JSON.parse(atob(response.data.payload));
                        payload.map(function (data, index) {
                            var _a;
                            var merge = __assign(__assign({}, _this.states[index].controller.state), { data: data.state, exceptions: (_a = data === null || data === void 0 ? void 0 : data.exceptions) !== null && _a !== void 0 ? _a : null });
                            _this.states[index].controller.setState(merge);
                        });
                        if ((_a = response.data) === null || _a === void 0 ? void 0 : _a.redirect) {
                            handleRedirectResponse((_b = response.data) === null || _b === void 0 ? void 0 : _b.redirect);
                        }
                        resolve(response);
                    })
                        .catch(function (error) {
                        var _a, _b;
                        var response = error.response;
                        if (error.response.status === 422) {
                            handleValidationResponse(response.data.errors);
                        }
                        else if (((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) === 'CSRF token mismatch.') {
                            handleCsrfTokenMismatch();
                        }
                        else {
                            handleHtmlResponse(response.data);
                        }
                        reject();
                    });
                });
            };
            Reactive.prototype.onEvent = function (data) {
                if (data.action === 'onDispatch') {
                    this.onDispatch(data);
                }
                else if (data.action === 'onMount') {
                    var onMountEvent = data;
                    this.states.push({ state: onMountEvent.state, controller: onMountEvent.controller, mounted: false });
                    this.onMount();
                }
                else if (data.action === 'onUnmount') {
                    this.states = this.states.filter(function (_a) {
                        var controller = _a.controller;
                        return controller !== data.controller;
                    });
                    this.onUnmount();
                }
            };
            Reactive.prototype.onMount = function () {
                var _this = this;
                Queue.enqueue(new Promise(function (resolve) {
                    var payload = _this.states.map(function (_a, index) {
                        var _b;
                        var controller = _a.controller;
                        var payload = {
                            action: _this.states[index].mounted ? 'onRequest' : 'onMount',
                            controller: controller.controller,
                            state: controller.state.data,
                            // @ts-ignore
                            props: (_b = controller.props) !== null && _b !== void 0 ? _b : {},
                        };
                        _this.states[index].mounted = true;
                        var merge = __assign(__assign({}, controller.state), { scope: 'onMount', status: 'onRequest' });
                        controller.setState(merge);
                        return payload;
                    });
                    _this.request(payload).then(function () {
                        _this.states.map(function (_a) {
                            var controller = _a.controller;
                            var merge = __assign(__assign({}, controller.state), { scope: '', status: 'idle', mounted: true });
                            controller.setState(merge);
                        });
                        resolve(true);
                    });
                }));
            };
            Reactive.prototype.onUnmount = function () { };
            Reactive.prototype.onDispatch = function (data) {
                var _this = this;
                Queue.enqueue(new Promise(function (resolve) {
                    var payload = _this.states.map(function (_a) {
                        var _b;
                        var controller = _a.controller;
                        var isCaller = controller === data.controller && data.event !== undefined;
                        var payload = __assign(__assign({ action: isCaller ? 'onRequest' : 'onDispatch' }, (isCaller ? { event: data.event } : {})), { controller: controller.controller, state: controller.state.data, 
                            // @ts-ignore
                            props: (_b = controller.props) !== null && _b !== void 0 ? _b : {} });
                        var merge = __assign(__assign({}, controller.state), { scope: isCaller ? data.event : null, status: isCaller ? 'onRequest' : 'onDispatch' });
                        controller.setState(merge);
                        return payload;
                    });
                    _this.request(payload).then(function () {
                        _this.states.map(function (_a) {
                            var controller = _a.controller;
                            var merge = __assign(__assign({}, controller.state), { scope: '', status: 'idle' });
                            controller.setState(merge);
                        });
                        resolve(true);
                    });
                }));
            };
            Reactive.prototype.renderHtml = function (frame) {
                var _a = this.state.htmlResponse, htmlResponse = _a === void 0 ? false : _a;
                if (!frame) {
                    return;
                }
                var doc = frame.contentDocument;
                doc === null || doc === void 0 ? void 0 : doc.open();
                doc === null || doc === void 0 ? void 0 : doc.write(htmlResponse);
                doc === null || doc === void 0 ? void 0 : doc.close();
            };
            Reactive.prototype.render = function () {
                var _this = this;
                var _a = this.state.htmlResponse, htmlResponse = _a === void 0 ? false : _a;
                return (React.createElement(ReactiveContext.Provider, { value: { uuid: this.uuid } },
                    htmlResponse ? (React.createElement("div", { className: "fixed inset-0 bg-black bg-opacity-75", style: { zIndex: 9999 }, onClick: function () { return _this.setState({ htmlResponse: null }); } },
                        React.createElement("div", { className: "shadow-2xl  rounded-lg rounded-b-none absolute inset-20 bottom-0 bg-gray-200 p-10" },
                            React.createElement("iframe", { className: "h-full w-full", ref: this.renderHtml })))) : null,
                    React.createElement(WrappedComponent, __assign({}, this.props))));
            };
            return Reactive;
        }(Component)),
        _a.delay = 100,
        _a);
    return function (props) {
        var navigate = useNavigate();
        return React.createElement(Reactive, __assign({ navigate: navigate }, props));
    };
}
