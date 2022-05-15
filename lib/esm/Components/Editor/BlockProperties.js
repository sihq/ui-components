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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Blocks_1 = __importDefault(require("./Blocks"));
var solid_1 = require("@heroicons/react/solid");
var Context_1 = __importDefault(require("./Context"));
var Field_1 = __importDefault(require("../Form/Field"));
var Contexts_1 = require("../../Contexts");
var lodash_1 = __importDefault(require("lodash"));
var Wrapper = function (_a) {
    var children = _a.children, group = _a.group, activeGroup = _a.activeGroup, groupKey = _a.groupKey, setActiveGroup = _a.setActiveGroup;
    return group === 'undefined' ? (children) : (react_1.default.createElement("div", { key: group, className: "border-b border-gray-300 -mx-5 flex flex-col ".concat(groupKey === 0 ? 'border-t' : '', " ").concat(activeGroup === group ? 'bg-gray-100' : ' hover:bg-gray-100 cursor-pointer') },
        react_1.default.createElement("button", { type: "button", onClick: function () { return setActiveGroup(activeGroup === group ? '' : group); }, className: "text-xs text-gray-600 font-bold px-5 pr-3 p-2 flex items-center flex-1" },
            group,
            react_1.default.createElement("span", { className: "ml-auto flex" },
                react_1.default.createElement(solid_1.ChevronDownIcon, { className: "h-5 w-5 transition ease duration-300 transform  ".concat(activeGroup === group ? ' rotate-180' : '  rotate-0') }))),
        react_1.default.createElement("div", { className: "p-5 ".concat(activeGroup === group ? ' block' : '  hidden') }, children)));
};
var BlockProperties = function (_a) {
    var name = _a.name;
    var selected = (0, react_1.useContext)(Context_1.default).selected;
    var context = (0, react_1.useContext)(Contexts_1.FieldContext);
    var blocks = context.value ? context.value : [];
    var block = blocks.find(function (_a) {
        var id = _a.id;
        return id === selected;
    });
    var index = blocks.findIndex(function (_a) {
        var id = _a.id;
        return id === selected;
    });
    var EditorBlock = Blocks_1.default.find(function (_a) {
        var name = _a.name;
        return name === (block === null || block === void 0 ? void 0 : block.type);
    });
    var fieldGroups = lodash_1.default.groupBy(EditorBlock === null || EditorBlock === void 0 ? void 0 : EditorBlock.fields, function (e) { return e.group; });
    var _b = (0, react_1.useState)(), activeGroup = _b[0], setActiveGroup = _b[1];
    return (react_1.default.createElement("div", { className: "p-4 flex" },
        react_1.default.createElement("div", { className: "bg-gray-50 w-72 border rounded border-gray-300 p-3 overflow-y-hidden  shadow scrollbar" },
            react_1.default.createElement("div", { className: "text-xs text-gray-600 tracking-wider flex-grow font-bold uppercase mt-2 mb-5" }, EditorBlock === null || EditorBlock === void 0 ? void 0 :
                EditorBlock.name,
                (EditorBlock === null || EditorBlock === void 0 ? void 0 : EditorBlock.description) ? (react_1.default.createElement("div", { className: "text-xs text-gray-400 tracking-wider font-normal normal-case" }, EditorBlock === null || EditorBlock === void 0 ? void 0 : EditorBlock.description)) : null),
            react_1.default.createElement("div", { className: "" }, Object.keys(fieldGroups).map(function (group, groupKey) {
                return (react_1.default.createElement(Wrapper, __assign({}, { groupKey: groupKey, activeGroup: activeGroup, setActiveGroup: setActiveGroup, group: group }),
                    react_1.default.createElement("div", { className: "space-y-2" }, fieldGroups[group].map(function (field, key) {
                        return (react_1.default.createElement("div", { key: key },
                            react_1.default.createElement(Field_1.default, __assign({}, field, { name: "".concat(name, ".").concat(index, ".data.").concat(field.name) }))));
                    }))));
            })))));
};
exports.default = BlockProperties;
