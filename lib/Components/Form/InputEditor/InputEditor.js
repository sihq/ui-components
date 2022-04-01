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
import EditorBlock from '../../Editor/EditorBlock';
import { FieldContext } from '../../../Contexts';
import InlineErrors from '../shared/InlineErrors';
import Label from '../shared/Label';
import PrivacyBarrier from '../shared/PrivacyBarrier';
import Wrapper from '../shared/Wrapper';
export default (function (props) {
    var context = useContext(FieldContext);
    var _a = useState(null), selected = _a[0], setSelected = _a[1];
    var blocks = context.value ? context.value : [];
    function move(from, to) {
        var reorder = __spreadArray([], blocks, true);
        var f = reorder.splice(from, 1)[0];
        reorder.splice(to, 0, f);
        context.onChange(reorder);
    }
    function remove(from) {
        var reorder = __spreadArray([], blocks, true);
        reorder.splice(from, 1)[0];
        context.onChange(reorder);
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(Context.Provider, { value: { selected: selected } },
            React.createElement(Label, null),
            React.createElement(Wrapper, null,
                React.createElement("span", { className: "flex w-full h-full overflow-hidden" },
                    React.createElement("div", { className: "flex-1 flex flex-col p-10 space-y-2 overflow-auto scrollbar" },
                        blocks.map(function (block, key) {
                            return (React.createElement(EditorBlock, { key: key, block: block, select: function () { return setSelected(block.id); }, moveDown: function () { return move(key, key + 1); }, moveUp: function () { return move(key, key - 1); }, remove: function () { return remove(key); } }));
                        }),
                        React.createElement("div", { className: "mt-auto" },
                            React.createElement(AddBlock, __assign({}, props)))),
                    React.createElement(BlockProperties, __assign({}, props)),
                    React.createElement(PrivacyBarrier, null))),
            React.createElement(InlineErrors, null))));
});
