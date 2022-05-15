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
exports.InputTimezone = void 0;
var Field_1 = require("../Field");
var react_1 = __importDefault(require("react"));
var Common_1 = require("../../../Storybook/Common");
var InputTimezone = function (args) { return react_1.default.createElement(Field_1.Field, __assign({}, args, { type: "timezone" })); };
exports.InputTimezone = InputTimezone;
exports.InputTimezone.argTypes = __assign(__assign({ label: {
        defaultValue: 'Timezone:',
        control: { type: 'text' },
    }, name: {
        defaultValue: 'timezone',
        control: { type: 'text' },
    } }, { size: Common_1.argTypes.size }), { variant: Common_1.argTypes.variant });
exports.InputTimezone.storyName = 'Timezone';
