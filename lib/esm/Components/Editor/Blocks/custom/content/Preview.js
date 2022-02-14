import React from 'react';
export default (function (data) {
    var _a;
    return (React.createElement("section", { className: "text-gray-600 body-font text-left" },
        React.createElement("div", { className: "container px-5 px-6 mx-auto" },
            React.createElement("div", { className: "whitespace-pre-wrap" }, (_a = data === null || data === void 0 ? void 0 : data.content) !== null && _a !== void 0 ? _a : 'content'))));
});
