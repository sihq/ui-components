import React from 'react';
export default (function (data) {
    var _a;
    return (React.createElement("section", { className: "text-gray-600 body-font text-left" },
        React.createElement("div", { className: "container px-5 pt-6 pb-12 mx-auto" },
            React.createElement("div", { className: "flex items-center justify-center" },
                React.createElement("img", { className: "lg:h-96 md:h-48 w-full object-cover object-center rounded-lg", src: (data === null || data === void 0 ? void 0 : data.image)
                        ? // @ts-ignore
                            "".concat(data === null || data === void 0 ? void 0 : data.image.store).concat((data === null || data === void 0 ? void 0 : data.image.status) === 'staged' ? 'tmp/' : '').concat(data === null || data === void 0 ? void 0 : data.image.id)
                        : 'https://dummyimage.com/720x400', alt: "blog" })),
            React.createElement("div", { className: "text-2xl font-bold mt-5" }, (_a = data === null || data === void 0 ? void 0 : data.title) !== null && _a !== void 0 ? _a : 'title'))));
});
