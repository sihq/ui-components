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
    var id = props.id, name = props.name, label = props.label, append = props.append, prepend = props.prepend, disabled = props.disabled, placeholder = props.placeholder;
    return (React.createElement(React.Fragment, null,
        React.createElement("span", { "data-input": "checkbox", className: "flex relative flex-col text-gray-600 focus-within:text-blue-500 -ml-1 -mr-2 rounded p-1 pr-2 hover:text-blue-500 cursor-pointer text-xs group" },
            React.createElement("label", { "data-input": "toggle", className: "flex justify-start items-center relative" },
                prepend,
                React.createElement("div", { className: "relative flex-shrink-0 rounded-full w-7 h-4 transition duration-200 ease-linear" },
                    React.createElement("input", __assign({ type: "checkbox", className: "opacity-0 absolute inset-0 w-full h-full z-40", ref: context.ref, id: "".concat((_a = id !== null && id !== void 0 ? id : name) !== null && _a !== void 0 ? _a : label) }, { name: name, disabled: disabled, placeholder: placeholder }, { checked: context.value, onChange: function () { return context.onChange(context.value ? false : true); } })),
                    React.createElement("span", { className: "checked opacity-0 bg-green-500 absolute z-10 left-0 w-full h-full rounded-full transition duration-100 ease-linear" }),
                    React.createElement("span", { className: "bg-gray-400 absolute left-0 w-full h-full rounded-full" }),
                    React.createElement("span", { className: "checked-peg absolute z-20 left-0 bg-white w-3 h-3 m-0.5 rounded-full transition transform duration-100 ease-linear cursor-pointer translate-x-0" })),
                React.createElement(Conditional, { expresion: !!label },
                    React.createElement("div", { className: "select-none flex flex-col pl-2" },
                        React.createElement(Label, null))),
                append),
            React.createElement(PrivacyBarrier, null),
            React.createElement(InlineErrors, null))));
});
