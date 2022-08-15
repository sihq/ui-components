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
import Address from './Inputs/Address';
import Currency from './Inputs/Currency';
import DateOfBirth from './Inputs/DateOfBirth';
import Duration from './InputDuration/InputDuration';
import Editor from './InputEditor/InputEditor';
import { FieldContext } from '../../Contexts';
import Image from './InputImage/InputImage';
import Number from './InputNumber/InputNumber';
import Password from './InputPassword/InputPassword';
import Phone from './InputPhone/InputPhone';
import Reference from './shared/Reference';
import Search from './InputSearch/InputSearch';
import Select from './InputSelect/InputSelect';
import Store from './shared/Store';
import Text from './Inputs/Text';
import Textarea from './InputTextarea/InputTextarea';
import TinyMce from './InputTinymce/InputTinymce';
import Timezone from './InputTimezone/InputTimezone';
import Toggle from './Inputs/Toggle';
import ToggleButton from './Inputs/ToggleButton';
import Transfer from './Inputs/Transfer';
import Radio from './Inputs/Radio';
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
            return React.createElement(Duration, null);
        case 'number':
            return React.createElement(Number, __assign({}, props));
        case 'editor':
            return React.createElement(Editor, __assign({}, props));
        case 'textarea':
            return React.createElement(Textarea, __assign({}, props));
        case 'tinymce':
            return React.createElement(TinyMce, __assign({}, props));
        case 'image':
            return React.createElement(Image, __assign({}, props));
        case 'transfer':
            return React.createElement(Transfer, __assign({}, props));
        case 'radio':
            return React.createElement(Radio, __assign({}, props));
        default:
            return null;
    }
};
export var Field = function (props) {
    var _a;
    var id = props.id, name = props.name, label = props.label;
    var context = useContext(FieldContext);
    return (React.createElement(FieldContext.Provider, { value: __assign(__assign({}, context), props) },
        React.createElement(Reference, null,
            React.createElement(Store, null,
                React.createElement("label", { htmlFor: "".concat((_a = id !== null && id !== void 0 ? id : name) !== null && _a !== void 0 ? _a : label), className: "flex flex-col flex-1" },
                    React.createElement(Input, __assign({}, props)))))));
};
export default Field;
