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
import React, { useContext, useState } from 'react';
import Blocks from './Blocks';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Context from './Context';
import Field from '../Form/Field';
import { FieldContext } from '../../Contexts';
import _ from 'lodash';
var Wrapper = function (_a) {
    var children = _a.children, group = _a.group, activeGroup = _a.activeGroup, groupKey = _a.groupKey, setActiveGroup = _a.setActiveGroup;
    return group === 'undefined' ? (children) : (React.createElement("div", { key: group, className: "border-b border-gray-300 -mx-5 flex flex-col ".concat(groupKey === 0 ? 'border-t' : '', " ").concat(activeGroup === group ? 'bg-gray-100' : ' hover:bg-gray-100 cursor-pointer') },
        React.createElement("button", { type: "button", onClick: function () { return setActiveGroup(activeGroup === group ? '' : group); }, className: "text-xs text-gray-600 font-bold px-5 pr-3 p-2 flex items-center flex-1" },
            group,
            React.createElement("span", { className: "ml-auto flex" },
                React.createElement(ChevronDownIcon, { className: "h-5 w-5 transition ease duration-300 transform  ".concat(activeGroup === group ? ' rotate-180' : '  rotate-0') }))),
        React.createElement("div", { className: "p-5 ".concat(activeGroup === group ? ' block' : '  hidden') }, children)));
};
var BlockProperties = function (_a) {
    var name = _a.name;
    var selected = useContext(Context).selected;
    var context = useContext(FieldContext);
    var blocks = context.value ? context.value : [];
    var block = blocks.find(function (_a) {
        var id = _a.id;
        return id === selected;
    });
    var index = blocks.findIndex(function (_a) {
        var id = _a.id;
        return id === selected;
    });
    var EditorBlock = Blocks.find(function (_a) {
        var name = _a.name;
        return name === (block === null || block === void 0 ? void 0 : block.type);
    });
    var fieldGroups = _.groupBy(EditorBlock === null || EditorBlock === void 0 ? void 0 : EditorBlock.fields, function (e) { return e.group; });
    var _b = useState(), activeGroup = _b[0], setActiveGroup = _b[1];
    return (React.createElement("div", { className: "p-4 flex" },
        React.createElement("div", { className: "bg-gray-50 w-72 border rounded border-gray-300 p-3 overflow-y-hidden  shadow scrollbar" },
            React.createElement("div", { className: "text-xs text-gray-600 tracking-wider flex-grow font-bold uppercase mt-2 mb-5" }, EditorBlock === null || EditorBlock === void 0 ? void 0 :
                EditorBlock.name,
                (EditorBlock === null || EditorBlock === void 0 ? void 0 : EditorBlock.description) ? (React.createElement("div", { className: "text-xs text-gray-400 tracking-wider font-normal normal-case" }, EditorBlock === null || EditorBlock === void 0 ? void 0 : EditorBlock.description)) : null),
            React.createElement("div", { className: "" }, Object.keys(fieldGroups).map(function (group, groupKey) {
                return (React.createElement(Wrapper, __assign({}, { groupKey: groupKey, activeGroup: activeGroup, setActiveGroup: setActiveGroup, group: group }),
                    React.createElement("div", { className: "space-y-2" }, fieldGroups[group].map(function (field, key) {
                        return (React.createElement("div", { key: key },
                            React.createElement(Field, __assign({}, field, { name: "".concat(name, ".").concat(index, ".data.").concat(field.name) }))));
                    }))));
            })))));
};
export default BlockProperties;
