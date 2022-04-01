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
import CurrencyFormat from 'react-currency-format';
import { FieldContext } from '../../../Contexts';
import Prepend from './InputDuration.Prepend';
import Store from '../shared/Store';
import Text from '../Inputs/Text';
export default function Custom() {
    var context = useContext(FieldContext);
    return (React.createElement(CurrencyFormat, { customInput: function (p) { return (React.createElement(Store, { onChange: function (value) {
                console.log(value);
                p.onChange({ target: { value: value, focus: function () { return context.ref.current.focus(); } }, persist: function () { } });
            } },
            React.createElement(Text, __assign({}, p, { prepend: React.createElement(Prepend, null) })),
            context.value)); }, format: "#.##", decimalScale: 2, fixedDecimalScale: true, onChange: function (value) {
            context.onChange(value.target.value);
        } }));
}
