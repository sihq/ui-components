"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
var react_1 = __importDefault(require("react"));
var Content = function (_a) {
    var children = _a.children;
    return react_1.default.createElement("div", { className: "border-t border-b border-gray-300 bg-gray-100 py-2" }, children);
};
exports.Content = Content;
