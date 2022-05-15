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
import React, { useContext } from 'react';
import Conditional from '../../Conditional';
import { ControllerContext } from '@sihq/reactive';
import CurrencyFormat from 'react-currency-format';
import Text from './Text';
export default (function (props) {
    var name = props.name;
    var value = useContext(ControllerContext).value;
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
    var Append = function () { return (React.createElement("span", { className: "flex flex-shrink-0 items-center justify-center ml-2" },
        React.createElement(Conditional, { expresion: !!calculateAge() },
            React.createElement("span", { className: "flex text-gray-500 items-center space-x-1 text-xs bg-gray-100 rounded-full p-0.5 px-2" },
                React.createElement("span", { className: "font-bold", style: { fontSize: 10 } }, calculateAge()),
                React.createElement("span", { className: "opacity-75", style: { fontSize: 10 } }, "Y/O"))))); };
    return (React.createElement(React.Fragment, null,
        React.createElement(CurrencyFormat, { onValueChange: function () {
                // const { value } = values;
                // formattedValue = $2,223
                // value ie, 2223
                // console.log('onc', values);
                // setValue(name, value);
            }, customInput: function (p) { return React.createElement(Text, __assign({}, props, p, { append: React.createElement(Append, null) })); }, format: cardExpiry })));
});
