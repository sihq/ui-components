import React, { useContext } from 'react';
import { ContextMenuContext } from '../../Contexts/ContextMenuContext';
export var Menu = function (_a) {
    var children = _a.children;
    var active = useContext(ContextMenuContext)[0];
    return active ? (React.createElement("div", { className: "z-5 absolute right-0 mt-2 py-2 bg-white rounded-md shadow-xl border border-gray-200 z-30" },
        React.createElement("div", { className: "w-4 overflow-hidden inline-block absolute top-0 right-0 transform -translate-y-full" },
            React.createElement("div", { className: " h-2 w-2 bg-white rotate-45 transform origin-bottom-left" })),
        children)) : null;
};
export default Menu;
