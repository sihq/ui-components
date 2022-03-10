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
import React, { useState } from 'react';
import Append from './InputPassword.Append';
import Text from '../Inputs/Text';
export default (function (props) {
    var _a = useState(true), hidden = _a[0], set = _a[1];
    return React.createElement(Text, __assign({}, props, { type: hidden ? props.type : 'text', append: React.createElement(Append, __assign({}, { hidden: hidden, set: set })) }));
});
