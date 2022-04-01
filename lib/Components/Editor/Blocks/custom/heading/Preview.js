import React from 'react';
export default (function (data) {
    var _a;
    return (React.createElement("section", { className: "text-gray-600 body-font text-left" },
        React.createElement("div", { className: "container px-5 py-6 mx-auto" },
            React.createElement("div", { className: "text-2xl font-bold" }, (_a = data === null || data === void 0 ? void 0 : data.title) !== null && _a !== void 0 ? _a : 'title'))));
});
