import React from 'react';
var ALIGNMENTS = {
    between: 'justify-between',
    right: 'justify-end',
    left: 'justify-start',
    center: 'justify-center',
};
export var Actions = function (_a) {
    var children = _a.children, _b = _a.alignment, alignment = _b === void 0 ? 'right' : _b;
    return React.createElement("div", { className: "px-4 py-3 flex items-center space-x-2 ".concat(ALIGNMENTS[alignment]) }, children);
};
