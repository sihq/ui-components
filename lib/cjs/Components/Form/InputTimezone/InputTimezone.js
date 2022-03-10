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
var InputSelect_1 = __importDefault(require("../InputSelect/InputSelect"));
var Timezones_1 = require("./Timezones");
exports.default = (function (props) {
    return react_1.default.createElement(InputSelect_1.default, __assign({}, props, { options: Timezones_1.TIMEZONES }));
});
