"use strict";
// Button.stories.ts|tsx
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Destructive = exports.Standard = exports.Primary = void 0;
var react_router_dom_1 = require("react-router-dom");
var Button_1 = __importDefault(require("./Button"));
var react_1 = __importDefault(require("react"));
exports.default = {
    title: 'Button',
    component: Button_1.default,
    decorators: [
        function (Story) { return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(Story, null))); },
    ],
};
var Primary = function () { return react_1.default.createElement(Button_1.default, { variant: "primary" }, "Button"); };
exports.Primary = Primary;
var Standard = function () { return react_1.default.createElement(Button_1.default, { variant: "standard" }, "Button"); };
exports.Standard = Standard;
var Destructive = function () { return react_1.default.createElement(Button_1.default, { variant: "destructive" }, "Button"); };
exports.Destructive = Destructive;
