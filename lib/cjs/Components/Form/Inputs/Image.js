"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Append_1 = __importDefault(require("../shared/Append"));
var reactive_1 = require("@sihq/reactive");
var InlineErrors_1 = __importDefault(require("../InlineErrors"));
var Label_1 = __importDefault(require("../Label"));
var Prepend_1 = __importDefault(require("../shared/Prepend"));
var PrivacyBarrier_1 = __importDefault(require("../PrivacyBarrier"));
var laravel_vapor_1 = __importDefault(require("laravel-vapor"));
var Wrapper_1 = __importDefault(require("../shared/Wrapper"));
exports.default = react_1.default.forwardRef(function (props, ref) {
    var _a, _b, _c;
    var _d = (0, react_1.useContext)(reactive_1.ControllerContext), setValue = _d.setValue, value = _d.value;
    var id = props.id, name = props.name, label = props.label, disabled = props.disabled, placeholder = props.placeholder;
    var onChange = props.onChange, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, onFocus = props.onFocus;
    var _e = (0, react_1.useState)(0), uploadProgress = _e[0], setUploadProcess = _e[1];
    function upload(e) {
        // @ts-ignore
        var fileName = e.target.files[0].name;
        // @ts-ignore
        var type = e.target.files[0].type;
        // @ts-ignore
        laravel_vapor_1.default.store(e.target.files[0], {
            // @ts-ignore
            signedStorageUrl: '/reactive/signed-transfer',
            visibility: 'public-read',
            // @ts-ignore
            progress: function (progress) {
                setUploadProcess(Math.round(progress * 100));
            },
        }).then(function (response) {
            setValue(name, {
                uuid: response.uuid,
                key: response.key,
                bucket: response.bucket,
                name: fileName,
                content_type: type,
            });
        });
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Label_1.default, __assign({}, props)),
        react_1.default.createElement(Wrapper_1.default, __assign({}, props),
            react_1.default.createElement(Prepend_1.default, __assign({}, props)),
            react_1.default.createElement("div", { className: "flex flex-col relative" },
                react_1.default.createElement("div", { className: "flex" },
                    react_1.default.createElement("div", null, value(name) ? (react_1.default.createElement("div", { className: "h-5 w-5 bg-gray-700 rounded mr-2 bg-center bg-cover", style: {
                            backgroundImage: "url(https://".concat(
                            // @ts-ignore
                            (_a = value(name)) === null || _a === void 0 ? void 0 : _a.bucket, ".s3.ap-southeast-2.amazonaws.com/").concat(
                            // @ts-ignore
                            (_b = value(name)) === null || _b === void 0 ? void 0 : _b.key, ")"),
                        } })) : null),
                    react_1.default.createElement("input", __assign({ type: "file", accept: "image/png, image/jpeg, image/jpg", ref: ref, id: "".concat((_c = id !== null && id !== void 0 ? id : name) !== null && _c !== void 0 ? _c : label) }, { name: name, disabled: disabled, placeholder: placeholder, onChange: onChange, onKeyDown: onKeyDown, onKeyUp: onKeyUp, onFocus: onFocus }, (onChange ? {} : { onChange: upload }), { className: "outline-none bg-transparent flex-1 w-full" }))),
                react_1.default.createElement("div", { className: "h-1 absolute -bottom-2 left-0 right-0  w-full overflow-hidden ".concat(uploadProgress === 0 || uploadProgress === 100 ? 'hidden' : 'flex') },
                    react_1.default.createElement("div", { className: "h-2  bg-gray-400 shadow-inner w-full rounded-full" },
                        react_1.default.createElement("div", { className: "h-2 bg-green-500 rounded-full", style: { width: "".concat(uploadProgress, "%") } })))),
            react_1.default.createElement(Append_1.default, __assign({}, props)),
            react_1.default.createElement(PrivacyBarrier_1.default, __assign({}, props))),
        react_1.default.createElement(InlineErrors_1.default, __assign({}, props))));
});
