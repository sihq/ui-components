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
import React, { useContext, useState } from 'react';
import Append from '../shared/Append';
import { ControllerContext } from '@sihq/reactive';
import InlineErrors from '../InlineErrors';
import Label from '../Label';
import Prepend from '../shared/Prepend';
import PrivacyBarrier from '../PrivacyBarrier';
import Vapor from 'laravel-vapor';
import Wrapper from '../shared/Wrapper';
export default React.forwardRef(function (props, ref) {
    var _a, _b, _c;
    var _d = useContext(ControllerContext), setValue = _d.setValue, value = _d.value;
    var id = props.id, name = props.name, label = props.label, disabled = props.disabled, placeholder = props.placeholder;
    var onChange = props.onChange, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, onFocus = props.onFocus;
    var _e = useState(0), uploadProgress = _e[0], setUploadProcess = _e[1];
    function upload(e) {
        // @ts-ignore
        var fileName = e.target.files[0].name;
        // @ts-ignore
        var type = e.target.files[0].type;
        // @ts-ignore
        Vapor.store(e.target.files[0], {
            // @ts-ignore
            signedStorageUrl: '/reactive/signed-transfer',
            visibility: 'public-read',
            // @ts-ignore
            progress: function (progress) {
                setUploadProcess(Math.round(progress * 100));
            },
        }).then(function (response) {
            setValue(name, __assign(__assign({}, response.file), { name: fileName, mime: type }));
        });
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(Label, __assign({}, props)),
        React.createElement(Wrapper, __assign({}, props),
            React.createElement(Prepend, __assign({}, props)),
            React.createElement("div", { className: "flex flex-col relative" },
                React.createElement("div", { className: "flex items-center" },
                    React.createElement("div", null, value(name) ? (React.createElement("div", { className: "aspect-video h-10 bg-gray-200 rounded mr-2 bg-center bg-cover", style: {
                            backgroundImage: "url(https://".concat(
                            // @ts-ignore
                            (_a = value(name)) === null || _a === void 0 ? void 0 : _a.bucket, ".s3.ap-southeast-2.amazonaws.com/").concat(
                            // @ts-ignore
                            (_b = value(name)) === null || _b === void 0 ? void 0 : _b.key, ")"),
                        } })) : null),
                    React.createElement("input", __assign({ type: "file", accept: "image/png, image/jpeg, image/jpg", ref: ref, id: "".concat((_c = id !== null && id !== void 0 ? id : name) !== null && _c !== void 0 ? _c : label) }, { name: name, disabled: disabled, placeholder: placeholder, onChange: onChange, onKeyDown: onKeyDown, onKeyUp: onKeyUp, onFocus: onFocus }, (onChange ? {} : { onChange: upload }), { className: "outline-none bg-transparent flex-1 w-full ml-2" }))),
                React.createElement("div", { className: "h-1 absolute -bottom-2 left-0 right-0  w-full overflow-hidden ".concat(uploadProgress === 0 || uploadProgress === 100 ? 'hidden' : 'flex') },
                    React.createElement("div", { className: "h-2  bg-gray-400 shadow-inner w-full rounded-full" },
                        React.createElement("div", { className: "h-2 bg-green-500 rounded-full", style: { width: "".concat(uploadProgress, "%") } })))),
            React.createElement(Append, __assign({}, props)),
            React.createElement(PrivacyBarrier, __assign({}, props))),
        React.createElement(InlineErrors, __assign({}, props))));
});
