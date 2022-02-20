import React from 'react';
export var Overlay = function (_a) {
    var children = _a.children;
    return React.createElement("div", { className: "absolute inset-0 bg-black bg-opacity-25 z-50" }, children);
};
