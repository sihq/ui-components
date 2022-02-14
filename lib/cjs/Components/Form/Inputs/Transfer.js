"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Label_1 = __importDefault(require("../Label"));
var react_1 = __importDefault(require("react"));
var Transfer = function (_a) {
    var options = _a.options, label = _a.label;
    react_1.default.createElement(Label_1.default, null, label);
    console.log(options);
    return react_1.default.createElement(react_1.default.Fragment, null);
};
exports.default = Transfer;
