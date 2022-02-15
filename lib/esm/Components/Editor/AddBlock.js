var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useContext, useState } from 'react';
import Blocks from './Blocks';
import Conditional from '../Conditional';
import { ControllerContext } from '../../Providers/Controller';
import { PlusCircleIcon } from '@heroicons/react/outline';
import { v4 as uuidv4 } from 'uuid';
var AddBlock = function (_a) {
    var name = _a.name;
    var _b = useState(false), open = _b[0], toggle = _b[1];
    var _c = useContext(ControllerContext), value = _c.value, setValue = _c.setValue;
    var blocks = value(name) ? value(name) : [];
    return (React.createElement("div", { className: "flex items-center justify-center relative" },
        React.createElement(Conditional, { expresion: open },
            React.createElement("div", { className: "absolute mb-10 bottom-0 grid grid-cols-3 gap-2 w-96 transform -translate-x-1/2 left-1/2  bg-white rounded-md shadow-xl z-30 p-4 border border-gray-100" }, Blocks.map(function (editor_block, key) {
                return (React.createElement("div", { key: key, onClick: function () {
                        setValue(name, __spreadArray(__spreadArray([], blocks, true), [{ id: uuidv4(), type: editor_block.name }], false));
                        toggle(false);
                    }, className: "border text-xs border-gray-200 hover:border-blue-500 hover:text-blue-500 rounded p-2 flex flex-col items-center justify-center" },
                    editor_block.icon ? editor_block.icon() : null,
                    editor_block.name));
            }))),
        React.createElement("button", { type: "button", onClick: function () { return toggle(!open); }, className: "text-gray-400 hover:text-blue-500 p-2 mt-5" },
            React.createElement(PlusCircleIcon, { className: "h-10 w-10" }))));
};
export default AddBlock;