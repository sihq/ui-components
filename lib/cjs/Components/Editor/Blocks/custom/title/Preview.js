"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.default = (function (data) {
    var _a, _b, _c;
    return (react_1.default.createElement("section", { className: "text-gray-600 body-font text-left" },
        react_1.default.createElement("div", { className: "container px-5 pt-6 pb-12 mx-auto" },
            react_1.default.createElement("div", { className: "flex items-center justify-center" },
                react_1.default.createElement("img", { className: "lg:h-64 md:h-48 w-full object-cover object-center rounded-lg", src: (data === null || data === void 0 ? void 0 : data.image)
                        ? "https://".concat((_a = data === null || data === void 0 ? void 0 : data.image) === null || _a === void 0 ? void 0 : _a.bucket, ".s3.ap-southeast-2.amazonaws.com/").concat((_b = data === null || data === void 0 ? void 0 : data.image) === null || _b === void 0 ? void 0 : _b.key)
                        : 'https://dummyimage.com/720x400', alt: "blog" })),
            react_1.default.createElement("div", { className: "text-2xl font-bold mt-5" }, (_c = data === null || data === void 0 ? void 0 : data.title) !== null && _c !== void 0 ? _c : 'title'))));
});