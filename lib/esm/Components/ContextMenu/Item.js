import React from 'react';
import { Link } from 'react-router-dom';
export var Item = function (_a) {
    var children = _a.children, icon = _a.icon, label = _a.label, route = _a.route;
    return (React.createElement(Link, { to: route ? route : '', className: "group flex w-full focus:outline-none relative overflow-hidden items-center px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white" },
        icon ? (React.createElement("span", { className: "block h-4 w-4 mr-2 text-sm text-blue-500 group-hover:text-white" }, icon)) : null, children !== null && children !== void 0 ? children : label));
};
export default Item;
