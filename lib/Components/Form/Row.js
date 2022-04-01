import Conditional from '../Conditional';
import React from 'react';
var Row = function (_a) {
    var children = _a.children, title = _a.title, description = _a.description;
    return (React.createElement("div", { className: "flex flex-col xl:flex-row py-8  xl:space-x-8" },
        React.createElement(Conditional, { expresion: !!title || !!description },
            React.createElement("div", { className: "w-64 mb-5 xl:mb-0" },
                React.createElement("div", { className: "text-gray-700 text-sm font-bold" }, title),
                React.createElement("div", { className: "text-sm text-gray-500" }, description))),
        React.createElement("div", { className: "flex md:w-2/3 xl:w-96" }, children)));
};
export default Row;
