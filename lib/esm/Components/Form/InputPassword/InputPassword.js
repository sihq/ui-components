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
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import Text from '../Inputs/Text';
export default (function (props) {
    var _a = useState(true), hidden = _a[0], set = _a[1];
    var input = React.createRef();
    var Append = function () { return (React.createElement("span", { className: "flex flex-shrink-0 items-center justify-center ml-2" },
        React.createElement("button", { type: "button", onClick: function () {
                var _a;
                set(!hidden);
                (_a = input.current) === null || _a === void 0 ? void 0 : _a.focus();
            }, className: "focus:outline-none z-10 relative p-0.5 rounded-full text-xs text-gray-400 hover:text-blue-500 ".concat(hidden ? '' : 'bg-gray-200') }, hidden ? React.createElement(EyeIcon, { className: "h-3 w-3" }) : React.createElement(EyeOffIcon, { className: "h-3 w-3" })))); };
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, __assign({}, props, { type: hidden ? props.type : 'text', ref: input, append: React.createElement(Append, null) }))));
});
