"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var react_1 = __importDefault(require("react"));
var Header = function (_a) {
    var title = _a.title;
    return (react_1.default.createElement("div", { className: "px-5 py-3" },
        react_1.default.createElement("div", { className: "text-xl text-gray-700" }, title)));
};
exports.Header = Header;
