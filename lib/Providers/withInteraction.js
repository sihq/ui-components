var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
export default function withInteraction(Component) {
    return function (options) {
        var navigate = useNavigate();
        var location = useLocation();
        var onClick = options.onClick, modal = options.modal, to = options.to;
        function action() {
            if (onClick) {
                return onClick;
            }
            else if (modal) {
                return function () { return navigate(modal, { state: { from: location } }); };
            }
            else if (to) {
                return function () { return navigate(to); };
            }
            return undefined;
        }
        var newProps = __assign(__assign({}, options), { action: action() });
        return React.createElement(Component, __assign({}, newProps));
    };
}
