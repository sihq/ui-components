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
var solid_1 = require("@heroicons/react/solid");
var reactive_1 = require("@sihq/reactive");
var Text_1 = __importDefault(require("./Text"));
exports.default = (function (props) {
    var input = react_1.default.createRef();
    var _a = (0, react_1.useContext)(reactive_1.ControllerContext), value = _a.value, setValue = _a.setValue;
    var placeholder = props.placeholder, name = props.name;
    var Prepend = function () { return (react_1.default.createElement("span", { className: "flex flex-shrink-0 items-center justify-center mr-2" },
        react_1.default.createElement("span", { className: "p-0 rounded-full text-xs text-gray-500 " },
            react_1.default.createElement(solid_1.SearchIcon, { className: "h-3 w-3" })))); };
    var Append = function () {
        return value(name) ? (react_1.default.createElement("span", { className: "flex flex-shrink-0 items-center justify-center" },
            react_1.default.createElement("button", { type: "button", onClick: function () {
                    var _a;
                    setValue(name, '', false);
                    (_a = input.current) === null || _a === void 0 ? void 0 : _a.focus();
                }, className: "focus:outline-none z-10 bg-gray-200 p-0.5 rounded-full text-xs text-gray-400 hover:text-blue-500" },
                react_1.default.createElement(solid_1.XIcon, { className: "h-3 w-3" })))) : null;
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Text_1.default, __assign({}, props, { ref: input, type: "text", placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : 'Find:', append: react_1.default.createElement(Append, null), prepend: react_1.default.createElement(Prepend, null) }))));
});
