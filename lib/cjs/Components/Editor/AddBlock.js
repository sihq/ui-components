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
var Blocks_1 = __importDefault(require("./Blocks"));
var Conditional_1 = __importDefault(require("../Conditional"));
var Contexts_1 = require("../../Contexts");
var outline_1 = require("@heroicons/react/outline");
var uuid_1 = require("uuid");
var AddBlock = function () {
    var _a = (0, react_1.useState)(false), open = _a[0], toggle = _a[1];
    var context = (0, react_1.useContext)(Contexts_1.FieldContext);
    var blocks = context.value ? context.value : [];
    return (react_1.default.createElement("div", { className: "flex items-center justify-center relative" },
        react_1.default.createElement(Conditional_1.default, { expresion: open },
            react_1.default.createElement("div", { className: "absolute mb-10 bottom-0 grid grid-cols-3 gap-2 w-96 transform -translate-x-1/2 left-1/2  bg-white rounded-md shadow-xl z-30 p-4 border border-gray-100" }, Blocks_1.default.map(function (editor_block, key) {
                return (react_1.default.createElement("div", { key: key, onClick: function () {
                        context.onChange(__spreadArray(__spreadArray([], blocks, true), [{ id: (0, uuid_1.v4)(), type: editor_block.name }], false));
                        toggle(false);
                    }, className: "border text-xs border-gray-200 hover:border-blue-500 hover:text-blue-500 rounded p-2 flex flex-col items-center justify-center" },
                    editor_block.icon ? editor_block.icon() : null,
                    editor_block.name));
            }))),
        react_1.default.createElement("button", { type: "button", onClick: function () { return toggle(!open); }, className: "text-gray-400 hover:text-blue-500 p-2 mt-5" },
            react_1.default.createElement(outline_1.PlusCircleIcon, { className: "h-10 w-10" }))));
};
exports.default = AddBlock;
