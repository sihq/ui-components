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
import React, { useContext } from 'react';
import Conditional from '../../Conditional';
import { FieldContext } from '../../../Contexts';
import InlineErrors from '../shared/InlineErrors';
import Label from '../shared/Label';
import PrivacyBarrier from '../shared/PrivacyBarrier';
export default (function (props) {
    var _a;
    var context = useContext(FieldContext);
    var id = props.id, name = props.name, label = props.label, append = props.append, prepend = props.prepend, disabled = props.disabled, placeholder = props.placeholder, value = props.value;
    return (React.createElement(React.Fragment, null,
        React.createElement("span", { "data-input": "radio", className: "flex relative flex-col text-gray-600 focus-within:text-blue-500 -ml-1 -mr-2 rounded p-1 pr-2 hover:text-blue-500 cursor-pointer text-xs group" },
            React.createElement("label", { "data-input": "toggle", className: "flex justify-start items-center relative" },
                prepend,
                React.createElement("div", { className: "relative flex-shrink-0 rounded-full w-7 h-4 transition duration-200 ease-linear" },
                    React.createElement("input", __assign({ type: "radio", className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800", ref: context.ref, id: "".concat((_a = id !== null && id !== void 0 ? id : name) !== null && _a !== void 0 ? _a : label) }, { name: name, disabled: disabled, placeholder: placeholder, value: value }, { checked: context.value, onChange: function (_a) {
                            var value = _a.target.value;
                            return context.onChange(value);
                        } }))),
                React.createElement(Conditional, { expresion: !!label },
                    React.createElement("div", { className: "select-none flex flex-col" },
                        React.createElement(Label, null))),
                append),
            React.createElement(PrivacyBarrier, null),
            React.createElement(InlineErrors, null))));
});
