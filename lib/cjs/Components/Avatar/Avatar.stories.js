"use strict";
// Button.stories.ts|tsx
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAvatar = void 0;
var Avatar_1 = __importDefault(require("./Avatar"));
var react_router_dom_1 = require("react-router-dom");
var react_1 = __importDefault(require("react"));
exports.default = {
    title: 'Avatar',
    component: Avatar_1.default,
    decorators: [
        function (Story) { return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(Story, null))); },
    ],
    argTypes: {
        name: {
            defaultValue: 'John Doe',
            control: { type: 'text' },
        },
    },
};
var UserAvatar = function (_a) {
    var name = _a.name;
    return react_1.default.createElement(Avatar_1.default, { name: name });
};
exports.UserAvatar = UserAvatar;
