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
import Preview from './Preview';
import React from 'react';
export default {
    name: 'content',
    fields: [{ type: 'textarea', name: 'content', label: 'Content:' }],
    preview: function (data) { return React.createElement(Preview, __assign({}, data)); },
};
