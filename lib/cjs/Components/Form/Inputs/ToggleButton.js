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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var solid_1 = require("@heroicons/react/solid");
var Conditional_1 = __importDefault(require("../../Conditional"));
var reactive_1 = require("@sihq/reactive");
var InlineErrors_1 = __importDefault(require("../shared/InlineErrors"));
var PrivacyBarrier_1 = __importDefault(require("../shared/PrivacyBarrier"));
var VARIANTS = {
    base: ' p-4 relative flex text-gray-700 flex-col items-center text-sm justify-center rounded border-2 ',
};
exports.default = (function (props) {
    var _a;
    var _b = (0, react_1.useContext)(reactive_1.ControllerContext), value = _b.value, setValue = _b.setValue;
    var id = props.id, name = props.name, label = props.label, disabled = props.disabled, _c = props.variant, variant = _c === void 0 ? 'basic' : _c, icon = props.icon, description = props.description;
    var className = Object.entries(VARIANTS)
        .filter(function (i) { return ['base', variant].includes(i[0]); })
        .reduce(function (a, b) { return __spreadArray(__spreadArray([], a, true), [b[1]], false); }, [])
        .join('');
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("button", __assign({ className: "".concat(className, " ").concat(value(name)
                ? 'border-blue-400 shadow-inner bg-blue-50'
                : 'border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100'), id: "".concat((_a = id !== null && id !== void 0 ? id : name) !== null && _a !== void 0 ? _a : label) }, { name: name, disabled: disabled }, { onClick: function () { return setValue(name, !value(name)); } }),
            react_1.default.createElement(Conditional_1.default, { expresion: !!value(name) },
                react_1.default.createElement("span", { className: "absolute top-2 right-2 w-4 h-4 flex text-white p-0.5 rounded-full bg-blue-500" },
                    react_1.default.createElement(solid_1.CheckIcon, null))),
            react_1.default.createElement(Conditional_1.default, { expresion: !!icon },
                react_1.default.createElement("span", { className: "w-4 h-4  mb-2" }, icon)),
            label,
            react_1.default.createElement(Conditional_1.default, { expresion: !!description },
                react_1.default.createElement("span", { className: "text-xs opacity-50" }, description)),
            react_1.default.createElement(PrivacyBarrier_1.default, null)),
        react_1.default.createElement(InlineErrors_1.default, null)));
});
