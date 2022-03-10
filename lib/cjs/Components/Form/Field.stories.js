"use strict";
// Field.stories.ts|tsx
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transfer = exports.ToggleButton = exports.Toggle = exports.Editor = exports.Image = exports.DateOfBirth = exports.Phone = exports.Address = exports.Currency = exports.Textarea = exports.Text = exports.Duration = exports.Timezone = exports.Search = exports.Select = exports.Password = void 0;
var react_router_dom_1 = require("react-router-dom");
var Field_1 = __importDefault(require("./Field"));
var InputDuration_stories_1 = require("./InputDuration/InputDuration.stories");
var InputPassword_stories_1 = require("./InputPassword/InputPassword.stories");
var InputSearch_stories_1 = require("./InputSearch/InputSearch.stories");
var InputSelect_stories_1 = require("./InputSelect/InputSelect.stories");
var InputTimezone_stories_1 = require("./InputTimezone/InputTimezone.stories");
var react_1 = __importDefault(require("react"));
exports.Password = InputPassword_stories_1.InputPassword;
exports.Select = InputSelect_stories_1.InputSelect;
exports.Search = InputSearch_stories_1.InputSearch;
exports.Timezone = InputTimezone_stories_1.InputTimezone;
exports.Duration = InputDuration_stories_1.InputDuration;
exports.default = {
    title: 'Field',
    component: Field_1.default,
    decorators: [
        function (Story) { return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement("div", { className: "w-64" },
                react_1.default.createElement(Story, null)))); },
    ],
};
var Text = function () { return react_1.default.createElement(Field_1.default, { name: "", type: "text", label: "Text:" }); };
exports.Text = Text;
var Textarea = function () { return react_1.default.createElement(Field_1.default, { name: "", type: "textarea", label: "Textarea:" }); };
exports.Textarea = Textarea;
var Currency = function () { return react_1.default.createElement(Field_1.default, { name: "", type: "currency", label: "Currency:" }); };
exports.Currency = Currency;
var Address = function () { return react_1.default.createElement(Field_1.default, { name: "", type: "address", label: "Address:" }); };
exports.Address = Address;
var Phone = function () { return react_1.default.createElement(Field_1.default, { name: "", type: "phone", label: "Phone:" }); };
exports.Phone = Phone;
var DateOfBirth = function () { return (react_1.default.createElement(Field_1.default, { name: "", type: "date-of-birth", label: "Date Of Birth:" })); };
exports.DateOfBirth = DateOfBirth;
var Image = function () { return react_1.default.createElement(Field_1.default, { name: "", type: "image", label: "Image:" }); };
exports.Image = Image;
var Editor = function () { return react_1.default.createElement(Field_1.default, { name: "", type: "editor", label: "Editor:" }); };
exports.Editor = Editor;
var Toggle = function () { return react_1.default.createElement(Field_1.default, { name: "", type: "toggle", label: "Toggle:" }); };
exports.Toggle = Toggle;
var ToggleButton = function () { return (react_1.default.createElement(Field_1.default, { name: "", type: "toggle-button", label: "Toggle Button:" })); };
exports.ToggleButton = ToggleButton;
var Transfer = function () { return react_1.default.createElement(Field_1.default, { name: "", type: "transfer", label: "Transfer:" }); };
exports.Transfer = Transfer;
