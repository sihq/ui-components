import { Field, FieldProperties } from '../Field';

import React from 'react';
import { argTypes } from '../../../Storybook/Common';

export const InputPassword = (args: FieldProperties) => <Field {...args} type="password" />;
InputPassword.argTypes = {
    label: {
        defaultValue: 'Password:',
        control: { type: 'text' },
    },

    name: {
        defaultValue: 'user.password',
        control: { type: 'text' },
    },
    ...{ size: argTypes.size },
    ...{ variant: argTypes.variant },
};
InputPassword.storyName = 'Password';
