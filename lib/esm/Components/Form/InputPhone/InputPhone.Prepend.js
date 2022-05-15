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
var CountryCodes_1 = require("./CountryCodes");
var Contexts_1 = require("../../../Contexts");
var InputSelect_1 = __importDefault(require("../InputSelect/InputSelect"));
function Prepend() {
    var context = (0, react_1.useContext)(Contexts_1.FieldContext);
    var options = Object.entries(CountryCodes_1.COUNTRY_CODES).map(function (country) {
        var name = country[0];
        var code = country[1].code;
        return { value: name, text: "".concat(name, " +").concat(code) };
    });
    return (react_1.default.createElement("span", { className: " flex flex-shrink-0 w-24 mr-2 h-4  overflow-hidden" },
        react_1.default.createElement(Contexts_1.FieldContext.Provider, { value: __assign(__assign({}, context), { label: null, type: 'select', variant: 'opaque', size: 'xs' }) },
            react_1.default.createElement(InputSelect_1.default, __assign({}, { name: 'country', type: 'select' }, { options: options })))));
}
exports.default = Prepend;
