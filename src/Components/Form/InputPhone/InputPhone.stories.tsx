import { Field, FieldProperties } from '../Field';

import React from 'react';
import { argTypes } from '../../../Storybook/Common';

export const InputPhone = (args: FieldProperties) => <Field {...args} type="phone" />;
InputPhone.argTypes = {
    label: {
        defaultValue: 'Phone:',
        control: { type: 'text' },
    },

    name: {
        defaultValue: 'user.phone',
        control: { type: 'text' },
    },
    ...{ size: argTypes.size },
    ...{ variant: argTypes.variant },
};
InputPhone.storyName = 'Phone';
