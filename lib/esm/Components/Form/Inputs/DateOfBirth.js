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
var Conditional_1 = __importDefault(require("../../Conditional"));
var reactive_1 = require("@sihq/reactive");
var react_currency_format_1 = __importDefault(require("react-currency-format"));
var Text_1 = __importDefault(require("./Text"));
exports.default = (function (props) {
    var name = props.name;
    var value = (0, react_1.useContext)(reactive_1.ControllerContext).value;
    function calculateAge() {
        var dob = "".concat(value(name)).split(' / ');
        console.log('running', dob);
        var today = new Date();
        var age = today.getFullYear() - Number(dob[2]);
        if (today.getMonth() < Number(dob[1]) ||
            (today.getMonth() == Number(dob[1]) && today.getDate() < Number(dob[0]))) {
            age--;
        }
        return age;
    }
    function limit(val, max) {
        if (val.length === 1 && val[0] > max[0]) {
            val = '0' + val;
        }
        if (val.length === 2) {
            if (Number(val) === 0) {
                val = '01';
                //this can happen when user paste number
            }
            else if (val > max) {
                val = max;
            }
        }
        return val;
    }
    function cardExpiry(val) {
        var day = limit(val.substring(0, 2), '31');
        var month = limit(val.substring(2, 4), '12');
        var year = limit(val.substring(4, 8), '2021');
        return day + ' / ' + month + (year.length ? ' / ' + year : '');
    }
    var Append = function () { return (react_1.default.createElement("span", { className: "flex flex-shrink-0 items-center justify-center ml-2" },
        react_1.default.createElement(Conditional_1.default, { expresion: !!calculateAge() },
            react_1.default.createElement("span", { className: "flex text-gray-500 items-center space-x-1 text-xs bg-gray-100 rounded-full p-0.5 px-2" },
                react_1.default.createElement("span", { className: "font-bold", style: { fontSize: 10 } }, calculateAge()),
                react_1.default.createElement("span", { className: "opacity-75", style: { fontSize: 10 } }, "Y/O"))))); };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_currency_format_1.default, { onValueChange: function () {
                // const { value } = values;
                // formattedValue = $2,223
                // value ie, 2223
                // console.log('onc', values);
                // setValue(name, value);
            }, customInput: function (p) { return react_1.default.createElement(Text_1.default, __assign({}, props, p, { append: react_1.default.createElement(Append, null) })); }, format: cardExpiry })));
});
