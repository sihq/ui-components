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
import { SearchIcon, XIcon } from '@heroicons/react/solid';
import React, { useContext } from 'react';
import { ControllerContext } from '../../../Providers/Controller';
import Text from './Text';
export default (function (props) {
    var input = React.createRef();
    var _a = useContext(ControllerContext), value = _a.value, setValue = _a.setValue;
    var placeholder = props.placeholder, name = props.name;
    var Prepend = function () { return (React.createElement("span", { className: "flex flex-shrink-0 items-center justify-center mr-2" },
        React.createElement("span", { className: "p-0 rounded-full text-xs text-gray-500 " },
            React.createElement(SearchIcon, { className: "h-3 w-3" })))); };
    var Append = function () {
        return value(name) ? (React.createElement("span", { className: "flex flex-shrink-0 items-center justify-center" },
            React.createElement("button", { type: "button", onClick: function () {
                    var _a;
                    setValue(name, '', false);
                    (_a = input.current) === null || _a === void 0 ? void 0 : _a.focus();
                }, className: "focus:outline-none z-10 bg-gray-200 p-0.5 rounded-full text-xs text-gray-400 hover:text-blue-500" },
                React.createElement(XIcon, { className: "h-3 w-3" })))) : null;
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, __assign({}, props, { ref: input, type: "text", placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : 'Find:', append: React.createElement(Append, null), prepend: React.createElement(Prepend, null) }))));
});
