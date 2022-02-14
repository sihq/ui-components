import React from 'react';
export default (function (_a) {
    var children = _a.children, label = _a.label;
    return React.createElement("span", { className: "font-semibold text-gray-600 text-sm leading-loose select-none" }, children !== null && children !== void 0 ? children : label);
});
