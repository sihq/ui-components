"use strict";
// Field.stories.ts|tsx
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sample = exports.Transfer = exports.ToggleButton = exports.Toggle = exports.Image = exports.DateOfBirth = exports.Address = exports.Currency = exports.Text = exports.Number = exports.Textarea = exports.Editor = exports.Phone = exports.Duration = exports.Timezone = exports.Search = exports.Select = exports.Password = void 0;
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Field_1 = __importDefault(require("./Field"));
var InputDuration_stories_1 = require("./InputDuration/InputDuration.stories");
var InputEditor_stories_1 = require("./InputEditor/InputEditor.stories");
var InputNumber_stories_1 = require("./InputNumber/InputNumber.stories");
var InputPassword_stories_1 = require("./InputPassword/InputPassword.stories");
var InputPhone_stories_1 = require("./InputPhone/InputPhone.stories");
var InputSearch_stories_1 = require("./InputSearch/InputSearch.stories");
var InputSelect_stories_1 = require("./InputSelect/InputSelect.stories");
var InputTextarea_stories_1 = require("./InputTextarea/InputTextarea.stories");
var InputTimezone_stories_1 = require("./InputTimezone/InputTimezone.stories");
var Contexts_1 = require("../../Contexts");
exports.Password = InputPassword_stories_1.InputPassword;
exports.Select = InputSelect_stories_1.InputSelect;
exports.Search = InputSearch_stories_1.InputSearch;
exports.Timezone = InputTimezone_stories_1.InputTimezone;
exports.Duration = InputDuration_stories_1.InputDuration;
exports.Phone = InputPhone_stories_1.InputPhone;
exports.Editor = InputEditor_stories_1.InputEditor;
exports.Textarea = InputTextarea_stories_1.InputTextarea;
exports.Number = InputNumber_stories_1.InputNumber;
exports.default = {
    title: 'Field',
    component: Field_1.default,
    decorators: [
        function (Story) { return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement("div", { style: { minWidth: 300 } },
                react_1.default.createElement(Story, null)))); },
    ],
};
var Text = function () { return react_1.default.createElement(Field_1.default, { name: "", type: "text", label: "Text:" }); };
exports.Text = Text;
var Currency = function () { return react_1.default.createElement(Field_1.default, { name: "", type: "currency", label: "Currency:" }); };
exports.Currency = Currency;
var Address = function () { return react_1.default.createElement(Field_1.default, { name: "", type: "address", label: "Address:" }); };
exports.Address = Address;
var DateOfBirth = function () { return (react_1.default.createElement(Field_1.default, { name: "", type: "date-of-birth", label: "Date Of Birth:" })); };
exports.DateOfBirth = DateOfBirth;
var Image = function () { return react_1.default.createElement(Field_1.default, { name: "", type: "image", label: "Image:" }); };
exports.Image = Image;
var Toggle = function () { return react_1.default.createElement(Field_1.default, { name: "", type: "toggle", label: "Toggle:" }); };
exports.Toggle = Toggle;
var ToggleButton = function () { return (react_1.default.createElement(Field_1.default, { name: "", type: "toggle-button", label: "Toggle Button:" })); };
exports.ToggleButton = ToggleButton;
var Transfer = function () { return react_1.default.createElement(Field_1.default, { name: "", type: "transfer", label: "Transfer:" }); };
exports.Transfer = Transfer;
var Sample = function () {
    var _a = (0, react_1.useState)({
        user: {
            first_name: 'test',
            last_name: 'martin',
            phone: {
                number: '55656',
            },
        },
    }), state = _a[0], setState = _a[1];
    return (react_1.default.createElement(Contexts_1.ReactiveControllerContext.Provider, { value: { update: setState, state: state } },
        react_1.default.createElement("div", { className: "space-y-4", style: { width: 1000 } },
            react_1.default.createElement("div", { className: "space-x-4 flex" },
                react_1.default.createElement(Field_1.default, { name: "user.first_name", type: "text", label: "First name:" }),
                react_1.default.createElement(Field_1.default, { name: "user.last_name", type: "text", label: "Last name:" })),
            react_1.default.createElement(Field_1.default, { name: "user.phone", type: "phone", label: "Phone:" }),
            react_1.default.createElement(Field_1.default, { name: "user.avatar", type: "image", label: "Image:" }),
            react_1.default.createElement("pre", { className: "w-full border text-xs border-gray-300 rounded p-1 overflow-auto mt-5" }, JSON.stringify(state, null, 2)))));
};
exports.Sample = Sample;
