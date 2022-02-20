"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actions = void 0;
var react_1 = __importDefault(require("react"));
var ALIGNMENTS = {
    between: 'justify-between',
    right: 'justify-end',
    left: 'justify-start',
    center: 'justify-center',
};
var Actions = function (_a) {
    var children = _a.children, _b = _a.alignment, alignment = _b === void 0 ? 'right' : _b;
    return react_1.default.createElement("div", { className: "px-4 py-3 flex items-center space-x-2 ".concat(ALIGNMENTS[alignment]) }, children);
};
exports.Actions = Actions;
