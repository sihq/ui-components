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
import { FieldContext } from '../../../Contexts';
import Prepend from './InputPhone.Prepend';
import Store from '../shared/Store';
import Text from '../Inputs/Text';
export default (function (props) {
    var context = useContext(FieldContext);
    return (React.createElement(React.Fragment, null,
        React.createElement(Store, { onChange: function (value) { return context.onChange(__assign(__assign({}, context.value), { phone: value })); } },
            React.createElement(Text, __assign({}, props, { type: "text", prepend: React.createElement(Prepend, { onChange: function (value) { return context.onChange(__assign(__assign({}, context.value), { country: value })); } }) }))),
        React.createElement("pre", null, JSON.stringify(context.value))));
});
