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
exports.Field = void 0;
var react_1 = __importStar(require("react"));
var Address_1 = __importDefault(require("./Inputs/Address"));
var Currency_1 = __importDefault(require("./Inputs/Currency"));
var DateOfBirth_1 = __importDefault(require("./Inputs/DateOfBirth"));
var InputDuration_1 = __importDefault(require("./InputDuration/InputDuration"));
var InputEditor_1 = __importDefault(require("./InputEditor/InputEditor"));
var Contexts_1 = require("../../Contexts");
var InputImage_1 = __importDefault(require("./InputImage/InputImage"));
var InputNumber_1 = __importDefault(require("./InputNumber/InputNumber"));
var InputPassword_1 = __importDefault(require("./InputPassword/InputPassword"));
var InputPhone_1 = __importDefault(require("./InputPhone/InputPhone"));
var Reference_1 = __importDefault(require("./shared/Reference"));
var InputSearch_1 = __importDefault(require("./InputSearch/InputSearch"));
var InputSelect_1 = __importDefault(require("./InputSelect/InputSelect"));
var Store_1 = __importDefault(require("./shared/Store"));
var Text_1 = __importDefault(require("./Inputs/Text"));
var InputTextarea_1 = __importDefault(require("./InputTextarea/InputTextarea"));
var InputTimezone_1 = __importDefault(require("./InputTimezone/InputTimezone"));
var Toggle_1 = __importDefault(require("./Inputs/Toggle"));
var ToggleButton_1 = __importDefault(require("./Inputs/ToggleButton"));
var Transfer_1 = __importDefault(require("./Inputs/Transfer"));
var Input = function (props) {
    var type = props.type;
    switch (type) {
        case 'text':
            return react_1.default.createElement(Text_1.default, __assign({}, props));
        case 'password':
            return react_1.default.createElement(InputPassword_1.default, __assign({}, props));
        case 'phone':
            return react_1.default.createElement(InputPhone_1.default, __assign({}, props));
        case 'address':
            return react_1.default.createElement(Address_1.default, __assign({}, props));
        case 'search':
            return react_1.default.createElement(InputSearch_1.default, __assign({}, props));
        case 'select':
            return react_1.default.createElement(InputSelect_1.default, __assign({}, props));
        case 'toggle':
            return react_1.default.createElement(Toggle_1.default, __assign({}, props));
        case 'toggle-button':
            return react_1.default.createElement(ToggleButton_1.default, __assign({}, props));
        case 'timezone':
            return react_1.default.createElement(InputTimezone_1.default, __assign({}, props));
        case 'date-of-birth':
            return react_1.default.createElement(DateOfBirth_1.default, __assign({}, props));
        case 'currency':
            return react_1.default.createElement(Currency_1.default, __assign({}, props));
        case 'duration':
            return react_1.default.createElement(InputDuration_1.default, null);
        case 'number':
            return react_1.default.createElement(InputNumber_1.default, __assign({}, props));
        case 'editor':
            return react_1.default.createElement(InputEditor_1.default, __assign({}, props));
        case 'textarea':
            return react_1.default.createElement(InputTextarea_1.default, __assign({}, props));
        case 'image':
            return react_1.default.createElement(InputImage_1.default, __assign({}, props));
        case 'transfer':
            return react_1.default.createElement(Transfer_1.default, __assign({}, props));
        default:
            return null;
    }
};
var Field = function (props) {
    var _a;
    var id = props.id, name = props.name, label = props.label;
    var context = (0, react_1.useContext)(Contexts_1.FieldContext);
    return (react_1.default.createElement(Contexts_1.FieldContext.Provider, { value: __assign(__assign({}, context), props) },
        react_1.default.createElement(Reference_1.default, null,
            react_1.default.createElement(Store_1.default, null,
                react_1.default.createElement("label", { htmlFor: "".concat((_a = id !== null && id !== void 0 ? id : name) !== null && _a !== void 0 ? _a : label), className: "flex flex-col flex-1" },
                    react_1.default.createElement(Input, __assign({}, props)))))));
};
exports.Field = Field;
exports.default = exports.Field;
