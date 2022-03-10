import { Field, FieldProperties } from '../Field';

import React from 'react';
import { argTypes } from '../../../Storybook/Common';

export const InputTextarea = (args: FieldProperties) => <Field {...args} type="textarea" />;
InputTextarea.argTypes = {
    label: {
        defaultValue: 'Textarea:',
        control: { type: 'text' },
    },

    name: {
        defaultValue: 'user.profile',
        control: { type: 'text' },
    },
    ...{ size: argTypes.size },
    ...{ variant: argTypes.variant },
};
InputTextarea.storyName = 'Textarea';
