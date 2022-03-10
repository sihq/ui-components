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
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import Append from '../shared/Append';
import InlineErrors from '../shared/InlineErrors';
import Label from '../shared/Label';
import Prepend from '../shared/Prepend';
import PrivacyBarrier from '../shared/PrivacyBarrier';
import React from 'react';
import Wrapper from '../shared/Wrapper';
var Transfer = function (props) {
    return (React.createElement(React.Fragment, null,
        React.createElement(Label, null),
        React.createElement(Wrapper, __assign({}, props),
            React.createElement(Prepend, __assign({}, props)),
            React.createElement("div", { className: "flex w-full h-32" },
                React.createElement("div", { className: "flex h-full flex-col flex-1 scrollbar space-y-2 pr-3 relative" },
                    React.createElement("button", { type: "button", className: "flex items-center outline-none text-left focus:bg-gray-700 focus:text-white p-2 bg-gray-50 relative rounded hover:bg-gray-100 hover:text-gray-700 select-none cursor-pointer" }, "Lala"),
                    React.createElement("button", { type: "button", className: "flex items-center outline-none text-left focus:bg-gray-700 focus:text-white p-2 bg-gray-50 relative rounded hover:bg-gray-100 hover:text-gray-700 select-none cursor-pointer" }, "Lala")),
                React.createElement("div", { style: { minHeight: '100px' }, className: "flex flex-col space-y-2 justify-center h-full w-px bg-gray-300" },
                    React.createElement("button", { type: "button", className: "h-5 w-5 outline-none focus:ring-2 focus:ring-gray-700 bg-white hover:bg-gray-100 hover:text-blue-500 text-gray-400 transform -translate-x-1/2 flex items-center justify-center p-0.5 rounded-full" },
                        React.createElement(ChevronRightIcon, null)),
                    React.createElement("button", { type: "button", className: "h-5 w-5 outline-none focus:ring-2 focus:ring-gray-700 bg-white hover:bg-gray-100 hover:text-blue-500 text-gray-400 transform -translate-x-1/2 flex items-center justify-center p-0.5 rounded-full" },
                        React.createElement(ChevronLeftIcon, null))),
                React.createElement("div", { className: "flex h-full flex-col flex-1 space-y-2 scrollbars overflow-auto pl-3" },
                    React.createElement("button", { type: "button", className: "flex items-center outline-none text-left focus:bg-gray-700 focus:text-white p-2 bg-gray-50 relative rounded hover:bg-gray-100 hover:text-gray-700 select-none cursor-pointer" }, "Lala"),
                    React.createElement("button", { type: "button", className: "flex items-center outline-none text-left focus:bg-gray-700 focus:text-white p-2 bg-gray-50 relative rounded hover:bg-gray-100 hover:text-gray-700 select-none cursor-pointer" }, "Lala"),
                    React.createElement("button", { type: "button", className: "flex items-center outline-none text-left focus:bg-gray-700 focus:text-white p-2 bg-gray-50 relative rounded hover:bg-gray-100 hover:text-gray-700 select-none cursor-pointer" }, "Lala"))),
            React.createElement(Append, __assign({}, props)),
            React.createElement(PrivacyBarrier, null)),
        React.createElement(InlineErrors, null)));
};
export default Transfer;
