// Button.stories.ts|tsx
import { GiftIcon, KeyIcon } from '@heroicons/react/outline';
import { SIZES, VARIANTS } from '../../Types';
import { BrowserRouter } from 'react-router-dom';
import Button from './Button';
import React from 'react';
export default {
    title: 'Button',
    component: Button,
    decorators: [
        function (Story) { return (React.createElement(BrowserRouter, null,
            React.createElement(Story, null))); },
    ],
    argTypes: {
        variant: {
            options: VARIANTS,
            control: { type: 'select' },
        },
        size: {
            options: SIZES,
            control: { type: 'select' },
        },
    },
};
export var Standard = function (_a) {
    var variant = _a.variant, size = _a.size;
    return (React.createElement(Button, { variant: variant, size: size }, "Button"));
};
export var WithIcon = function (_a) {
    var variant = _a.variant, size = _a.size;
    return (React.createElement(Button, { variant: variant, size: size, icon: React.createElement(GiftIcon, null) }, "Button with icon"));
};
export var IconOnly = function (_a) {
    var variant = _a.variant, size = _a.size;
    return (React.createElement(Button, { variant: variant, size: size, icon: React.createElement(KeyIcon, null) }));
};
