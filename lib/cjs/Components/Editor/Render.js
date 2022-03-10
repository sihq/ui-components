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
var react_1 = __importStar(require("react"));
var Blocks_1 = __importDefault(require("./Blocks"));
var Contexts_1 = require("../../Contexts");
var lodash_1 = __importDefault(require("lodash"));
exports.default = (function (props) {
    var state = (0, react_1.useContext)(Contexts_1.ReactiveControllerContext).state;
    var blocks = lodash_1.default.get(state, props.name);
    return (react_1.default.createElement(react_1.default.Fragment, null, (blocks !== null && blocks !== void 0 ? blocks : []).map(function (block) {
        var EditorBlock = Blocks_1.default.find(function (_a) {
            var name = _a.name;
            return name === (block === null || block === void 0 ? void 0 : block.type);
        });
        return react_1.default.createElement(react_1.default.Fragment, null, EditorBlock === null || EditorBlock === void 0 ? void 0 : EditorBlock.preview(block.data));
    })));
});
