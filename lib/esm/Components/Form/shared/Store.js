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
var Contexts_1 = require("../../../Contexts");
var react_1 = __importStar(require("react"));
var lodash_1 = __importDefault(require("lodash"));
function Store(_a) {
    var _b;
    var children = _a.children, onChange = _a.onChange;
    var _c = (0, react_1.useState)({}), get = _c[0], set = _c[1];
    var context = (0, react_1.useContext)(Contexts_1.FieldContext);
    var _d = (0, react_1.useContext)(Contexts_1.ReactiveControllerContext), update = _d.update, state = _d.state;
    var setStore = update !== null && update !== void 0 ? update : set;
    var getStore = state !== null && state !== void 0 ? state : get;
    var action = onChange !== null && onChange !== void 0 ? onChange : (function (value) {
        setStore(lodash_1.default.set(__assign({}, getStore), context.name, value));
    });
    var value = (_b = lodash_1.default.get(getStore, context.name)) !== null && _b !== void 0 ? _b : null;
    return react_1.default.createElement(Contexts_1.FieldContext.Provider, { value: __assign(__assign({}, context), { onChange: action, value: value }) }, children);
}
exports.default = Store;
