"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.default = (function (data) {
    var _a;
    return (react_1.default.createElement("section", { className: "text-gray-600 body-font text-left" },
        react_1.default.createElement("div", { className: "container px-5 pt-6 pb-12 mx-auto" },
            react_1.default.createElement("div", { className: "flex items-center justify-center" },
                react_1.default.createElement("img", { className: "lg:h-96 md:h-48 w-full object-cover object-center rounded-lg", src: (data === null || data === void 0 ? void 0 : data.image)
                        ? // @ts-ignore
                            "".concat(data === null || data === void 0 ? void 0 : data.image.store).concat((data === null || data === void 0 ? void 0 : data.image.status) === 'staged' ? 'tmp/' : '').concat(data === null || data === void 0 ? void 0 : data.image.id)
                        : 'https://dummyimage.com/720x400', alt: "blog" })),
            react_1.default.createElement("div", { className: "text-2xl font-bold mt-5" }, (_a = data === null || data === void 0 ? void 0 : data.title) !== null && _a !== void 0 ? _a : 'title'))));
});
