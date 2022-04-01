import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';
export default function Prepend() {
    return (React.createElement("span", { className: "flex flex-shrink-0 items-center justify-center mr-2" },
        React.createElement("span", { className: "p-0 rounded-full text-xs text-gray-500 " },
            React.createElement(SearchIcon, { className: "h-3 w-3" }))));
}
