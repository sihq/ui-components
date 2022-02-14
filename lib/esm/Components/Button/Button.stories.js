// Button.stories.ts|tsx
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
};
export var Primary = function () { return React.createElement(Button, { variant: "primary" }, "Button"); };
export var Standard = function () { return React.createElement(Button, { variant: "standard" }, "Button"); };
export var Destructive = function () { return React.createElement(Button, { variant: "destructive" }, "Button"); };
