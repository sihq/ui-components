"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Block_1 = __importDefault(require("./custom/content/Block"));
var Block_2 = __importDefault(require("./custom/heading/Block"));
var Block_3 = __importDefault(require("./custom/title/Block"));
// Blog
var Block_4 = __importDefault(require("./blog/blog-a/Block"));
var Block_5 = __importDefault(require("./blog/blog-b/Block"));
var Block_6 = __importDefault(require("./blog/blog-c/Block"));
var Block_7 = __importDefault(require("./blog/blog-d/Block"));
var Block_8 = __importDefault(require("./blog/blog-e/Block"));
// Hero
var Block_9 = __importDefault(require("./hero/hero-a/Block"));
// testimonial
var Block_10 = __importDefault(require("./testimonial/testimonial-b/Block"));
exports.default = [
    Block_1.default,
    Block_3.default,
    Block_4.default,
    Block_5.default,
    Block_6.default,
    Block_7.default,
    Block_8.default,
    Block_2.default,
    Block_10.default,
    Block_9.default,
];
