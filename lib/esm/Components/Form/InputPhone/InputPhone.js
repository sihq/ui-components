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
        React.createElement(FieldContext.Provider, { value: __assign(__assign({}, context), { name: "".concat(context.name, ".number") }) },
            React.createElement(Store, null,
                React.createElement(Text, __assign({}, props, { type: "text", prepend: React.createElement(FieldContext.Provider, { value: __assign(__assign({}, context), { name: "".concat(context.name, ".country") }) },
                        React.createElement(Store, null,
                            React.createElement(Prepend, null))) }))))));
});
