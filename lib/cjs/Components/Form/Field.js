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
exports.Field = void 0;
var Address_1 = __importDefault(require("./Inputs/Address"));
var Currency_1 = __importDefault(require("./Inputs/Currency"));
var DateOfBirth_1 = __importDefault(require("./Inputs/DateOfBirth"));
var Duration_1 = __importDefault(require("./Inputs/Duration"));
var Editor_1 = __importDefault(require("./Inputs/Editor"));
var Image_1 = __importDefault(require("./Inputs/Image"));
var InputPassword_1 = __importDefault(require("./InputPassword/InputPassword"));
var Phone_1 = __importDefault(require("./Inputs/Phone"));
var react_1 = __importDefault(require("react"));
var Search_1 = __importDefault(require("./Inputs/Search"));
var InputSelect_1 = __importDefault(require("./InputSelect/InputSelect"));
var Text_1 = __importDefault(require("./Inputs/Text"));
var Textarea_1 = __importDefault(require("./Inputs/Textarea"));
var Timezone_1 = __importDefault(require("./Inputs/Timezone"));
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
            return react_1.default.createElement(Phone_1.default, __assign({}, props));
        case 'address':
            return react_1.default.createElement(Address_1.default, __assign({}, props));
        case 'search':
            return react_1.default.createElement(Search_1.default, __assign({}, props));
        case 'select':
            return react_1.default.createElement(InputSelect_1.default, __assign({}, props));
        case 'toggle':
            return react_1.default.createElement(Toggle_1.default, __assign({}, props));
        case 'toggle-button':
            return react_1.default.createElement(ToggleButton_1.default, __assign({}, props));
        case 'timezone':
            return react_1.default.createElement(Timezone_1.default, __assign({}, props));
        case 'date-of-birth':
            return react_1.default.createElement(DateOfBirth_1.default, __assign({}, props));
        case 'currency':
            return react_1.default.createElement(Currency_1.default, __assign({}, props));
        case 'duration':
            return react_1.default.createElement(Duration_1.default, __assign({}, props));
        case 'editor':
            return react_1.default.createElement(Editor_1.default, __assign({}, props));
        case 'textarea':
            return react_1.default.createElement(Textarea_1.default, __assign({}, props));
        case 'image':
            return react_1.default.createElement(Image_1.default, __assign({}, props));
        case 'transfer':
            return react_1.default.createElement(Transfer_1.default, __assign({}, props));
        default:
            return null;
    }
};
var Field = function (props) {
    var _a;
    var id = props.id, name = props.name, label = props.label;
    return (react_1.default.createElement("label", { htmlFor: "".concat((_a = id !== null && id !== void 0 ? id : name) !== null && _a !== void 0 ? _a : label), className: "flex flex-col flex-1" },
        react_1.default.createElement(Input, __assign({}, props))));
};
exports.Field = Field;
exports.default = exports.Field;
