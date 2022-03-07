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
var react_1 = __importStar(require("react"));
var Append_1 = __importDefault(require("../shared/Append"));
var InlineErrors_1 = __importDefault(require("../InlineErrors"));
var Label_1 = __importDefault(require("../Label"));
var Prepend_1 = __importDefault(require("../shared/Prepend"));
var PrivacyBarrier_1 = __importDefault(require("../PrivacyBarrier"));
var ReactiveControllerContext_1 = require("../../../Contexts/ReactiveControllerContext");
var Wrapper_1 = __importDefault(require("../shared/Wrapper"));
exports.default = react_1.default.forwardRef(function (props, ref) {
    var _a;
    var _b = (0, react_1.useContext)(ReactiveControllerContext_1.ReactiveControllerContext).bind, bind = _b === void 0 ? function () { return ({}); } : _b;
    var id = props.id, type = props.type, name = props.name, label = props.label, _c = props.defer, defer = _c === void 0 ? true : _c, disabled = props.disabled, placeholder = props.placeholder;
    var onChange = props.onChange, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, onFocus = props.onFocus;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Label_1.default, __assign({}, props)),
        react_1.default.createElement(Wrapper_1.default, __assign({}, props),
            react_1.default.createElement(Prepend_1.default, __assign({}, props)),
            react_1.default.createElement("input", __assign({ ref: ref, id: "".concat((_a = id !== null && id !== void 0 ? id : name) !== null && _a !== void 0 ? _a : label) }, { type: type, name: name, disabled: disabled, placeholder: placeholder, onChange: onChange, onKeyDown: onKeyDown, onKeyUp: onKeyUp, onFocus: onFocus }, (onChange ? {} : bind({ defer: defer, name: name })), { className: "outline-none bg-transparent flex-1 w-full" })),
            react_1.default.createElement(Append_1.default, __assign({}, props)),
            react_1.default.createElement(PrivacyBarrier_1.default, __assign({}, props))),
        react_1.default.createElement(InlineErrors_1.default, __assign({}, props))));
});