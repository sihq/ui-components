"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
function withInteraction(Component) {
    return function (options) {
        var navigate = (0, react_router_dom_1.useNavigate)();
        var location = (0, react_router_dom_1.useLocation)();
        var onClick = options.onClick, modal = options.modal, to = options.to;
        function action() {
            if (onClick) {
                return onClick;
            }
            else if (modal) {
                return function () { return navigate(modal, { state: { from: location } }); };
            }
            else if (to) {
                return function () { return navigate(to); };
            }
            return undefined;
        }
        var newProps = __assign(__assign({}, options), { action: action() });
        return react_1.default.createElement(Component, __assign({}, newProps));
    };
}
exports.default = withInteraction;
