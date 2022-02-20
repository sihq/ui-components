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
import Address from './Inputs/Address';
import Currency from './Inputs/Currency';
import DateOfBirth from './Inputs/DateOfBirth';
import Duration from './Inputs/Duration';
import Editor from './Inputs/Editor';
import Image from './Inputs/Image';
import Password from './Inputs/Password';
import Phone from './Inputs/Phone';
import React from 'react';
import Search from './Inputs/Search';
import Select from './Inputs/Select';
import Text from './Inputs/Text';
import Textarea from './Inputs/Textarea';
import Timezone from './Inputs/Timezone';
import Toggle from './Inputs/Toggle';
import ToggleButton from './Inputs/ToggleButton';
import Transfer from './Inputs/Transfer';
var Input = function (props) {
    var type = props.type;
    switch (type) {
        case 'text':
            return React.createElement(Text, __assign({}, props));
        case 'password':
            return React.createElement(Password, __assign({}, props));
        case 'phone':
            return React.createElement(Phone, __assign({}, props));
        case 'address':
            return React.createElement(Address, __assign({}, props));
        case 'search':
            return React.createElement(Search, __assign({}, props));
        case 'select':
            return React.createElement(Select, __assign({}, props));
        case 'toggle':
            return React.createElement(Toggle, __assign({}, props));
        case 'toggle-button':
            return React.createElement(ToggleButton, __assign({}, props));
        case 'timezone':
            return React.createElement(Timezone, __assign({}, props));
        case 'date-of-birth':
            return React.createElement(DateOfBirth, __assign({}, props));
        case 'currency':
            return React.createElement(Currency, __assign({}, props));
        case 'duration':
            return React.createElement(Duration, __assign({}, props));
        case 'editor':
            return React.createElement(Editor, __assign({}, props));
        case 'textarea':
            return React.createElement(Textarea, __assign({}, props));
        case 'image':
            return React.createElement(Image, __assign({}, props));
        case 'transfer':
            return React.createElement(Transfer, __assign({}, props));
        default:
            return null;
    }
};
export var Field = function (props) {
    var _a;
    var id = props.id, name = props.name, label = props.label;
    return (React.createElement("label", { htmlFor: "".concat((_a = id !== null && id !== void 0 ? id : name) !== null && _a !== void 0 ? _a : label), className: "flex flex-col flex-1" },
        React.createElement(Input, __assign({}, props))));
};
export default Field;
