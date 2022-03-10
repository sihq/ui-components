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
function Append(props) {
    var context = (0, react_1.useContext)(Contexts_1.FieldContext);
    var hidden = props.hidden, set = props.set;
    return (react_1.default.createElement("span", { className: "flex flex-shrink-0 items-center justify-center ml-2" },
        react_1.default.createElement("button", { type: "button", onClick: function () {
                var _a;
                set(!hidden);
                (_a = context.ref.current) === null || _a === void 0 ? void 0 : _a.focus();
            }, className: "focus:outline-none z-10 relative p-0.5 rounded-full text-xs text-gray-400 hover:text-blue-500 ".concat(hidden ? '' : 'bg-gray-200') }, hidden ? react_1.default.createElement(solid_1.EyeIcon, { className: "h-3 w-3" }) : react_1.default.createElement(solid_1.EyeOffIcon, { className: "h-3 w-3" }))));
}
exports.default = Append;
