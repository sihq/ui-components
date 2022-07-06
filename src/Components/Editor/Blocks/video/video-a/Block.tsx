import Icon from './Icon';
import Preview from './Preview';
import React from 'react';
import { TypeEditorBlock } from '../../../Types';
import { TypeField } from '../../../../Form/Types';

export interface Data {
    testimonial: string;
    video: string;
    title: string;
}

export default {
    name: 'video',
    fields: [
        { type: 'text', name: 'video', label: 'Video Url:' } as TypeField,
        { type: 'text', name: 'title', label: 'title:' } as TypeField,
    ],
    icon: () => <Icon />,
    preview: (data: Data) => <Preview {...data} />,
} as TypeEditorBlock;
