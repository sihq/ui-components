"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.default = (function (_a) {
    var children = _a.children, label = _a.label;
    return react_1.default.createElement("span", { className: "font-semibold text-gray-600 text-sm leading-loose select-none" }, children !== null && children !== void 0 ? children : label);
});
