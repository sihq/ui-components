import React, { useContext } from 'react';
import { FieldContext } from '../../../Contexts';
import { XIcon } from '@heroicons/react/solid';
export default function Append() {
    var context = useContext(FieldContext);
    return context.value ? (React.createElement("span", { className: "flex flex-shrink-0 items-center justify-center" },
        React.createElement("button", { type: "button", onClick: function () { return context.onChange(''); }, className: "focus:outline-none z-10 bg-gray-200 p-0.5 rounded-full text-xs text-gray-400 hover:text-blue-500" },
            React.createElement(XIcon, { className: "h-3 w-3" })))) : null;
}
