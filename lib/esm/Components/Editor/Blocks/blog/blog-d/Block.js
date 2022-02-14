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
import Icon from './Icon';
import Preview from './Preview';
import React from 'react';
export default {
    name: 'blog-type-d',
    description: 'Two column blog post display.',
    fields: [
        { type: 'text', name: 'one.title', label: 'Title:', group: 'First panel' },
        { type: 'textarea', name: 'one.description', label: 'Description:', group: 'First panel' },
        { type: 'text', name: 'two.title', label: 'Title:', group: 'Second panel' },
        { type: 'textarea', name: 'two.description', label: 'Description:', group: 'Second panel' },
        { type: 'text', name: 'three.title', label: 'Title:', group: 'Third panel' },
        { type: 'textarea', name: 'three.description', label: 'Description:', group: 'Third panel' },
    ],
    icon: function () { return React.createElement(Icon, null); },
    preview: function (data) { return React.createElement(Preview, __assign({}, data)); },
};
