// Field.stories.ts|tsx
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Field from './Field';
import { InputDuration } from './InputDuration/InputDuration.stories';
import { InputEditor } from './InputEditor/InputEditor.stories';
import { InputPassword } from './InputPassword/InputPassword.stories';
import { InputPhone } from './InputPhone/InputPhone.stories';
import { InputSearch } from './InputSearch/InputSearch.stories';
import { InputSelect } from './InputSelect/InputSelect.stories';
import { InputTimezone } from './InputTimezone/InputTimezone.stories';
import { ReactiveControllerContext } from '../../Contexts';
export var Password = InputPassword;
export var Select = InputSelect;
export var Search = InputSearch;
export var Timezone = InputTimezone;
export var Duration = InputDuration;
export var Phone = InputPhone;
export var Editor = InputEditor;
export default {
    title: 'Field',
    component: Field,
    decorators: [
        function (Story) { return (React.createElement(BrowserRouter, null,
            React.createElement("div", { style: { minWidth: 300 } },
                React.createElement(Story, null)))); },
    ],
};
export var Text = function () { return React.createElement(Field, { name: "", type: "text", label: "Text:" }); };
export var Textarea = function () { return React.createElement(Field, { name: "", type: "textarea", label: "Textarea:" }); };
export var Currency = function () { return React.createElement(Field, { name: "", type: "currency", label: "Currency:" }); };
export var Address = function () { return React.createElement(Field, { name: "", type: "address", label: "Address:" }); };
export var DateOfBirth = function () { return (React.createElement(Field, { name: "", type: "date-of-birth", label: "Date Of Birth:" })); };
export var Image = function () { return React.createElement(Field, { name: "", type: "image", label: "Image:" }); };
export var Toggle = function () { return React.createElement(Field, { name: "", type: "toggle", label: "Toggle:" }); };
export var ToggleButton = function () { return (React.createElement(Field, { name: "", type: "toggle-button", label: "Toggle Button:" })); };
export var Transfer = function () { return React.createElement(Field, { name: "", type: "transfer", label: "Transfer:" }); };
export var Sample = function () {
    var _a = useState({
        user: {
            first_name: 'test',
            last_name: 'martin',
            phone: {
                number: '55656',
            },
        },
    }), state = _a[0], setState = _a[1];
    return (React.createElement(ReactiveControllerContext.Provider, { value: { update: setState, state: state } },
        React.createElement("div", { className: "space-y-4", style: { width: 1000 } },
            React.createElement("div", { className: "space-x-4 flex" },
                React.createElement(Field, { name: "user.first_name", type: "text", label: "First name:" }),
                React.createElement(Field, { name: "user.last_name", type: "text", label: "Last name:" })),
            React.createElement(Field, { name: "user.phone", type: "phone", label: "Phone:" }),
            React.createElement("div", { className: "flex", style: { height: 500 } },
                React.createElement(Field, { name: "editor", type: "editor", label: "Editor:" })),
            React.createElement("pre", { className: "w-full border text-xs border-gray-300 rounded p-1 overflow-auto mt-5" }, JSON.stringify(state, null, 2)))));
};
