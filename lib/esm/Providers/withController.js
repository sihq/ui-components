"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withController = void 0;
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Services_1 = require("../Services");
var ReactiveContext_1 = require("../Contexts/ReactiveContext");
var ReactiveControllerContext_1 = require("../Contexts/ReactiveControllerContext");
var lodash_1 = __importDefault(require("lodash"));
function withController(Properties, WrappedComponent) {
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
            Services_1.Event.dispatch(this.context.uuid, { action: 'onMount', controller: this });
        };
        Controller.prototype.componentWillUnmount = function () {
            Services_1.Event.dispatch(this.context.uuid, { action: 'onUnmount', controller: this });
        };
        Controller.prototype.dispatch = function (event) {
            if (event === void 0) { event = null; }
            Services_1.Event.dispatch(this.context.uuid, { action: 'onDispatch', event: event, controller: this });
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
                value: (_b = lodash_1.default.get(this.state.data, name)) !== null && _b !== void 0 ? _b : '',
                onChange: function (_a) {
                    var _b = _a.target, value = _b.value, name = _b.name, type = _b.type;
                    var initial = lodash_1.default.get(_this.state.data, name);
                    _this.update(lodash_1.default.set(_this.state.data, name, type === 'checkbox' ? !initial : value), !defer);
                },
            };
        };
        Controller.prototype.dispatching = function (event) {
            var _a = this.state, scope = _a.scope, status = _a.status;
            return scope === event && status === 'onRequest';
        };
        Controller.prototype.render = function () {
            return (react_1.default.createElement(ReactiveControllerContext_1.ReactiveControllerContext.Provider, { value: {
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
                react_1.default.createElement(WrappedComponent, __assign({}, this.props))));
        };
        return Controller;
    }(react_1.Component));
    Controller.contextType = ReactiveContext_1.ReactiveContext;
    return function (props) {
        var navigate = (0, react_router_dom_1.useNavigate)();
        var parameters = (0, react_router_dom_1.useParams)();
        return react_1.default.createElement(Controller, __assign({ navigate: navigate }, parameters, props));
    };
}
exports.withController = withController;
