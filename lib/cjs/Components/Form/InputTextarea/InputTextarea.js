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
var Contexts_1 = require("../../../Contexts");
var InlineErrors_1 = __importDefault(require("../shared/InlineErrors"));
var Label_1 = __importDefault(require("../shared/Label"));
var Prepend_1 = __importDefault(require("../shared/Prepend"));
var PrivacyBarrier_1 = __importDefault(require("../shared/PrivacyBarrier"));
var Wrapper_1 = __importDefault(require("../shared/Wrapper"));
exports.default = (function (props) {
    var _a;
    var id = props.id, type = props.type, name = props.name, label = props.label, disabled = props.disabled, placeholder = props.placeholder, onChange = props.onChange, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, onFocus = props.onFocus;
    var context = (0, react_1.useContext)(Contexts_1.FieldContext);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Label_1.default, null),
        react_1.default.createElement(Wrapper_1.default, null,
            react_1.default.createElement(Prepend_1.default, null),
            react_1.default.createElement("textarea", __assign({ id: "".concat((_a = id !== null && id !== void 0 ? id : name) !== null && _a !== void 0 ? _a : label) }, { type: type, name: name, disabled: disabled, placeholder: placeholder, onChange: onChange, onKeyDown: onKeyDown, onKeyUp: onKeyUp, onFocus: onFocus }, { ref: context.ref, value: context.value, onChange: function (_a) {
                    var value = _a.target.value;
                    return context.onChange(value);
                }, className: "outline-none bg-transparent flex-1 w-full", style: { minHeight: 100 } })),
            react_1.default.createElement(Append_1.default, null),
            react_1.default.createElement(PrivacyBarrier_1.default, null)),
        react_1.default.createElement(InlineErrors_1.default, null)));
});
