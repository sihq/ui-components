import { MinusIcon, PlusIcon } from '@heroicons/react/solid';
import React, { useContext } from 'react';
import { FieldContext } from '../../../Contexts';
export default function Append() {
    var _a = useContext(FieldContext), value = _a.value, onChange = _a.onChange;
    var number = Number(value);
    var increment = function () { return onChange(number + 1); };
    var decrement = function () { return onChange(number - 1); };
    return (React.createElement("span", { className: "flex flex-col flex-shrink-0 items-center justify-center -my-2 -mr-2 ml-2 border rounded overflow-hidden border-gray-300 divide-y divide-gray-300" },
        React.createElement("button", { type: "button", onClick: increment, className: "focus:outline-none z-10 relative  text-xs bg-gray-50 text-gray-500 hover:text-white hover:bg-blue-500" },
            React.createElement(PlusIcon, { className: "h-3 w-3" })),
        React.createElement("button", { type: "button", onClick: decrement, className: "focus:outline-none z-10 relative    text-xs bg-gray-50  text-gray-500 hover:text-white hover:bg-blue-500" },
            React.createElement(MinusIcon, { className: "h-3 w-3" }))));
}
