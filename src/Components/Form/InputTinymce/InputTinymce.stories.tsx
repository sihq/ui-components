import { Field, FieldProperties } from '../Field';

import React from 'react';
import { argTypes } from '../../../Storybook/Common';

export const InputTinymce = (args: FieldProperties) => <Field {...args} type="tinymce" />;
InputTinymce.argTypes = {
    label: {
        defaultValue: 'Tinymce:',
        control: { type: 'text' },
    },

    name: {
        defaultValue: 'user.tinymce',
        control: { type: 'text' },
    },
    ...{ size: argTypes.size },
    ...{ variant: argTypes.variant },
};
InputTinymce.storyName = 'Tinymce';
