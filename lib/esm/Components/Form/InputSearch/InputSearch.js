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
var InputSearch_Append_1 = __importDefault(require("./InputSearch.Append"));
var InputSearch_Prepend_1 = __importDefault(require("./InputSearch.Prepend"));
var react_1 = __importDefault(require("react"));
var Text_1 = __importDefault(require("../Inputs/Text"));
exports.default = (function (props) {
    return react_1.default.createElement(Text_1.default, __assign({}, props, { type: "text", append: react_1.default.createElement(InputSearch_Append_1.default, null), prepend: react_1.default.createElement(InputSearch_Prepend_1.default, null) }));
});
