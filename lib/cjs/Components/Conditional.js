"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Conditional = function (_a) {
    var expresion = _a.expresion, children = _a.children;
    return expresion ? children : null;
};
exports.default = Conditional;
