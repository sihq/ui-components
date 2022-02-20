// Field.stories.ts|tsx
import { BrowserRouter } from 'react-router-dom';
import Field from './Field';
import React from 'react';
export default {
    title: 'Field',
    component: Field,
    decorators: [
        function (Story) { return (React.createElement(BrowserRouter, null,
            React.createElement(Story, null))); },
    ],
};
export var Text = function () { return React.createElement(Field, { name: "", type: "text", label: "Text:" }); };
export var Textarea = function () { return React.createElement(Field, { name: "", type: "textarea", label: "Textarea:" }); };
export var Select = function () { return (React.createElement(Field, { name: "", type: "select", label: "Select:", options: [
        { value: 'first', text: 'first' },
        { value: 'second', text: 'second' },
    ] })); };
export var Currency = function () { return React.createElement(Field, { name: "", type: "currency", label: "Currency:" }); };
export var Address = function () { return React.createElement(Field, { name: "", type: "address", label: "Address:" }); };
export var Phone = function () { return React.createElement(Field, { name: "", type: "phone", label: "Phone:" }); };
export var DateOfBirth = function () { return (React.createElement(Field, { name: "", type: "date-of-birth", label: "Date Of Birth:" })); };
export var Duration = function () { return React.createElement(Field, { name: "", type: "duration", label: "Duration:" }); };
export var Image = function () { return React.createElement(Field, { name: "", type: "image", label: "Image:" }); };
export var Editor = function () { return React.createElement(Field, { name: "", type: "editor", label: "Editor:" }); };
export var Password = function () { return React.createElement(Field, { name: "", type: "password", label: "Password:" }); };
export var Search = function () { return React.createElement(Field, { name: "", type: "search", label: "Search:" }); };
export var Timezone = function () { return React.createElement(Field, { name: "", type: "timezone", label: "Timezone:" }); };
export var Toggle = function () { return React.createElement(Field, { name: "", type: "toggle", label: "Toggle:" }); };
export var ToggleButton = function () { return (React.createElement(Field, { name: "", type: "toggle-button", label: "Toggle Button:" })); };
