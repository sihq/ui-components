"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function stringToHslColor(str, s, l) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var h = hash % 360;
    return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
}
function Avatar(_a) {
    var name = _a.name;
    var status = false;
    var online = true;
    var image = false;
    var circle = false;
    return (react_1.default.createElement("span", { className: "relative h-full w-full" },
        react_1.default.createElement("span", { className: "overflow-hidden ".concat(circle ? 'rounded-full' : 'rounded', "  h-full w-full text-xs text-white bg-gray-500 flex items-center justify-center") }, image ? (react_1.default.createElement("img", { src: "{{ $image }}", alt: "Brad, Martin" })) : (react_1.default.createElement("div", { className: " flex items-center justify-center w-full h-full uppercase", style: { backgroundColor: stringToHslColor(name, 100, 40) } },
            react_1.default.createElement("svg", { viewBox: "0 0 21 21", className: " w-3/4 h-3/4" },
                react_1.default.createElement("text", { x: "50%", y: "55%", className: "text-white fill-current", "dominant-baseline": "middle", "text-anchor": "middle" }, name
                    .split(' ')
                    .map(function (n, i, a) { return (i === 0 || i + 1 === a.length ? n[0] : null); })
                    .join('')))))),
        status ? (react_1.default.createElement("svg", { viewBox: "0 0 36 36", className: "h-2 w-2 absolute bottom-0 right-0" },
            react_1.default.createElement("path", { className: "shadow-inner ".concat(online ? 'text-green-500' : 'text-gray-500', " fill-current"), d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831", "stroke-width": "2" }),
            react_1.default.createElement("path", { className: "stroke-current", fill: "none", d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831", "stroke-width": "2", "stroke-dasharray": "100, 100" }))) : null));
}
exports.default = Avatar;
