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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useContext } from 'react';
import { ControllerContext } from '../../../Providers/Controller';
import InlineErrors from '../InlineErrors';
import Label from '../Label';
import PrivacyBarrier from '../PrivacyBarrier';
var VARIANTS = {
    base: ' flex items-center justify-center relative border-2 outline-none focus-within:ring-2 focus-within:shadow-inner focus-within:ring-opacity-20 transition-all ease-in-out duration-200 flex-1',
    basic: ' bg-white border-gray-300 focus-within:border-blue-400 focus-within:ring-blue-400 rounded',
    opaque: ' focus-within:bg-white bg-gray-200 border-gray-200 focus-within:border-blue-400 focus-within:ring-blue-400 rounded',
    'opaque-rounded': ' focus-within:bg-white bg-gray-200 border-gray-200 focus-within:border-blue-400 focus-within:ring-blue-400 rounded-full',
};
export default React.forwardRef(function (props, ref) {
    var _a;
    var _b = useContext(ControllerContext).bind, bind = _b === void 0 ? function () { return ({}); } : _b;
    var id = props.id, type = props.type, name = props.name, label = props.label, _c = props.defer, defer = _c === void 0 ? true : _c, append = props.append, prepend = props.prepend, disabled = props.disabled, _d = props.variant, variant = _d === void 0 ? 'basic' : _d, placeholder = props.placeholder, _e = props.size, size = _e === void 0 ? 'sm' : _e, onChange = props.onChange, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, onFocus = props.onFocus;
    var className = Object.entries(VARIANTS)
        .filter(function (i) { return ['base', variant].includes(i[0]); })
        .reduce(function (a, b) { return __spreadArray(__spreadArray([], a, true), [b[1]], false); }, [])
        .join('');
    return (React.createElement(React.Fragment, null,
        React.createElement(Label, null, label),
        React.createElement("span", { className: "".concat(className, " ").concat(size === 'sm' ? 'px-3 p-2' : '').concat(size === 'xs' ? 'px-1 p-0.5' : '') },
            prepend,
            React.createElement("textarea", __assign({ ref: ref, id: "".concat((_a = id !== null && id !== void 0 ? id : name) !== null && _a !== void 0 ? _a : label) }, { type: type, name: name, disabled: disabled, placeholder: placeholder, onChange: onChange, onKeyDown: onKeyDown, onKeyUp: onKeyUp, onFocus: onFocus }, (onChange ? {} : bind({ defer: defer, name: name })), { className: "outline-none bg-transparent  text-gray-700 flex-1 w-full ".concat(size === 'sm' ? 'text-lg md:text-xs' : '').concat(size === 'xs' ? 'text-lg md:text-xs' : ''), style: { minHeight: 100 } })),
            append,
            React.createElement(PrivacyBarrier, null)),
        React.createElement(InlineErrors, __assign({}, props))));
});
