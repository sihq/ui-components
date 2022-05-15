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
import React, { Component } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Event } from '../Services';
import { ReactiveContext } from '../Contexts/ReactiveContext';
import { ReactiveControllerContext } from '../Contexts/ReactiveControllerContext';
import _ from 'lodash';
export function withController(Properties, WrappedComponent) {
    var Controller = /** @class */ (function (_super) {
        __extends(Controller, _super);
        function Controller(props) {
            var _this = _super.call(this, props) || this;
            _this.controller = '';
            _this.controller = Properties.controller;
            _this.state = {
                data: {},
                exceptions: {},
                status: 'idle',
                scope: null,
                mounted: false,
            };
            _this.dispatch = _this.dispatch.bind(_this);
            _this.update = _this.update.bind(_this);
            _this.dispatching = _this.dispatching.bind(_this);
            _this.bind = _this.bind.bind(_this);
            return _this;
        }
        Controller.prototype.componentWillMount = function () {
            Event.dispatch(this.context.uuid, { action: 'onMount', controller: this });
        };
        Controller.prototype.componentWillUnmount = function () {
            Event.dispatch(this.context.uuid, { action: 'onUnmount', controller: this });
        };
        Controller.prototype.dispatch = function (event) {
            if (event === void 0) { event = null; }
            Event.dispatch(this.context.uuid, { action: 'onDispatch', event: event, controller: this });
        };
        Controller.prototype.update = function (state, triggerDispatch) {
            var _this = this;
            if (triggerDispatch === void 0) { triggerDispatch = false; }
            var merge = __assign(__assign({}, this.state), { data: state });
            this.setState(merge, function () { return (triggerDispatch ? _this.dispatch() : null); });
        };
        Controller.prototype.bind = function (_a) {
            var _this = this;
            var _b;
            var defer = _a.defer, name = _a.name;
            return {
                value: (_b = _.get(this.state.data, name)) !== null && _b !== void 0 ? _b : '',
                onChange: function (_a) {
                    var _b = _a.target, value = _b.value, name = _b.name, type = _b.type;
                    var initial = _.get(_this.state.data, name);
                    _this.update(_.set(_this.state.data, name, type === 'checkbox' ? !initial : value), !defer);
                },
            };
        };
        Controller.prototype.dispatching = function (event) {
            var _a = this.state, scope = _a.scope, status = _a.status;
            return scope === event && status === 'onRequest';
        };
        Controller.prototype.render = function () {
            return (React.createElement(ReactiveControllerContext.Provider, { value: {
                    mounted: this.state.mounted,
                    status: this.state.status,
                    scope: this.state.scope,
                    exceptions: this.state.exceptions,
                    state: this.state.data,
                    update: this.update,
                    dispatch: this.dispatch,
                    dispatching: this.dispatching,
                    bind: this.bind,
                } },
                React.createElement(WrappedComponent, __assign({}, this.props))));
        };
        return Controller;
    }(Component));
    Controller.contextType = ReactiveContext;
    return function (props) {
        var navigate = useNavigate();
        var parameters = useParams();
        return React.createElement(Controller, __assign({ navigate: navigate }, parameters, props));
    };
}
