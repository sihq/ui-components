import { Field, FieldProperties } from '../Field';

import React from 'react';
import { argTypes } from '../../../Storybook/Common';

export const InputDuration = (args: FieldProperties) => <Field {...args} type="duration" />;
InputDuration.argTypes = {
    label: {
        defaultValue: 'Duration:',
        control: { type: 'text' },
    },

    name: {
        defaultValue: 'duration',
        control: { type: 'text' },
    },
    ...{ size: argTypes.size },
    ...{ variant: argTypes.variant },
};
InputDuration.storyName = 'Duration';
