"use strict";
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
var lodash_1 = __importDefault(require("lodash"));
var BASE = ' flex items-center justify-center relative border-2 outline-none focus-within:ring-2 focus-within:shadow-inner focus-within:ring-opacity-20 transition-all ease-in-out duration-200 flex-1';
var VARIANTS = {
    primary: '',
    destructive: '',
    warning: '',
    'flat-destructive': '',
    'flat-primary': '',
    standard: ' bg-white border-gray-300 focus-within:border-blue-400 focus-within:ring-blue-400 rounded text-gray-700',
    opaque: ' focus-within:bg-white bg-gray-200 border-gray-200 focus-within:border-blue-400 focus-within:ring-blue-400 rounded text-gray-700',
    'opaque-rounded': ' focus-within:bg-white bg-gray-200 border-gray-200 focus-within:border-blue-400 focus-within:ring-blue-400 rounded-full text-gray-700',
};
var SIZES = {
    xs: 'px-1 p-0.5 text-lg md:text-xs ',
    sm: 'px-3 p-2 text-lg md:text-xs ',
    md: 'px-3 p-2 text-lg md:text-sm',
    lg: 'px-4 p-3 text-lg md:text-sm',
    xl: 'px-4 p-3 text-lg md:text-md',
};
function Wrapper(_a) {
    var children = _a.children;
    var context = (0, react_1.useContext)(Contexts_1.FieldContext);
    var className = [
        BASE,
        Object.values(lodash_1.default.pick(VARIANTS, [context.variant])).join(' '),
        Object.values(lodash_1.default.pick(SIZES, [context.size])).join(' '),
    ].join(' ');
    return react_1.default.createElement("span", { className: className }, children);
}
exports.default = Wrapper;
