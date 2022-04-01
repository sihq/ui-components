var Conditional = function (_a) {
    var expresion = _a.expresion, children = _a.children;
    return expresion ? children : null;
};
export default Conditional;
