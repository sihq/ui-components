import { ArrowDownIcon, ArrowUpIcon, TrashIcon } from '@heroicons/react/solid';
import React, { useContext } from 'react';
import Conditional from '../Conditional';
import Context from './Context';
import Blocks from './Blocks';
var EditorBlock = function (props) {
    var block = props.block, select = props.select, remove = props.remove, moveDown = props.moveDown, moveUp = props.moveUp;
    var selected = useContext(Context).selected;
    var EditorBlock = Blocks.find(function (_a) {
        var name = _a.name;
        return name === (block === null || block === void 0 ? void 0 : block.type);
    });
    return (React.createElement("button", { type: "button", onClick: select, className: "border  relative  rounded p-2 ".concat(selected === block.id
            ? 'border-gray-700 ring-2 ring-gray-300 ring-opacity-25 '
            : 'border-dashed border-white hover:border-gray-400') },
        React.createElement(Conditional, { expresion: selected === block.id },
            React.createElement("div", { className: "flex space-x-2 absolute top-1 right-1" },
                React.createElement("span", { onClick: remove, className: "text-gray-600 rounded-full bg-gray-200 p-1 inline-flex hover:bg-gray-600 hover:text-white" },
                    React.createElement(TrashIcon, { className: "h-3 w-3" })),
                React.createElement("span", { className: " inline-flex space-x-1 rounded-full bg-gray-200" },
                    React.createElement("span", { onClick: moveUp, className: "text-gray-600 rounded-full bg-gray-200 p-1 inline-flex hover:bg-gray-600 hover:text-white" },
                        React.createElement(ArrowUpIcon, { className: "h-3 w-3" })),
                    React.createElement("span", { className: "block  w-px bg-gray-400 mt-1 mb-1" }),
                    React.createElement("span", { onClick: moveDown, className: "text-gray-600 rounded-full bg-gray-200 p-1 inline-flex hover:bg-gray-600 hover:text-white" },
                        React.createElement(ArrowDownIcon, { className: "h-3 w-3" }))))), EditorBlock === null || EditorBlock === void 0 ? void 0 :
        EditorBlock.preview(block.data)));
};
export default EditorBlock;
