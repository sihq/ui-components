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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var solid_1 = require("@heroicons/react/solid");
var Append_1 = __importDefault(require("../shared/Append"));
var InlineErrors_1 = __importDefault(require("../shared/InlineErrors"));
var Label_1 = __importDefault(require("../shared/Label"));
var Prepend_1 = __importDefault(require("../shared/Prepend"));
var PrivacyBarrier_1 = __importDefault(require("../shared/PrivacyBarrier"));
var react_1 = __importDefault(require("react"));
var Wrapper_1 = __importDefault(require("../shared/Wrapper"));
var Transfer = function (props) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Label_1.default, null),
        react_1.default.createElement(Wrapper_1.default, __assign({}, props),
            react_1.default.createElement(Prepend_1.default, __assign({}, props)),
            react_1.default.createElement("div", { className: "flex w-full h-32" },
                react_1.default.createElement("div", { className: "flex h-full flex-col flex-1 scrollbar space-y-2 pr-3 relative" },
                    react_1.default.createElement("button", { type: "button", className: "flex items-center outline-none text-left focus:bg-gray-700 focus:text-white p-2 bg-gray-50 relative rounded hover:bg-gray-100 hover:text-gray-700 select-none cursor-pointer" }, "Lala"),
                    react_1.default.createElement("button", { type: "button", className: "flex items-center outline-none text-left focus:bg-gray-700 focus:text-white p-2 bg-gray-50 relative rounded hover:bg-gray-100 hover:text-gray-700 select-none cursor-pointer" }, "Lala")),
                react_1.default.createElement("div", { style: { minHeight: '100px' }, className: "flex flex-col space-y-2 justify-center h-full w-px bg-gray-300" },
                    react_1.default.createElement("button", { type: "button", className: "h-5 w-5 outline-none focus:ring-2 focus:ring-gray-700 bg-white hover:bg-gray-100 hover:text-blue-500 text-gray-400 transform -translate-x-1/2 flex items-center justify-center p-0.5 rounded-full" },
                        react_1.default.createElement(solid_1.ChevronRightIcon, null)),
                    react_1.default.createElement("button", { type: "button", className: "h-5 w-5 outline-none focus:ring-2 focus:ring-gray-700 bg-white hover:bg-gray-100 hover:text-blue-500 text-gray-400 transform -translate-x-1/2 flex items-center justify-center p-0.5 rounded-full" },
                        react_1.default.createElement(solid_1.ChevronLeftIcon, null))),
                react_1.default.createElement("div", { className: "flex h-full flex-col flex-1 space-y-2 scrollbars overflow-auto pl-3" },
                    react_1.default.createElement("button", { type: "button", className: "flex items-center outline-none text-left focus:bg-gray-700 focus:text-white p-2 bg-gray-50 relative rounded hover:bg-gray-100 hover:text-gray-700 select-none cursor-pointer" }, "Lala"),
                    react_1.default.createElement("button", { type: "button", className: "flex items-center outline-none text-left focus:bg-gray-700 focus:text-white p-2 bg-gray-50 relative rounded hover:bg-gray-100 hover:text-gray-700 select-none cursor-pointer" }, "Lala"),
                    react_1.default.createElement("button", { type: "button", className: "flex items-center outline-none text-left focus:bg-gray-700 focus:text-white p-2 bg-gray-50 relative rounded hover:bg-gray-100 hover:text-gray-700 select-none cursor-pointer" }, "Lala"))),
            react_1.default.createElement(Append_1.default, __assign({}, props)),
            react_1.default.createElement(PrivacyBarrier_1.default, null)),
        react_1.default.createElement(InlineErrors_1.default, null)));
};
exports.default = Transfer;
