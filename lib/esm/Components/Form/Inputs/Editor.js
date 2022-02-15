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
import AddBlock from '../../Editor/AddBlock';
import BlockProperties from '../../Editor/BlockProperties';
import Context from '../../Editor/Context';
import { ControllerContext } from '@sihq/reactive';
import EditorBlock from '../../Editor/EditorBlock';
import InlineErrors from '../InlineErrors';
import Label from '../Label';
import PrivacyBarrier from '../PrivacyBarrier';
var VARIANTS = {
    base: ' flex flex-1 relative border-2 outline-none focus-within:ring-2 focus-within:shadow-inner focus-within:ring-opacity-20 transition-all ease-in-out duration-200 flex-1',
    basic: ' bg-white border-gray-300 focus-within:border-blue-400 focus-within:ring-blue-400 rounded',
    opaque: ' focus-within:bg-white bg-gray-200 border-gray-200 focus-within:border-blue-400 focus-within:ring-blue-400 rounded',
    'opaque-rounded': ' focus-within:bg-white bg-gray-200 border-gray-200 focus-within:border-blue-400 focus-within:ring-blue-400 rounded-full',
};
export default React.forwardRef(function (props) {
    var _a = useContext(ControllerContext), value = _a.value, setValue = _a.setValue;
    var _b = useState(null), selected = _b[0], setSelected = _b[1];
    var name = props.name, label = props.label, _c = props.variant, variant = _c === void 0 ? 'basic' : _c;
    var className = Object.entries(VARIANTS)
        .filter(function (i) { return ['base', variant].includes(i[0]); })
        .reduce(function (a, b) { return __spreadArray(__spreadArray([], a, true), [b[1]], false); }, [])
        .join('');
    var blocks = value(name) ? value(name) : [];
    function move(from, to) {
        var reorder = __spreadArray([], blocks, true);
        var f = reorder.splice(from, 1)[0];
        reorder.splice(to, 0, f);
        setValue(name, reorder);
    }
    function remove(from) {
        var reorder = __spreadArray([], blocks, true);
        reorder.splice(from, 1)[0];
        setValue(name, reorder);
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(Context.Provider, { value: { selected: selected } },
            React.createElement(Label, null, label),
            React.createElement("span", { className: "".concat(className, " h-full overflow-hidden") },
                React.createElement("div", { className: "flex-1 flex flex-col p-10 space-y-2 overflow-auto scrollbar" },
                    blocks.map(function (block, key) {
                        return (React.createElement(EditorBlock, { key: key, block: block, select: function () { return setSelected(block.id); }, moveDown: function () { return move(key, key + 1); }, moveUp: function () { return move(key, key - 1); }, remove: function () { return remove(key); } }));
                    }),
                    React.createElement("div", { className: "mt-auto" },
                        React.createElement(AddBlock, __assign({}, props)))),
                React.createElement(BlockProperties, __assign({}, props)),
                React.createElement(PrivacyBarrier, null)),
            React.createElement(InlineErrors, __assign({}, props)))));
});
