import { Field, FieldProperties } from '../Field';

import React from 'react';
import { argTypes } from '../../../Storybook/Common';

export const InputNumber = (args: FieldProperties) => <Field {...args} type="number" />;
InputNumber.argTypes = {
    label: {
        defaultValue: 'Number:',
        control: { type: 'text' },
    },

    name: {
        defaultValue: 'number',
        control: { type: 'text' },
    },
    ...{ size: argTypes.size },
    ...{ variant: argTypes.variant },
};
InputNumber.storyName = 'Number';
