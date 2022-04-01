import { ClockIcon } from '@heroicons/react/solid';
import React from 'react';
export default function Prepend() {
    return (React.createElement("span", { className: "flex flex-shrink-0 items-center p-0.5 justify-center mr-2 text-gray-400 text-xs" },
        React.createElement(ClockIcon, { className: "h-3 w-3" })));
}
