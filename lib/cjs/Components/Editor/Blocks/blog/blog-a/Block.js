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
    name: 'blog-type-a',
    fields: [
        { type: 'text', name: 'one.title', label: 'Title:', group: 'First panel' },
        { type: 'text', name: 'one.subtitle', label: 'Subtitle:', group: 'First panel' },
        { type: 'textarea', name: 'one.description', label: 'Description:', group: 'First panel' },
        { type: 'image', name: 'one.image', label: 'Image:', group: 'First panel' },
        { type: 'text', name: 'two.title', label: 'Title:', group: 'Second panel' },
        { type: 'text', name: 'two.subtitle', label: 'Subtitle:', group: 'Second panel' },
        { type: 'textarea', name: 'two.description', label: 'Description:', group: 'Second panel' },
        { type: 'image', name: 'two.image', label: 'Image:', group: 'Second panel' },
        { type: 'text', name: 'three.title', label: 'Title:', group: 'Third panel' },
        { type: 'text', name: 'three.subtitle', label: 'Subtitle:', group: 'Third panel' },
        { type: 'textarea', name: 'three.description', label: 'Description:', group: 'Third panel' },
        { type: 'image', name: 'three.image', label: 'Image:', group: 'Third panel' },
    ],
    icon: function () { return react_1.default.createElement(Icon_1.default, null); },
    preview: function (data) { return react_1.default.createElement(Preview_1.default, __assign({}, data)); },
};
