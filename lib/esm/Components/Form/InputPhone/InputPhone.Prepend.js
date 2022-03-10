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
import { COUNTRY_CODES } from './CountryCodes';
import { FieldContext } from '../../../Contexts';
import Select from '../InputSelect/InputSelect';
import Store from '../shared/Store';
export default function Prepend(props) {
    var context = useContext(FieldContext);
    var options = Object.entries(COUNTRY_CODES).map(function (country) {
        var name = country[0];
        var code = country[1].code;
        return { value: name, text: "".concat(name, " +").concat(code) };
    });
    return (React.createElement("span", { className: " flex flex-shrink-0 w-24 mr-2 h-4  overflow-hidden" },
        React.createElement(FieldContext.Provider, { value: { name: "country", type: 'select', variant: 'opaque', size: 'xs' } },
            React.createElement(Store, { onChange: function (value) { return props.onChange(value); } },
                React.createElement(Select, __assign({}, { name: 'country', type: 'select' }, { options: options })),
                React.createElement("pre", null, JSON.stringify(context.value))))));
}
