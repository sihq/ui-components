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
var react_1 = __importStar(require("react"));
var Contexts_1 = require("../../../Contexts");
var solid_1 = require("@heroicons/react/solid");
function Append() {
    var context = (0, react_1.useContext)(Contexts_1.FieldContext);
    return context.value ? (react_1.default.createElement("span", { className: "flex flex-shrink-0 items-center justify-center" },
        react_1.default.createElement("button", { type: "button", onClick: function () { return context.onChange(''); }, className: "focus:outline-none z-10 bg-gray-200 p-0.5 rounded-full text-xs text-gray-400 hover:text-blue-500" },
            react_1.default.createElement(solid_1.XIcon, { className: "h-3 w-3" })))) : null;
}
exports.default = Append;
