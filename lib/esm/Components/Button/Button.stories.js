"use strict";
// Button.stories.ts|tsx
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconOnly = exports.WithIcon = exports.Standard = void 0;
var outline_1 = require("@heroicons/react/outline");
var Types_1 = require("../../Types");
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
    argTypes: {
        variant: {
            options: Types_1.VARIANTS,
            control: { type: 'select' },
        },
        size: {
            options: Types_1.SIZES,
            control: { type: 'select' },
        },
    },
};
var Standard = function (_a) {
    var variant = _a.variant, size = _a.size;
    return (react_1.default.createElement(Button_1.default, { variant: variant, size: size }, "Button"));
};
exports.Standard = Standard;
var WithIcon = function (_a) {
    var variant = _a.variant, size = _a.size;
    return (react_1.default.createElement(Button_1.default, { variant: variant, size: size, icon: react_1.default.createElement(outline_1.GiftIcon, null) }, "Button with icon"));
};
exports.WithIcon = WithIcon;
var IconOnly = function (_a) {
    var variant = _a.variant, size = _a.size;
    return (react_1.default.createElement(Button_1.default, { variant: variant, size: size, icon: react_1.default.createElement(outline_1.KeyIcon, null) }));
};
exports.IconOnly = IconOnly;
