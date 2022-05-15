import React from 'react';
export var Modal = function (_a) {
    var children = _a.children;
    return (React.createElement("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow" }, children));
};
