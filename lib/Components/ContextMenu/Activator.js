import React, { useContext } from 'react';
import { ContextMenuContext } from '../../Contexts/ContextMenuContext';
export var Activator = function (_a) {
    var children = _a.children, className = _a.className;
    var _b = useContext(ContextMenuContext), active = _b[0], setActive = _b[1];
    return (React.createElement("button", { type: "button", className: className, onClick: function () { return setActive(!active); } }, children));
};
export default Activator;
