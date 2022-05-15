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
import { ExclamationIcon, PhotographIcon } from '@heroicons/react/outline';
import React, { useContext, useState } from 'react';
import { FieldContext } from '../../../Contexts';
import InlineErrors from '../shared/InlineErrors';
import Label from '../shared/Label';
import PrivacyBarrier from '../shared/PrivacyBarrier';
import Vapor from 'laravel-vapor';
export default function Image(props) {
    var _a, _b;
    var _c = useState(), uploadError = _c[0], setUploadError = _c[1];
    var context = useContext(FieldContext);
    var id = props.id, name = props.name, label = props.label, disabled = props.disabled, placeholder = props.placeholder;
    var _d = useState(0), uploadProgress = _d[0], setUploadProcess = _d[1];
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
        })
            .then(function (response) {
            var _a, _b;
            context.onChange(__assign(__assign({}, response.file), { name: fileName, mime: type, url: "".concat((_a = response.file) === null || _a === void 0 ? void 0 : _a.store, "/").concat((_b = response.file) === null || _b === void 0 ? void 0 : _b.id) }));
        })
            .catch(function (_a) {
            var message = _a.message;
            return setUploadError(message);
        });
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(Label, null),
        React.createElement("div", { className: "flex items-center space-x-4 rounded p-1 relative" },
            React.createElement("div", { className: "h-14 w-14 flex items-center justify-center bg-gray-300 rounded outline-2 outline-offset-2 outline-gray-300 outline" }, context.value ? (React.createElement("div", { className: "h-full w-full bg-gray-200 rounded bg-center bg-cover", style: {
                    backgroundImage: "url(".concat(
                    // @ts-ignore
                    (_a = context.value) === null || _a === void 0 ? void 0 : _a.url, ")"),
                } })) : (React.createElement(PhotographIcon, { className: "m-4 text-white" }))),
            React.createElement("div", { className: "flex flex-col items-center space-y-2" },
                React.createElement("input", __assign({ type: "file", accept: "image/png, image/jpeg, image/jpg", id: "".concat((_b = id !== null && id !== void 0 ? id : name) !== null && _b !== void 0 ? _b : label) }, { name: name, disabled: disabled, placeholder: placeholder }, { onChange: upload, className: "outline-none bg-transparent flex-1 w-full ml-2 text-sm" })),
                React.createElement("div", { className: "h-2 w-full overflow-hidden flex ".concat(uploadProgress === 0 ? 'hidden' : 'flex', " ") },
                    React.createElement("div", { className: "h-2 flex items-center overflow-hidden  bg-gray-300 shadow-inner w-full rounded-full" },
                        React.createElement("div", { className: "h-full bg-green-500 rounded-full border-2 transition-all duration-1000 ease-in-out border-white", style: { width: "".concat(uploadProgress, "%") } }))),
                uploadError ? (React.createElement("span", { className: "select-none text-red-400 w-full text-xs flex items-start leading-5 mt-2 font-semibold animate-animated animate-faster animate-fadeInDown" },
                    React.createElement(ExclamationIcon, { className: "h-5 w-5 mr-1 flex-shrink-0" }), uploadError !== null && uploadError !== void 0 ? uploadError : '')) : null),
            React.createElement(PrivacyBarrier, null)),
        React.createElement(InlineErrors, null)));
}
