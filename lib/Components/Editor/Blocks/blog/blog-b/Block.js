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
    name: 'blog-type-b',
    fields: [
        { type: 'text', name: 'one.title', label: 'Title:', group: 'First panel' },
        { type: 'text', name: 'one.subtitle', label: 'Subtitle:', group: 'First panel' },
        { type: 'tinymce', name: 'one.description', label: 'Description:', group: 'First panel' },
        { type: 'text', name: 'two.title', label: 'Title:', group: 'Second panel' },
        { type: 'text', name: 'two.subtitle', label: 'Subtitle:', group: 'Second panel' },
        { type: 'tinymce', name: 'two.description', label: 'Description:', group: 'Second panel' },
        { type: 'text', name: 'three.title', label: 'Title:', group: 'Third panel' },
        { type: 'text', name: 'three.subtitle', label: 'Subtitle:', group: 'Third panel' },
        { type: 'tinymce', name: 'three.description', label: 'Description:', group: 'Third panel' },
    ],
    icon: function () { return React.createElement(Icon, null); },
    preview: function (data) { return React.createElement(Preview, __assign({}, data)); },
};
