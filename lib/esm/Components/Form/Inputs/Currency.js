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
var react_currency_format_1 = __importDefault(require("react-currency-format"));
var react_1 = __importDefault(require("react"));
var Text_1 = __importDefault(require("./Text"));
exports.default = (function (props) {
    var Prepend = function () { return (react_1.default.createElement("span", { className: "flex flex-shrink-0 items-center justify-center mr-2 text-gray-500 text-xs" },
        react_1.default.createElement("span", { className: "opacity-75" }, "AUD"),
        " ",
        react_1.default.createElement("span", { className: "font-bold ml-1" }, "$"))); };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_currency_format_1.default, { customInput: function (p) { return react_1.default.createElement(Text_1.default, __assign({}, props, p, { prepend: react_1.default.createElement(Prepend, null) })); }, thousandSeparator: true, decimalScale: 2, fixedDecimalScale: true })));
});
