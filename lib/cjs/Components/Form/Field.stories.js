"use strict";
// Field.stories.ts|tsx
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleButton = exports.Toggle = exports.Timezone = exports.Search = exports.Password = exports.Editor = exports.Image = exports.Duration = exports.DateOfBirth = exports.Phone = exports.Address = exports.Currency = exports.Select = exports.Textarea = exports.Text = void 0;
var react_router_dom_1 = require("react-router-dom");
var Field_1 = __importDefault(require("./Field"));
var react_1 = __importDefault(require("react"));
exports.default = {
    title: 'Field',
    component: Field_1.default,
    decorators: [
        function (Story) { return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(Story, null))); },
    ],
};
var Text = function () { return react_1.default.createElement(Field_1.default, { name: "", type: "text", label: "Text:" }); };
exports.Text = Text;
var Textarea = function () { return react_1.default.createElement(Field_1.default, { name: "", type: "textarea", label: "Textarea:" }); };
exports.Textarea = Textarea;
var Select = function () { return (react_1.default.createElement(Field_1.default, { name: "", type: "select", label: "Select:", options: [
        { value: 'first', text: 'first' },
        { value: 'second', text: 'second' },
    ] })); };
exports.Select = Select;
var Currency = function () { return react_1.default.createElement(Field_1.default, { name: "", type: "currency", label: "Currency:" }); };
exports.Currency = Currency;
var Address = function () { return react_1.default.createElement(Field_1.default, { name: "", type: "address", label: "Address:" }); };
exports.Address = Address;
var Phone = function () { return react_1.default.createElement(Field_1.default, { name: "", type: "phone", label: "Phone:" }); };
exports.Phone = Phone;
var DateOfBirth = function () { return (react_1.default.createElement(Field_1.default, { name: "", type: "date-of-birth", label: "Date Of Birth:" })); };
exports.DateOfBirth = DateOfBirth;
var Duration = function () { return react_1.default.createElement(Field_1.default, { name: "", type: "duration", label: "Duration:" }); };
exports.Duration = Duration;
var Image = function () { return react_1.default.createElement(Field_1.default, { name: "", type: "image", label: "Image:" }); };
exports.Image = Image;
var Editor = function () { return react_1.default.createElement(Field_1.default, { name: "", type: "editor", label: "Editor:" }); };
exports.Editor = Editor;
var Password = function () { return react_1.default.createElement(Field_1.default, { name: "", type: "password", label: "Password:" }); };
exports.Password = Password;
var Search = function () { return react_1.default.createElement(Field_1.default, { name: "", type: "search", label: "Search:" }); };
exports.Search = Search;
var Timezone = function () { return react_1.default.createElement(Field_1.default, { name: "", type: "timezone", label: "Timezone:" }); };
exports.Timezone = Timezone;
var Toggle = function () { return react_1.default.createElement(Field_1.default, { name: "", type: "toggle", label: "Toggle:" }); };
exports.Toggle = Toggle;
var ToggleButton = function () { return (react_1.default.createElement(Field_1.default, { name: "", type: "toggle-button", label: "Toggle Button:" })); };
exports.ToggleButton = ToggleButton;
