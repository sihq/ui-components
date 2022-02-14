"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Icon_1 = __importDefault(require("./Icon"));
var Preview_1 = __importDefault(require("./Preview"));
var react_1 = __importDefault(require("react"));
exports.default = {
    name: 'hero-type-a',
    fields: [
        { type: 'text', name: 'title', label: 'Title:' },
        { type: 'image', name: 'image', label: 'Image:' },
        { type: 'textarea', name: 'content', label: 'Content:' },
    ],
    icon: function () { return react_1.default.createElement(Icon_1.default, null); },
    preview: function (data) { return react_1.default.createElement(Preview_1.default, __assign({}, data)); },
};
