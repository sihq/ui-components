import { Field, FieldProperties } from '../Field';

import React from 'react';
import { argTypes } from '../../../Storybook/Common';

export const InputTimezone = (args: FieldProperties) => <Field {...args} type="timezone" />;
InputTimezone.argTypes = {
    label: {
        defaultValue: 'Timezone:',
        control: { type: 'text' },
    },

    name: {
        defaultValue: 'timezone',
        control: { type: 'text' },
    },
    ...{ size: argTypes.size },
    ...{ variant: argTypes.variant },
};
InputTimezone.storyName = 'Timezone';
