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
var InputPhone_Prepend_1 = __importDefault(require("./InputPhone.Prepend"));
var Store_1 = __importDefault(require("../shared/Store"));
var Text_1 = __importDefault(require("../Inputs/Text"));
exports.default = (function (props) {
    var context = (0, react_1.useContext)(Contexts_1.FieldContext);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Contexts_1.FieldContext.Provider, { value: __assign(__assign({}, context), { name: "".concat(context.name, ".number") }) },
            react_1.default.createElement(Store_1.default, null,
                react_1.default.createElement(Text_1.default, __assign({}, props, { type: "text", prepend: react_1.default.createElement(Contexts_1.FieldContext.Provider, { value: __assign(__assign({}, context), { name: "".concat(context.name, ".country") }) },
                        react_1.default.createElement(Store_1.default, null,
                            react_1.default.createElement(InputPhone_Prepend_1.default, null))) }))))));
});
