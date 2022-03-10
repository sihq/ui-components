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
import Select from '../InputSelect/InputSelect';
import Store from '../shared/Store';
import { TIMEZONES } from './Timezones';
export default (function (props) {
    return (React.createElement(Store, null,
        React.createElement(Select, __assign({}, props, { options: TIMEZONES }))));
});