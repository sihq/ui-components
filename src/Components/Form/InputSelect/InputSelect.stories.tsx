import { Field, FieldProperties } from '../Field';

import React from 'react';
import { argTypes } from '../../../Storybook/Common';

export const InputSelect = (args: FieldProperties) => <Field {...args} type="select" />;
InputSelect.argTypes = {
    label: {
        defaultValue: 'Select:',
        control: { type: 'text' },
    },

    name: {
        defaultValue: 'select',
        control: { type: 'text' },
    },
    options: {
        defaultValue: [
            { value: 'first', text: 'first' },
            { value: 'second', text: 'second' },
        ],
        control: { type: 'array' },
    },

    ...{ size: argTypes.size },
    ...{ variant: argTypes.variant },
};
InputSelect.storyName = 'Select';
