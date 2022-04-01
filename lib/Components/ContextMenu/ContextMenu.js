import React, { useState } from 'react';
import { ContextMenuContext } from '../../Contexts/ContextMenuContext';
export var ContextMenu = function (_a) {
    var children = _a.children;
    var _b = useState(false), active = _b[0], setActive = _b[1];
    return React.createElement(ContextMenuContext.Provider, { value: [active, setActive] }, children);
};
export default ContextMenu;
