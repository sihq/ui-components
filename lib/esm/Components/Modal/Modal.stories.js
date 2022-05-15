"use strict";
// Button.stories.ts|tsx
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormModal = void 0;
var _1 = require(".");
var react_router_dom_1 = require("react-router-dom");
var Button_1 = __importDefault(require("../Button/Button"));
var react_1 = __importDefault(require("react"));
exports.default = {
    title: 'Modal',
    component: _1.Modal,
    decorators: [
        function (Story) { return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(Story, null))); },
    ],
};
var FormModal = function () { return (react_1.default.createElement(_1.Overlay, null,
    react_1.default.createElement(_1.Modal, null,
        react_1.default.createElement("div", { className: "w-96" },
            react_1.default.createElement(_1.Header, { title: "header" }),
            react_1.default.createElement(_1.Content, null,
                react_1.default.createElement("div", { className: "p-5" }, "hello")),
            react_1.default.createElement(_1.Actions, { alignment: "right" },
                react_1.default.createElement("span", null,
                    react_1.default.createElement(Button_1.default, null, "Cancel")),
                react_1.default.createElement("span", null,
                    react_1.default.createElement(Button_1.default, { variant: "primary" }, "Save"))))))); };
exports.FormModal = FormModal;
