// Button.stories.ts|tsx
import { Actions, Content, Header, Modal, Overlay } from '.';
import { BrowserRouter } from 'react-router-dom';
import Button from '../Button/Button';
import React from 'react';
export default {
    title: 'Modal',
    component: Modal,
    decorators: [
        function (Story) { return (React.createElement(BrowserRouter, null,
            React.createElement(Story, null))); },
    ],
};
export var FormModal = function () { return (React.createElement(Overlay, null,
    React.createElement(Modal, null,
        React.createElement("div", { className: "w-96" },
            React.createElement(Header, { title: "header" }),
            React.createElement(Content, null,
                React.createElement("div", { className: "p-5" }, "hello")),
            React.createElement(Actions, { alignment: "right" },
                React.createElement("span", null,
                    React.createElement(Button, null, "Cancel")),
                React.createElement("span", null,
                    React.createElement(Button, { variant: "primary" }, "Save"))))))); };
