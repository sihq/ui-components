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
export var InputEditor = function (args) { return (React.createElement("div", { className: "flex", style: { width: 1000, height: 500 } },
    React.createElement(Field, __assign({}, args, { type: "editor" })))); };
InputEditor.argTypes = __assign(__assign({ label: {
        defaultValue: 'Editor:',
        control: { type: 'text' },
    }, name: {
        defaultValue: 'editor',
        control: { type: 'text' },
    } }, { size: argTypes.size }), { variant: argTypes.variant });
InputEditor.storyName = 'Editor';
