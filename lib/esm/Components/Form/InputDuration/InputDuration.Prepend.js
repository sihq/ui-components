"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var solid_1 = require("@heroicons/react/solid");
var react_1 = __importDefault(require("react"));
function Prepend() {
    return (react_1.default.createElement("span", { className: "flex flex-shrink-0 items-center p-0.5 justify-center mr-2 text-gray-400 text-xs" },
        react_1.default.createElement(solid_1.ClockIcon, { className: "h-3 w-3" })));
}
exports.default = Prepend;
