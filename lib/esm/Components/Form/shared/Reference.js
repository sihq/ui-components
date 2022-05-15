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
export default function Reference(_a) {
    var children = _a.children;
    var context = useContext(FieldContext);
    var reference = React.createRef();
    return React.createElement(FieldContext.Provider, { value: __assign(__assign({}, context), { ref: reference }) }, children);
}
