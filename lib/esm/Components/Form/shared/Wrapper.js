import React, { useContext } from 'react';
import { FieldContext } from '../../../Contexts';
import _ from 'lodash';
var BASE = ' flex items-center justify-center relative border-2 outline-none focus-within:ring-2 focus-within:shadow-inner focus-within:ring-opacity-20 transition-all ease-in-out duration-200 flex-1';
var VARIANTS = {
    primary: '',
    destructive: '',
    warning: '',
    'flat-destructive': '',
    'flat-primary': '',
    standard: ' bg-white border-gray-300 focus-within:border-blue-400 focus-within:ring-blue-400 rounded text-gray-700',
    opaque: ' focus-within:bg-white bg-gray-200 border-gray-200 focus-within:border-blue-400 focus-within:ring-blue-400 rounded text-gray-700',
    'opaque-rounded': ' focus-within:bg-white bg-gray-200 border-gray-200 focus-within:border-blue-400 focus-within:ring-blue-400 rounded-full text-gray-700',
};
var SIZES = {
    xs: 'px-1 p-0.5 text-lg md:text-xs ',
    sm: 'px-3 p-2 text-lg md:text-xs ',
    md: 'px-3 p-2 text-lg md:text-sm',
    lg: 'px-4 p-3 text-lg md:text-sm',
    xl: 'px-4 p-3 text-lg md:text-md',
};
export default function Wrapper(_a) {
    var children = _a.children;
    var context = useContext(FieldContext);
    var className = [
        BASE,
        Object.values(_.pick(VARIANTS, [context.variant])).join(' '),
        Object.values(_.pick(SIZES, [context.size])).join(' '),
    ].join(' ');
    return React.createElement("span", { className: className }, children);
}
