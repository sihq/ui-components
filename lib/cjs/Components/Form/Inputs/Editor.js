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
var AddBlock_1 = __importDefault(require("../../Editor/AddBlock"));
var BlockProperties_1 = __importDefault(require("../../Editor/BlockProperties"));
var Context_1 = __importDefault(require("../../Editor/Context"));
var reactive_1 = require("@sihq/reactive");
var EditorBlock_1 = __importDefault(require("../../Editor/EditorBlock"));
var InlineErrors_1 = __importDefault(require("../shared/InlineErrors"));
var Label_1 = __importDefault(require("../shared/Label"));
var PrivacyBarrier_1 = __importDefault(require("../shared/PrivacyBarrier"));
var VARIANTS = {
    base: ' flex flex-1 relative border-2 outline-none focus-within:ring-2 focus-within:shadow-inner focus-within:ring-opacity-20 transition-all ease-in-out duration-200 flex-1',
    basic: ' bg-white border-gray-300 focus-within:border-blue-400 focus-within:ring-blue-400 rounded',
    opaque: ' focus-within:bg-white bg-gray-200 border-gray-200 focus-within:border-blue-400 focus-within:ring-blue-400 rounded',
    'opaque-rounded': ' focus-within:bg-white bg-gray-200 border-gray-200 focus-within:border-blue-400 focus-within:ring-blue-400 rounded-full',
};
exports.default = react_1.default.forwardRef(function (props) {
    var _a = (0, react_1.useContext)(reactive_1.ControllerContext), value = _a.value, setValue = _a.setValue;
    var _b = (0, react_1.useState)(null), selected = _b[0], setSelected = _b[1];
    var name = props.name, _c = props.variant, variant = _c === void 0 ? 'basic' : _c;
    var className = Object.entries(VARIANTS)
        .filter(function (i) { return ['base', variant].includes(i[0]); })
        .reduce(function (a, b) { return __spreadArray(__spreadArray([], a, true), [b[1]], false); }, [])
        .join('');
    var blocks = value(name) ? value(name) : [];
    function move(from, to) {
        var reorder = __spreadArray([], blocks, true);
        var f = reorder.splice(from, 1)[0];
        reorder.splice(to, 0, f);
        setValue(name, reorder);
    }
    function remove(from) {
        var reorder = __spreadArray([], blocks, true);
        reorder.splice(from, 1)[0];
        setValue(name, reorder);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Context_1.default.Provider, { value: { selected: selected } },
            react_1.default.createElement(Label_1.default, null),
            react_1.default.createElement("span", { className: "".concat(className, " h-full overflow-hidden") },
                react_1.default.createElement("div", { className: "flex-1 flex flex-col p-10 space-y-2 overflow-auto scrollbar" },
                    blocks.map(function (block, key) {
                        return (react_1.default.createElement(EditorBlock_1.default, { key: key, block: block, select: function () { return setSelected(block.id); }, moveDown: function () { return move(key, key + 1); }, moveUp: function () { return move(key, key - 1); }, remove: function () { return remove(key); } }));
                    }),
                    react_1.default.createElement("div", { className: "mt-auto" },
                        react_1.default.createElement(AddBlock_1.default, __assign({}, props)))),
                react_1.default.createElement(BlockProperties_1.default, __assign({}, props)),
                react_1.default.createElement(PrivacyBarrier_1.default, null)),
            react_1.default.createElement(InlineErrors_1.default, null))));
});
