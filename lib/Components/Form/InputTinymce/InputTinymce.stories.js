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
import { Field } from '../Field';
import React from 'react';
import { argTypes } from '../../../Storybook/Common';
export var InputTinymce = function (args) { return React.createElement(Field, __assign({}, args, { type: "tinymce" })); };
InputTinymce.argTypes = __assign(__assign({ label: {
        defaultValue: 'Tinymce:',
        control: { type: 'text' },
    }, name: {
        defaultValue: 'user.tinymce',
        control: { type: 'text' },
    } }, { size: argTypes.size }), { variant: argTypes.variant });
InputTinymce.storyName = 'Tinymce';
