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
import React from 'react';
import Text from './Text';
import CurrencyFormat from 'react-currency-format';
import { ClockIcon } from '@heroicons/react/outline';
export default (function (props) {
    var Prepend = function () { return (React.createElement("span", { className: "flex flex-shrink-0 items-center justify-center mr-2 text-gray-500 text-xs" },
        React.createElement(ClockIcon, { className: "h-3 w-3" }))); };
    return (React.createElement(React.Fragment, null,
        React.createElement(CurrencyFormat, { customInput: function (p) { return React.createElement(Text, __assign({}, props, p, { prepend: React.createElement(Prepend, null) })); }, format: "#.##", decimalScale: 2, fixedDecimalScale: true })));
});
