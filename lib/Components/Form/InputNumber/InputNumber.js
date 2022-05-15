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
import Append from './InputNumber.Append';
import React from 'react';
import Text from '../Inputs/Text';
export default (function (props) {
    return React.createElement(Text, __assign({}, props, { append: React.createElement(Append, null) }));
});
