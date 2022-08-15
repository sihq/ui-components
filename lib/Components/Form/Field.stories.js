// Field.stories.ts|tsx
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Button } from '../Button';
import { Controller } from '../..';
import Field from './Field';
import { InputDuration } from './InputDuration/InputDuration.stories';
import { InputEditor } from './InputEditor/InputEditor.stories';
import { InputNumber } from './InputNumber/InputNumber.stories';
import { InputPassword } from './InputPassword/InputPassword.stories';
import { InputPhone } from './InputPhone/InputPhone.stories';
import { InputSearch } from './InputSearch/InputSearch.stories';
import { InputSelect } from './InputSelect/InputSelect.stories';
import { InputTextarea } from './InputTextarea/InputTextarea.stories';
import { InputTinymce } from './InputTinymce/InputTinymce.stories';
import { InputTimezone } from './InputTimezone/InputTimezone.stories';
import { ReactiveControllerContext } from '../../Contexts';
import { withReactive } from '../../Providers/withReactive';
export var Password = InputPassword;
export var Select = InputSelect;
export var Search = InputSearch;
export var Timezone = InputTimezone;
export var Duration = InputDuration;
export var Phone = InputPhone;
export var Editor = InputEditor;
export var Textarea = InputTextarea;
export var Tinymce = InputTinymce;
export var Number = InputNumber;
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
export var Currency = function () { return React.createElement(Field, { name: "", type: "currency", label: "Currency:" }); };
export var Address = function () { return React.createElement(Field, { name: "", type: "address", label: "Address:" }); };
export var DateOfBirth = function () { return (React.createElement(Field, { name: "", type: "date-of-birth", label: "Date Of Birth:" })); };
export var Radio = function () { return React.createElement(Field, { name: "", type: "radio", label: "Radio" }); };
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
            React.createElement(Field, { name: "user.avatar", type: "image", label: "Image:" }),
            React.createElement("pre", { className: "w-full border text-xs border-gray-300 rounded p-1 overflow-auto mt-5" }, JSON.stringify(state, null, 2)),
            React.createElement(Button, { type: "submit" }, "Submit"))));
};
var properties = {
    controller: 'App//Lala',
};
export var SampleController = withReactive(Controller(properties, function () {
    var context = useContext(ReactiveControllerContext);
    var dispatch = context.dispatch;
    var onSubmit = function (e) {
        alert('submit');
        dispatch("save");
        e.preventDefault();
    };
    return (React.createElement("form", __assign({}, { onSubmit: onSubmit }, { className: "space-y-4", style: { width: 1000 } }),
        React.createElement("div", { className: "space-x-4 flex" },
            React.createElement(Field, { name: "user.first_name", type: "text", label: "First name:" }),
            React.createElement(Field, { name: "user.last_name", type: "text", label: "Last name:" })),
        React.createElement(Field, { name: "user.phone", type: "phone", label: "Phone:" }),
        React.createElement(Field, { name: "user.avatar", type: "image", label: "Image:" }),
        React.createElement("pre", { className: "w-full border text-xs border-gray-300 rounded p-1 overflow-auto mt-5" }, JSON.stringify(context, null, 2)),
        React.createElement(Button, { type: "submit" }, "Submit")));
}));
