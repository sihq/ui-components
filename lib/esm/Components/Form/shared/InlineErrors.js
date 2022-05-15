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
var Contexts_1 = require("../../../Contexts");
var react_1 = __importStar(require("react"));
exports.default = (function () {
    var _a, _b;
    var context = (0, react_1.useContext)(Contexts_1.FieldContext);
    var exceptions = (0, react_1.useContext)(Contexts_1.ReactiveControllerContext).exceptions;
    var error = exceptions ? (_a = exceptions[context.name]) !== null && _a !== void 0 ? _a : undefined : undefined;
    return error ? (react_1.default.createElement("span", { className: "select-none text-yellow-500 text-xs flex items-start leading-5 mt-2 font-semibold animate-animated animate-faster animate-fadeInDown" },
        react_1.default.createElement("svg", { className: "h-5 w-5 mr-0.5 flex-shrink-0", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", version: "1.1", x: "0px", y: "0px", viewBox: "0 0 100 100", xmlSpace: "preserve" },
            react_1.default.createElement("g", null,
                react_1.default.createElement("g", null,
                    react_1.default.createElement("path", { d: "M50,85c-19.3,0-35-15.7-35-35c0-19.3,15.7-35,35-35c19.3,0,35,15.7,35,35C85,69.2,69.3,85,50,85z M50,20.9 c-16,0-29,13-29,29c0,16,13,29,29,29c16,0,29-13,29-29C79,33.9,66,20.9,50,20.9z" })),
                react_1.default.createElement("g", null,
                    react_1.default.createElement("path", { d: "M50,55.1c-1.7,0-3-1.3-3-3V36.8c0-1.7,1.3-3,3-3c1.7,0,3,1.3,3,3v15.3C53,53.8,51.7,55.1,50,55.1z" })),
                react_1.default.createElement("g", null,
                    react_1.default.createElement("path", { d: "M50,66.1c-0.8,0-1.6-0.3-2.1-0.9c-0.6-0.6-0.9-1.3-0.9-2.1c0-0.2,0-0.4,0.1-0.6c0-0.2,0.1-0.4,0.2-0.6 c0.1-0.2,0.2-0.3,0.3-0.5c0.1-0.2,0.2-0.3,0.4-0.5c1.1-1.1,3.1-1.1,4.2,0c0.1,0.1,0.3,0.3,0.4,0.5c0.1,0.2,0.2,0.3,0.3,0.5 c0.1,0.2,0.1,0.4,0.2,0.6c0,0.2,0.1,0.4,0.1,0.6c0,0.8-0.3,1.6-0.9,2.1C51.6,65.8,50.8,66.1,50,66.1z" })))), (_b = error[0]) !== null && _b !== void 0 ? _b : '')) : null;
});
