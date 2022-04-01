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
    name: 'testimonial-type-b',
    fields: [
        { type: 'textarea', name: 'testimonial', label: 'Testimonial:' },
        { type: 'text', name: 'author', label: 'Author:' },
        { type: 'text', name: 'title', label: 'title:' },
    ],
    icon: function () { return React.createElement(Icon, null); },
    preview: function (data) { return React.createElement(Preview, __assign({}, data)); },
};
