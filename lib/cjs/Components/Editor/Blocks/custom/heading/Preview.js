"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.default = (function (data) {
    var _a;
    return (react_1.default.createElement("section", { className: "text-gray-600 body-font text-left" },
        react_1.default.createElement("div", { className: "container px-5 py-6 mx-auto" },
            react_1.default.createElement("div", { className: "text-2xl font-bold" }, (_a = data === null || data === void 0 ? void 0 : data.title) !== null && _a !== void 0 ? _a : 'title'))));
});
