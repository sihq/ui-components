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
var InputNumber_Append_1 = __importDefault(require("./InputNumber.Append"));
var react_1 = __importDefault(require("react"));
var Text_1 = __importDefault(require("../Inputs/Text"));
exports.default = (function (props) {
    return react_1.default.createElement(Text_1.default, __assign({}, props, { append: react_1.default.createElement(InputNumber_Append_1.default, null) }));
});
