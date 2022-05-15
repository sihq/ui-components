"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Item = function (_a) {
    var children = _a.children, icon = _a.icon, label = _a.label, route = _a.route;
    return (react_1.default.createElement(react_router_dom_1.Link, { to: route ? route : '', className: "group flex w-full focus:outline-none relative overflow-hidden items-center px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white" },
        icon ? (react_1.default.createElement("span", { className: "block h-4 w-4 mr-2 text-sm text-blue-500 group-hover:text-white" }, icon)) : null, children !== null && children !== void 0 ? children : label));
};
exports.Item = Item;
exports.default = exports.Item;
