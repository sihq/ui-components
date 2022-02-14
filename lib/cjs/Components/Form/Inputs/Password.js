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
var solid_1 = require("@heroicons/react/solid");
var react_1 = __importStar(require("react"));
var Text_1 = __importDefault(require("./Text"));
exports.default = (function (props) {
    var _a = (0, react_1.useState)(true), hidden = _a[0], set = _a[1];
    var input = react_1.default.createRef();
    var Append = function () { return (react_1.default.createElement("span", { className: "flex flex-shrink-0 items-center justify-center ml-2" },
        react_1.default.createElement("button", { type: "button", onClick: function () {
                var _a;
                set(!hidden);
                (_a = input.current) === null || _a === void 0 ? void 0 : _a.focus();
            }, className: "focus:outline-none z-10 right-2 p-1 rounded-full text-xs text-gray-400 hover:text-blue-500 ".concat(hidden ? '' : 'bg-gray-200') }, hidden ? react_1.default.createElement(solid_1.EyeIcon, { className: "h-4 w-4" }) : react_1.default.createElement(solid_1.EyeOffIcon, { className: "h-4 w-4" })))); };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Text_1.default, __assign({}, props, { type: hidden ? props.type : 'text', ref: input, append: react_1.default.createElement(Append, null) }))));
});
