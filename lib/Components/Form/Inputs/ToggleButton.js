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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useContext } from 'react';
import { CheckIcon } from '@heroicons/react/solid';
import Conditional from '../../Conditional';
import { ControllerContext } from '@sihq/reactive';
import InlineErrors from '../shared/InlineErrors';
import PrivacyBarrier from '../shared/PrivacyBarrier';
var VARIANTS = {
    base: ' p-4 relative flex text-gray-700 flex-col items-center text-sm justify-center rounded border-2 ',
};
export default (function (props) {
    var _a;
    var _b = useContext(ControllerContext), value = _b.value, setValue = _b.setValue;
    var id = props.id, name = props.name, label = props.label, disabled = props.disabled, _c = props.variant, variant = _c === void 0 ? 'basic' : _c, icon = props.icon, description = props.description;
    var className = Object.entries(VARIANTS)
        .filter(function (i) { return ['base', variant].includes(i[0]); })
        .reduce(function (a, b) { return __spreadArray(__spreadArray([], a, true), [b[1]], false); }, [])
        .join('');
    return (React.createElement(React.Fragment, null,
        React.createElement("button", __assign({ className: "".concat(className, " ").concat(value(name)
                ? 'border-blue-400 shadow-inner bg-blue-50'
                : 'border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100'), id: "".concat((_a = id !== null && id !== void 0 ? id : name) !== null && _a !== void 0 ? _a : label) }, { name: name, disabled: disabled }, { onClick: function () { return setValue(name, !value(name)); } }),
            React.createElement(Conditional, { expresion: !!value(name) },
                React.createElement("span", { className: "absolute top-2 right-2 w-4 h-4 flex text-white p-0.5 rounded-full bg-blue-500" },
                    React.createElement(CheckIcon, null))),
            React.createElement(Conditional, { expresion: !!icon },
                React.createElement("span", { className: "w-4 h-4  mb-2" }, icon)),
            label,
            React.createElement(Conditional, { expresion: !!description },
                React.createElement("span", { className: "text-xs opacity-50" }, description)),
            React.createElement(PrivacyBarrier, null)),
        React.createElement(InlineErrors, null)));
});
