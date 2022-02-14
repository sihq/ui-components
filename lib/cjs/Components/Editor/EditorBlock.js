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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var solid_1 = require("@heroicons/react/solid");
var react_1 = __importStar(require("react"));
var Conditional_1 = __importDefault(require("../Conditional"));
var Context_1 = __importDefault(require("./Context"));
var Blocks_1 = __importDefault(require("./Blocks"));
var EditorBlock = function (props) {
    var block = props.block, select = props.select, remove = props.remove, moveDown = props.moveDown, moveUp = props.moveUp;
    var selected = (0, react_1.useContext)(Context_1.default).selected;
    var EditorBlock = Blocks_1.default.find(function (_a) {
        var name = _a.name;
        return name === (block === null || block === void 0 ? void 0 : block.type);
    });
    return (react_1.default.createElement("button", { type: "button", onClick: select, className: "border  relative  rounded p-2 ".concat(selected === block.id
            ? 'border-gray-700 ring-2 ring-gray-300 ring-opacity-25 '
            : 'border-dashed border-white hover:border-gray-400') },
        react_1.default.createElement(Conditional_1.default, { expresion: selected === block.id },
            react_1.default.createElement("div", { className: "flex space-x-2 absolute top-1 right-1" },
                react_1.default.createElement("span", { onClick: remove, className: "text-gray-600 rounded-full bg-gray-200 p-1 inline-flex hover:bg-gray-600 hover:text-white" },
                    react_1.default.createElement(solid_1.TrashIcon, { className: "h-3 w-3" })),
                react_1.default.createElement("span", { className: " inline-flex space-x-1 rounded-full bg-gray-200" },
                    react_1.default.createElement("span", { onClick: moveUp, className: "text-gray-600 rounded-full bg-gray-200 p-1 inline-flex hover:bg-gray-600 hover:text-white" },
                        react_1.default.createElement(solid_1.ArrowUpIcon, { className: "h-3 w-3" })),
                    react_1.default.createElement("span", { className: "block  w-px bg-gray-400 mt-1 mb-1" }),
                    react_1.default.createElement("span", { onClick: moveDown, className: "text-gray-600 rounded-full bg-gray-200 p-1 inline-flex hover:bg-gray-600 hover:text-white" },
                        react_1.default.createElement(solid_1.ArrowDownIcon, { className: "h-3 w-3" }))))), EditorBlock === null || EditorBlock === void 0 ? void 0 :
        EditorBlock.preview(block.data)));
};
exports.default = EditorBlock;
