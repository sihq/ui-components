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
import { ControllerContext } from '../../../Providers/Controller';
import InlineErrors from '../InlineErrors';
import Label from '../Label';
import Prepend from '../shared/Prepend';
import PrivacyBarrier from '../PrivacyBarrier';
import Wrapper from '../shared/Wrapper';
export default React.forwardRef(function (props, ref) {
    var _a;
    var _b = useContext(ControllerContext).bind, bind = _b === void 0 ? function () { return ({}); } : _b;
    var id = props.id, type = props.type, name = props.name, label = props.label, _c = props.defer, defer = _c === void 0 ? true : _c, disabled = props.disabled, placeholder = props.placeholder;
    var onChange = props.onChange, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, onFocus = props.onFocus;
    return (React.createElement(React.Fragment, null,
        React.createElement(Label, __assign({}, props)),
        React.createElement(Wrapper, __assign({}, props),
            React.createElement(Prepend, __assign({}, props)),
            React.createElement("input", __assign({ ref: ref, id: "".concat((_a = id !== null && id !== void 0 ? id : name) !== null && _a !== void 0 ? _a : label) }, { type: type, name: name, disabled: disabled, placeholder: placeholder, onChange: onChange, onKeyDown: onKeyDown, onKeyUp: onKeyUp, onFocus: onFocus }, (onChange ? {} : bind({ defer: defer, name: name })), { className: "outline-none bg-transparent flex-1 w-full" })),
            React.createElement(Append, __assign({}, props)),
            React.createElement(PrivacyBarrier, __assign({}, props))),
        React.createElement(InlineErrors, __assign({}, props))));
});
