import { Field, FieldProperties } from '../Field';

import React from 'react';
import { argTypes } from '../../../Storybook/Common';

export const InputSearch = (args: FieldProperties) => <Field {...args} type="search" />;
InputSearch.argTypes = {
    label: {
        defaultValue: 'Search:',
        control: { type: 'text' },
    },

    name: {
        defaultValue: 'search',
        control: { type: 'text' },
    },
    ...{ size: argTypes.size },
    ...{ variant: argTypes.variant },
};
InputSearch.storyName = 'Search';
