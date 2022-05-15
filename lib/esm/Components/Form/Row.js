"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Conditional_1 = __importDefault(require("../Conditional"));
var react_1 = __importDefault(require("react"));
var Row = function (_a) {
    var children = _a.children, title = _a.title, description = _a.description;
    return (react_1.default.createElement("div", { className: "flex flex-col xl:flex-row py-8  xl:space-x-8" },
        react_1.default.createElement(Conditional_1.default, { expresion: !!title || !!description },
            react_1.default.createElement("div", { className: "w-64 mb-5 xl:mb-0" },
                react_1.default.createElement("div", { className: "text-gray-700 text-sm font-bold" }, title),
                react_1.default.createElement("div", { className: "text-sm text-gray-500" }, description))),
        react_1.default.createElement("div", { className: "flex md:w-2/3 xl:w-96" }, children)));
};
exports.default = Row;
