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
var Conditional_1 = __importDefault(require("../../Conditional"));
var Contexts_1 = require("../../../Contexts");
var InlineErrors_1 = __importDefault(require("../shared/InlineErrors"));
var Label_1 = __importDefault(require("../shared/Label"));
var PrivacyBarrier_1 = __importDefault(require("../shared/PrivacyBarrier"));
exports.default = (function (props) {
    var _a;
    var context = (0, react_1.useContext)(Contexts_1.FieldContext);
    var id = props.id, name = props.name, label = props.label, append = props.append, prepend = props.prepend, disabled = props.disabled, placeholder = props.placeholder;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("span", { "data-input": "checkbox", className: "flex relative flex-col text-gray-600 focus-within:text-blue-500 -ml-1 -mr-2 rounded p-1 pr-2 hover:text-blue-500 cursor-pointer text-xs group" },
            react_1.default.createElement("label", { "data-input": "toggle", className: "flex justify-start items-center relative" },
                prepend,
                react_1.default.createElement("div", { className: "relative flex-shrink-0 rounded-full w-7 h-4 transition duration-200 ease-linear" },
                    react_1.default.createElement("input", __assign({ type: "checkbox", className: "opacity-0 absolute inset-0 w-full h-full z-40", ref: context.ref, id: "".concat((_a = id !== null && id !== void 0 ? id : name) !== null && _a !== void 0 ? _a : label) }, { name: name, disabled: disabled, placeholder: placeholder }, { checked: context.value, onChange: function () { return context.onChange(context.value ? false : true); } })),
                    react_1.default.createElement("span", { className: "checked opacity-0 bg-green-500 absolute z-10 left-0 w-full h-full rounded-full transition duration-100 ease-linear" }),
                    react_1.default.createElement("span", { className: "bg-gray-400 absolute left-0 w-full h-full rounded-full" }),
                    react_1.default.createElement("span", { className: "checked-peg absolute z-20 left-0 bg-white w-3 h-3 m-0.5 rounded-full transition transform duration-100 ease-linear cursor-pointer translate-x-0" })),
                react_1.default.createElement(Conditional_1.default, { expresion: !!label },
                    react_1.default.createElement("div", { className: "select-none flex flex-col pl-2" },
                        react_1.default.createElement(Label_1.default, null))),
                append),
            react_1.default.createElement(PrivacyBarrier_1.default, null),
            react_1.default.createElement(InlineErrors_1.default, null))));
});
