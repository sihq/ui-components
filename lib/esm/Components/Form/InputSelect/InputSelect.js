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
import Append from '../shared/Append';
import { FieldContext } from '../../../Contexts';
import InlineErrors from '../shared/InlineErrors';
import Label from '../shared/Label';
import Prepend from '../shared/Prepend';
import PrivacyBarrier from '../shared/PrivacyBarrier';
import { SelectorIcon } from '@heroicons/react/solid';
import Wrapper from '../shared/Wrapper';
export default (function (props) {
    var _a, _b;
    var id = props.id, type = props.type, name = props.name, label = props.label, disabled = props.disabled, placeholder = props.placeholder, options = props.options;
    var onChange = props.onChange, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, onFocus = props.onFocus;
    var context = useContext(FieldContext);
    return (React.createElement(React.Fragment, null,
        React.createElement(Label, null),
        React.createElement(Wrapper, null,
            React.createElement(Prepend, __assign({}, props)),
            React.createElement("select", __assign({ ref: context.ref, id: "".concat((_a = id !== null && id !== void 0 ? id : name) !== null && _a !== void 0 ? _a : label) }, { type: type, name: name, disabled: disabled, placeholder: placeholder, onChange: onChange, onKeyDown: onKeyDown, onKeyUp: onKeyUp, onFocus: onFocus }, { value: (_b = context.value) !== null && _b !== void 0 ? _b : '', onChange: function (_a) {
                    var value = _a.target.value;
                    return context.onChange(value);
                }, className: "outline-none bg-transparent appearance-none flex-1 w-full" }), (options !== null && options !== void 0 ? options : []).map(function (_a) {
                var text = _a.text, value = _a.value;
                return (React.createElement("option", { key: "".concat(value), value: value }, text));
            })),
            React.createElement("span", { className: "h-4 w-4 flex relative -mr-1 text-gray-600" },
                React.createElement(SelectorIcon, null)),
            React.createElement(Append, __assign({}, props)),
            React.createElement(PrivacyBarrier, null)),
        React.createElement(InlineErrors, null)));
});
