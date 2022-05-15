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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var Conditional_1 = __importDefault(require("../Conditional"));
var react_1 = __importDefault(require("react"));
var lodash_1 = __importDefault(require("lodash"));
var withInteraction_1 = __importDefault(require("../../Providers/withInteraction"));
var BASE = ' space-x-2 block border font-semibold flex justify-center items-center flex-grow focus:outline-none rounded focus:ring-4 relative overflow-hidden shadow active:shadow-inner transition-all ease-in-out duration-200';
var VARIANTS = {
    opaque: ' ',
    'opaque-rounded': '',
    warning: 'text-white border-yellow-600 bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-200 active:bg-yellow-800',
    standard: ' bg-white border-white hover:bg-gray-50 active:bg-gray-200 focus:ring-gray-200 text-gray-700 ',
    primary: ' text-white border-blue-500 bg-blue-500 hover:bg-blue-600 focus:ring-blue-200 active:bg-blue-800',
    destructive: ' text-white border-red-600 bg-red-600 hover:bg-red-700 focus:ring-red-200 active:bg-red-800',
    'flat-destructive': '  border-transparent shadow-none hover:text-red-700 active:bg-red-50 focus:ring-red-200 text-gray-500',
    'flat-primary': '  border-transparent shadow-none hover:text-blue-700 active:bg-blue-50 focus:ring-blue-200 text-gray-500',
};
var SIZES = {
    xs: ' py-1 px-3 text-xs',
    sm: ' py-2 px-4 text-xs',
    md: ' py-2.5 px-8 text-xs',
    xl: ' py-3 px-8 text-sm',
};
function iconOnlyPadding(className, isIconOnly) {
    return isIconOnly ? lodash_1.default.replace(className, /px-3|px-4|px-8/gi, 'px-4') : className;
}
exports.Button = (0, withInteraction_1.default)(function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'button' : _b, children = _a.children, _c = _a.variant, variant = _c === void 0 ? 'standard' : _c, _d = _a.size, size = _d === void 0 ? 'md' : _d, action = _a.action, disabled = _a.disabled, icon = _a.icon;
    var className = [
        BASE,
        Object.values(lodash_1.default.pick(VARIANTS, [variant])).join(' '),
        Object.values(lodash_1.default.pick(SIZES, [size])).join(' '),
    ].join(' ');
    className = iconOnlyPadding(className, icon !== undefined && children === undefined);
    return (react_1.default.createElement("button", __assign({}, { type: type, className: className, disabled: disabled }, { onClick: action }),
        react_1.default.createElement(Conditional_1.default, { expresion: !!icon },
            react_1.default.createElement("span", { className: "flex flex-shrink-0 items-center justify-center" },
                react_1.default.createElement("span", { className: "h-4 w-4" }, icon))),
        react_1.default.createElement(Conditional_1.default, { expresion: !!children },
            react_1.default.createElement("span", null, children))));
});
exports.default = exports.Button;
