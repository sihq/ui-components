"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var react_1 = __importDefault(require("react"));
var Modal = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow" }, children));
};
exports.Modal = Modal;
