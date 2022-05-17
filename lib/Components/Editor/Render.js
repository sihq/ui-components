import React, { useContext } from 'react';
import Blocks from './Blocks';
import { ReactiveControllerContext } from '../../Contexts';
import _ from 'lodash';
export var Render = function (props) {
    var state = useContext(ReactiveControllerContext).state;
    var blocks = _.get(state, props.name);
    return (React.createElement(React.Fragment, null, (blocks !== null && blocks !== void 0 ? blocks : []).map(function (block) {
        var EditorBlock = Blocks.find(function (_a) {
            var name = _a.name;
            return name === (block === null || block === void 0 ? void 0 : block.type);
        });
        return React.createElement(React.Fragment, null, EditorBlock === null || EditorBlock === void 0 ? void 0 : EditorBlock.preview(block.data));
    })));
};
export default Render;
