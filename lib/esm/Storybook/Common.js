"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.argTypes = void 0;
var Types_1 = require("../Types");
exports.argTypes = {
    size: {
        options: Types_1.SIZES,
        defaultValue: 'sm',
        control: { type: 'inline-radio' },
    },
    variant: {
        options: Types_1.VARIANTS,
        defaultValue: 'standard',
        control: { type: 'inline-radio' },
    },
};
