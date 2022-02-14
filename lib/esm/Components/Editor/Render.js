import React, { useContext } from 'react';
import Blocks from './Blocks';
import { ControllerContext } from '../../Providers/Controller';
export default React.forwardRef(function (props) {
    var value = useContext(ControllerContext).value;
    var name = props.name;
    var blocks = value(name) ? value(name) : [];
    return (React.createElement(React.Fragment, null, blocks.map(function (block) {
        var EditorBlock = Blocks.find(function (_a) {
            var name = _a.name;
            return name === (block === null || block === void 0 ? void 0 : block.type);
        });
        return React.createElement(React.Fragment, null, EditorBlock === null || EditorBlock === void 0 ? void 0 : EditorBlock.preview(block.data));
    })));
});
