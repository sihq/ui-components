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
import Append from '../shared/Append';
import { Editor } from '@tinymce/tinymce-react';
import { FieldContext } from '../../../Contexts';
import InlineErrors from '../shared/InlineErrors';
import Label from '../shared/Label';
import Prepend from '../shared/Prepend';
import PrivacyBarrier from '../shared/PrivacyBarrier';
export default (function (props) {
    var _a;
    var id = props.id, type = props.type, name = props.name, label = props.label, disabled = props.disabled, placeholder = props.placeholder, _b = props.size, size = _b === void 0 ? 'sm' : _b;
    var context = useContext(FieldContext);
    return (React.createElement(React.Fragment, null,
        React.createElement(Label, null),
        React.createElement(Prepend, null),
        React.createElement(Editor, __assign({ apiKey: "8aiaq16fygumut8qxrh0s3f7uf5ffuwsrsxcmao4njkwhqrt", id: "".concat((_a = id !== null && id !== void 0 ? id : name) !== null && _a !== void 0 ? _a : label), ref: context.ref, init: {
                height: "".concat(size === 'sm' ? 200 : '').concat(size === 'xs' ? 300 : ''),
                menubar: false,
                statusbar: false,
                plugins: 'lists link code',
                toolbar: 'bold italic | bullist numlist | link | alignleft aligncenter alignright | code',
            }, value: context.value, onChange: function (_a) {
                var value = _a.target.value;
                return context.onChange(value);
            } }, { type: type, name: name, disabled: disabled, placeholder: placeholder })),
        React.createElement(Append, null),
        React.createElement(PrivacyBarrier, null),
        React.createElement(InlineErrors, null)));
});
