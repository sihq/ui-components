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
var Contexts_1 = require("../../../Contexts");
var InlineErrors_1 = __importDefault(require("../shared/InlineErrors"));
var Label_1 = __importDefault(require("../shared/Label"));
var outline_1 = require("@heroicons/react/outline");
var PrivacyBarrier_1 = __importDefault(require("../shared/PrivacyBarrier"));
var laravel_vapor_1 = __importDefault(require("laravel-vapor"));
function Image(props) {
    var _a, _b, _c, _d;
    var context = (0, react_1.useContext)(Contexts_1.FieldContext);
    var id = props.id, name = props.name, label = props.label, disabled = props.disabled, placeholder = props.placeholder;
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
            context.onChange(__assign(__assign({}, response.file), { name: fileName, mime: type }));
        });
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Label_1.default, null),
        react_1.default.createElement("div", { className: "flex items-center space-x-4 rounded p-1 relative" },
            react_1.default.createElement("div", { className: "h-14 w-14 flex items-center justify-center bg-gray-300 rounded outline-2 outline-offset-2 outline-gray-300 outline" }, context.value ? (react_1.default.createElement("div", { className: "h-full w-full bg-gray-200 rounded mr-2 bg-center bg-cover", style: {
                    backgroundImage: "url(".concat(
                    // @ts-ignore
                    (_a = context.value) === null || _a === void 0 ? void 0 : _a.store).concat(
                    // @ts-ignore
                    ((_b = context.value) === null || _b === void 0 ? void 0 : _b.status) === 'staged' ? 'tmp/' : '').concat(
                    // @ts-ignore
                    (_c = context.value) === null || _c === void 0 ? void 0 : _c.id, ")"),
                } })) : (react_1.default.createElement(outline_1.PhotographIcon, { className: "m-4 text-white" }))),
            react_1.default.createElement("div", { className: "flex flex-col items-center space-y-2" },
                react_1.default.createElement("input", __assign({ type: "file", accept: "image/png, image/jpeg, image/jpg", id: "".concat((_d = id !== null && id !== void 0 ? id : name) !== null && _d !== void 0 ? _d : label) }, { name: name, disabled: disabled, placeholder: placeholder }, { onChange: upload, className: "outline-none bg-transparent flex-1 w-full ml-2 text-sm" })),
                react_1.default.createElement("div", { className: "h-2 w-full overflow-hidden flex ".concat(uploadProgress === 0 ? 'hidden' : 'flex', " ") },
                    react_1.default.createElement("div", { className: "h-2 flex items-center overflow-hidden  bg-gray-300 shadow-inner w-full rounded-full" },
                        react_1.default.createElement("div", { className: "h-full bg-green-500 rounded-full border-2 transition-all duration-1000 ease-in-out border-white", style: { width: "".concat(uploadProgress, "%") } })))),
            react_1.default.createElement(PrivacyBarrier_1.default, null)),
        react_1.default.createElement(InlineErrors_1.default, null)));
}
exports.default = Image;
