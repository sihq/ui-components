import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import React, { useContext } from 'react';
import { FieldContext } from '../../../Contexts';
export default function Append(props) {
    var context = useContext(FieldContext);
    var hidden = props.hidden, set = props.set;
    return (React.createElement("span", { className: "flex flex-shrink-0 items-center justify-center ml-2" },
        React.createElement("button", { type: "button", onClick: function () {
                var _a;
                set(!hidden);
                (_a = context.ref.current) === null || _a === void 0 ? void 0 : _a.focus();
            }, className: "focus:outline-none z-10 relative p-0.5 rounded-full text-xs text-gray-400 hover:text-blue-500 ".concat(hidden ? '' : 'bg-gray-200') }, hidden ? React.createElement(EyeIcon, { className: "h-3 w-3" }) : React.createElement(EyeOffIcon, { className: "h-3 w-3" }))));
}
