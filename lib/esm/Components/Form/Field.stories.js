// Field.stories.ts|tsx
import { BrowserRouter } from 'react-router-dom';
import Field from './Field';
import { InputPassword } from './InputPassword/InputPassword.stories';
import { InputSelect } from './InputSelect/InputSelect.stories';
import React from 'react';
export var Password = InputPassword;
export var Select = InputSelect;
export default {
    title: 'Field',
    component: Field,
    decorators: [
        function (Story) { return (React.createElement(BrowserRouter, null,
            React.createElement("div", { className: "w-64" },
                React.createElement(Story, null)))); },
    ],
};
export var Text = function () { return React.createElement(Field, { name: "", type: "text", label: "Text:" }); };
export var Textarea = function () { return React.createElement(Field, { name: "", type: "textarea", label: "Textarea:" }); };
export var Currency = function () { return React.createElement(Field, { name: "", type: "currency", label: "Currency:" }); };
export var Address = function () { return React.createElement(Field, { name: "", type: "address", label: "Address:" }); };
export var Phone = function () { return React.createElement(Field, { name: "", type: "phone", label: "Phone:" }); };
export var DateOfBirth = function () { return (React.createElement(Field, { name: "", type: "date-of-birth", label: "Date Of Birth:" })); };
export var Duration = function () { return React.createElement(Field, { name: "", type: "duration", label: "Duration:" }); };
export var Image = function () { return React.createElement(Field, { name: "", type: "image", label: "Image:" }); };
export var Editor = function () { return React.createElement(Field, { name: "", type: "editor", label: "Editor:" }); };
export var Search = function () { return React.createElement(Field, { name: "", type: "search", label: "Search:" }); };
export var Timezone = function () { return React.createElement(Field, { name: "", type: "timezone", label: "Timezone:" }); };
export var Toggle = function () { return React.createElement(Field, { name: "", type: "toggle", label: "Toggle:" }); };
export var ToggleButton = function () { return (React.createElement(Field, { name: "", type: "toggle-button", label: "Toggle Button:" })); };
export var Transfer = function () { return React.createElement(Field, { name: "", type: "transfer", label: "Transfer:" }); };
