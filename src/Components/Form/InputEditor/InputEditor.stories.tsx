import { Field, FieldProperties } from '../Field';

import React from 'react';
import { argTypes } from '../../../Storybook/Common';

export const InputEditor = (args: FieldProperties) => (
    <div className="flex" style={{ width: 1000, height: 500 }}>
        <Field {...args} type="editor" />
    </div>
);
InputEditor.argTypes = {
    label: {
        defaultValue: 'Editor:',
        control: { type: 'text' },
    },

    name: {
        defaultValue: 'editor',
        control: { type: 'text' },
    },
    ...{ size: argTypes.size },
    ...{ variant: argTypes.variant },
};
InputEditor.storyName = 'Editor';
