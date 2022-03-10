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
import { FieldContext, ReactiveControllerContext } from '../../../Contexts';
import React, { useContext, useState } from 'react';
import _ from 'lodash';
export default function Store(_a) {
    var _b;
    var children = _a.children, onChange = _a.onChange;
    var _c = useState({}), get = _c[0], set = _c[1];
    var context = useContext(FieldContext);
    var _d = useContext(ReactiveControllerContext), update = _d.update, state = _d.state;
    var setStore = update !== null && update !== void 0 ? update : set;
    var getStore = state !== null && state !== void 0 ? state : get;
    var action = onChange !== null && onChange !== void 0 ? onChange : (function (value) {
        setStore(_.set(__assign({}, getStore), context.name, value));
    });
    var value = (_b = _.get(getStore, context.name)) !== null && _b !== void 0 ? _b : null;
    return React.createElement(FieldContext.Provider, { value: __assign(__assign({}, context), { onChange: action, value: value }) }, children);
}
