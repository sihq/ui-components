"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var solid_1 = require("@heroicons/react/solid");
function Prepend() {
    return (react_1.default.createElement("span", { className: "flex flex-shrink-0 items-center justify-center mr-2" },
        react_1.default.createElement("span", { className: "p-0 rounded-full text-xs text-gray-500 " },
            react_1.default.createElement(solid_1.SearchIcon, { className: "h-3 w-3" }))));
}
exports.default = Prepend;
