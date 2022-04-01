// Button.stories.ts|tsx
import Avatar from './Avatar';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
export default {
    title: 'Avatar',
    component: Avatar,
    decorators: [
        function (Story) { return (React.createElement(BrowserRouter, null,
            React.createElement(Story, null))); },
    ],
    argTypes: {
        name: {
            defaultValue: 'John Doe',
            control: { type: 'text' },
        },
    },
};
export var UserAvatar = function (_a) {
    var name = _a.name;
    return React.createElement(Avatar, { name: name });
};
