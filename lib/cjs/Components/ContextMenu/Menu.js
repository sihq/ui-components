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
exports.Menu = void 0;
var react_1 = __importStar(require("react"));
var ContextMenuContext_1 = require("../../Contexts/ContextMenuContext");
var Menu = function (_a) {
    var children = _a.children;
    var active = (0, react_1.useContext)(ContextMenuContext_1.ContextMenuContext)[0];
    return active ? (react_1.default.createElement("div", { className: "z-5 absolute right-0 mt-2 py-2 bg-white rounded-md shadow-xl border border-gray-200 z-30" },
        react_1.default.createElement("div", { className: "w-4 overflow-hidden inline-block absolute top-0 right-0 transform -translate-y-full" },
            react_1.default.createElement("div", { className: " h-2 w-2 bg-white rotate-45 transform origin-bottom-left" })),
        children)) : null;
};
exports.Menu = Menu;
exports.default = exports.Menu;
