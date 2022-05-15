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
Object.defineProperty(exports, "__esModule", { value: true });
var solid_1 = require("@heroicons/react/solid");
var react_1 = __importStar(require("react"));
var Contexts_1 = require("../../../Contexts");
function Append() {
    var _a = (0, react_1.useContext)(Contexts_1.FieldContext), value = _a.value, onChange = _a.onChange;
    var number = Number(value);
    var increment = function () { return onChange(number + 1); };
    var decrement = function () { return onChange(number - 1); };
    return (react_1.default.createElement("span", { className: "flex flex-col flex-shrink-0 items-center justify-center -my-2 -mr-2 ml-2 border rounded overflow-hidden border-gray-300 divide-y divide-gray-300" },
        react_1.default.createElement("button", { type: "button", onClick: increment, className: "focus:outline-none z-10 relative  text-xs bg-gray-50 text-gray-500 hover:text-white hover:bg-blue-500" },
            react_1.default.createElement(solid_1.PlusIcon, { className: "h-3 w-3" })),
        react_1.default.createElement("button", { type: "button", onClick: decrement, className: "focus:outline-none z-10 relative    text-xs bg-gray-50  text-gray-500 hover:text-white hover:bg-blue-500" },
            react_1.default.createElement(solid_1.MinusIcon, { className: "h-3 w-3" }))));
}
exports.default = Append;
