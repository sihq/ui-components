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
exports.Activator = void 0;
var react_1 = __importStar(require("react"));
var ContextMenuContext_1 = require("../../Contexts/ContextMenuContext");
var Activator = function (_a) {
    var children = _a.children, className = _a.className;
    var _b = (0, react_1.useContext)(ContextMenuContext_1.ContextMenuContext), active = _b[0], setActive = _b[1];
    return (react_1.default.createElement("button", { type: "button", className: className, onClick: function () { return setActive(!active); } }, children));
};
exports.Activator = Activator;
exports.default = exports.Activator;
