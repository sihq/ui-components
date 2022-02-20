"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Overlay = void 0;
var react_1 = __importDefault(require("react"));
var Overlay = function (_a) {
    var children = _a.children;
    return react_1.default.createElement("div", { className: "absolute inset-0 bg-black bg-opacity-25 z-50" }, children);
};
exports.Overlay = Overlay;
