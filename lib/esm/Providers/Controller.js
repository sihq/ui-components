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
import React, { createContext } from 'react';
import _ from 'lodash';
import Subscriptions from '../Services/Subscriptions';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
export var ControllerContext = createContext({
    errors: {},
    state: {},
    value: function () { return ({}); },
    setValue: function () { return ({}); },
    bind: function () { return ({}); },
});
export default function Controller(_a, Component) {
    var controller = _a.controller;
    var Controller = /** @class */ (function (_super) {
        __extends(Controller, _super);
        function Controller(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                version: '',
                state: {},
                errors: {},
                subscriptions: [],
                dispatching: null,
                _subscribed: [],
            };
            _this.request = _this.request.bind(_this);
            _this.onMount = _this.onMount.bind(_this);
            _this.bind = _this.bind.bind(_this);
            _this.dispatch = _this.dispatch.bind(_this);
            _this.dispatching = _this.dispatching.bind(_this);
            _this.subscribe = _this.subscribe.bind(_this);
            _this.handleValidationResponse = _this.handleValidationResponse.bind(_this);
            _this.value = _this.value.bind(_this);
            _this.setValue = _this.setValue.bind(_this);
            return _this;
        }
        Controller.prototype.componentDidMount = function () {
            this.onMount();
        };
        Controller.prototype.componentWillUnmount = function () {
            var _this = this;
            var _subscribed = this.state._subscribed;
            _subscribed.map(function (event) { return _this.unsubscribeToEvent(event); });
        };
        Controller.prototype.UNSAFE_componentWillReceiveProps = function () {
            this.onMount();
        };
        Controller.prototype.request = function (action) {
            var _this = this;
            var payload = {
                action: action,
                controller: controller,
                state: this.state.state,
                props: this.props,
            };
            axios
                .post('/reactive', payload)
                .then(function (response) {
                var _a;
                if (new URL(response.request.responseURL).pathname !== '/reactive') {
                    _this.props.navigate(new URL(response.request.responseURL).pathname);
                    return;
                }
                if (response.status === 200) {
                    _this.setState({
                        state: response.data.state,
                        version: response.data.version,
                        subscriptions: (_a = response.data.subscriptions) !== null && _a !== void 0 ? _a : [],
                        dispatching: null,
                    }, function () { return _this.subscribe(); });
                }
            })
                .catch(function (error) {
                if (error.response.status === 422) {
                    _this.handleValidationResponse(error.response.data);
                }
                else {
                    _this.handleHtmlResponse(error.response.data);
                    _this.setState({ dispatching: null });
                }
            });
            // fetch('/reactive', {
            //     headers: {
            //         Accept: 'application/json',
            //         'Content-Type': 'application/json',
            //     },
            //     method: 'POST',
            //     body: JSON.stringify(payload),
            // }).then((response) => {
            //     if (response.redirected) {
            //         this.props.navigate(new URL(response.url).pathname);
            //         return;
            //     }
            //     if (response.status === 200) {
            //         response
            //             .json()
            //             .then((data) =>
            //                 this.setState(
            //                     {
            //                         state: data.state,
            //                         version: data.version,
            //                         subscriptions: data.subscriptions,
            //                         dispatching: null,
            //                     },
            //                     (): void => this.subscribe(),
            //                 ),
            //             )
            //             .catch(() => response.text().then((data) => this.handleHtmlResponse(data)));
            //     } else if (response.status === 422) {
            //         this.handleValidationResponse(response);
            //     } else {
            //         response.text().then((data) => {
            //             this.handleHtmlResponse(data);
            //             this.setState({ dispatching: null });
            //         });
            //     }
            // });
        };
        Controller.prototype.onMount = function () {
            var _this = this;
            this.setState({ dispatching: 'onMount' }, function () { return _this.request('onMount'); });
        };
        Controller.prototype.dispatch = function (action) {
            var _this = this;
            this.setState({ dispatching: action }, function () { return _this.request(action); });
        };
        Controller.prototype.dispatching = function (action) {
            return this.state.dispatching === action;
        };
        Controller.prototype.unsubscribeToEvent = function (event) {
            console.log("%c unsubscribing to ".concat(event, " on ").concat(controller), 'color: #eb4034');
            Subscriptions.unsubscribe(event, this.onMount);
        };
        Controller.prototype.subscribeToEvent = function (event) {
            console.log("%c subscribing to ".concat(event, " on ").concat(controller), 'color: #25b045');
            Subscriptions.subscribe(event, this.onMount);
        };
        Controller.prototype.subscribe = function () {
            var _this = this;
            var _a = this.state, subscriptions = _a.subscriptions, _subscribed = _a._subscribed;
            var removableSubscriptions = _subscribed.filter(function (x) { return !subscriptions.includes(x); });
            var AddableSubscriptions = subscriptions.filter(function (x) { return !_subscribed.includes(x); });
            removableSubscriptions.map(function (event) { return _this.unsubscribeToEvent(event); });
            AddableSubscriptions.map(function (event) { return _this.subscribeToEvent(event); });
            this.setState({
                _subscribed: subscriptions,
            });
        };
        Controller.prototype.bind = function (_a) {
            var _this = this;
            var _b;
            var defer = _a.defer, name = _a.name;
            return {
                // ref: (ref: any): void => {
                //     // if (ref && this.state) {
                //     //     (ref ?? {}).value = _.get(this.state.state, ref.name) ?? '';
                //     // }
                // },
                value: (_b = _.get(this.state.state, name)) !== null && _b !== void 0 ? _b : '',
                onChange: function (_a) {
                    var _b = _a.target, value = _b.value, name = _b.name, type = _b.type;
                    var initial = _.get(_this.state.state, name);
                    _this.setState({ state: __assign({}, _.set(_this.state.state, name, type === 'checkbox' ? !initial : value)) }, function () {
                        if (!defer) {
                            _this.dispatch("updating:".concat(name));
                        }
                    });
                },
            };
        };
        Controller.prototype.handleHtmlResponse = function (html) {
            alert(html);
        };
        Controller.prototype.handleValidationResponse = function (response) {
            this.setState({ errors: response.errors, dispatching: null });
        };
        Controller.prototype.value = function (name) {
            var _a;
            return (_a = _.get(this.state.state, name)) !== null && _a !== void 0 ? _a : '';
        };
        Controller.prototype.setValue = function (name, value, defer) {
            var _this = this;
            if (defer === void 0) { defer = true; }
            this.setState({ state: __assign({}, _.set(this.state.state, name, value)) }, function () {
                if (!defer) {
                    _this.dispatch("updating:".concat(name));
                }
            });
        };
        Controller.prototype.render = function () {
            return (React.createElement(ControllerContext.Provider, { value: {
                    errors: this.state.errors,
                    state: this.state.state,
                    bind: this.bind,
                    value: this.value,
                    setValue: this.setValue,
                } },
                React.createElement(Component, { state: this.state.state, bind: this.bind, dispatch: this.dispatch, dispatching: this.dispatching })));
        };
        return Controller;
    }(React.PureComponent));
    return function (props) {
        var navigate = useNavigate();
        var parameters = useParams();
        return React.createElement(Controller, __assign({ navigate: navigate }, parameters, props));
    };
}
