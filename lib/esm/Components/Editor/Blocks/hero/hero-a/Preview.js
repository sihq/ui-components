import React from 'react';
export default (function (data) {
    var _a, _b, _c, _d;
    return (React.createElement("section", { className: "text-gray-600 body-font" },
        React.createElement("div", { className: "container mx-auto flex px-5 py-12 md:flex-row flex-col items-center" },
            React.createElement("div", { className: "lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" },
                React.createElement("h1", { className: "title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" }, (_a = data === null || data === void 0 ? void 0 : data.title) !== null && _a !== void 0 ? _a : 'Before they sold out readymade gluten'),
                React.createElement("p", { className: "mb-8 leading-relaxed whitespace-pre-wrap" }, (_b = data === null || data === void 0 ? void 0 : data.content) !== null && _b !== void 0 ? _b : 'Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.')),
            React.createElement("div", { className: "lg:max-w-lg lg:w-full md:w-1/2 w-5/6" },
                React.createElement("img", { className: "object-cover object-center rounded", alt: "hero", src: (data === null || data === void 0 ? void 0 : data.image)
                        ? "https://".concat((_c = data === null || data === void 0 ? void 0 : data.image) === null || _c === void 0 ? void 0 : _c.bucket, ".s3.ap-southeast-2.amazonaws.com/").concat((_d = data === null || data === void 0 ? void 0 : data.image) === null || _d === void 0 ? void 0 : _d.key)
                        : 'https://dummyimage.com/720x800' })))));
});