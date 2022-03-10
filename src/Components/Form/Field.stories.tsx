// Field.stories.ts|tsx

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';
import Field from './Field';
import { InputDuration } from './InputDuration/InputDuration.stories';
import { InputPassword } from './InputPassword/InputPassword.stories';
import { InputPhone } from './InputPhone/InputPhone.stories';
import { InputSearch } from './InputSearch/InputSearch.stories';
import { InputSelect } from './InputSelect/InputSelect.stories';
import { InputTimezone } from './InputTimezone/InputTimezone.stories';
import React from 'react';

export const Password = InputPassword;
export const Select = InputSelect;
export const Search = InputSearch;
export const Timezone = InputTimezone;
export const Duration = InputDuration;
export const Phone = InputPhone;

export default {
    title: 'Field',
    component: Field,
    decorators: [
        (Story) => (
            <BrowserRouter>
                <div className="w-64">
                    <Story />
                </div>
            </BrowserRouter>
        ),
    ],
} as ComponentMeta<typeof Field>;

export const Text: ComponentStory<typeof Field> = () => <Field name="" type="text" label="Text:" />;
export const Textarea: ComponentStory<typeof Field> = () => <Field name="" type="textarea" label="Textarea:" />;

export const Currency: ComponentStory<typeof Field> = () => <Field name="" type="currency" label="Currency:" />;
export const Address: ComponentStory<typeof Field> = () => <Field name="" type="address" label="Address:" />;

export const DateOfBirth: ComponentStory<typeof Field> = () => (
    <Field name="" type="date-of-birth" label="Date Of Birth:" />
);

export const Image: ComponentStory<typeof Field> = () => <Field name="" type="image" label="Image:" />;
export const Editor: ComponentStory<typeof Field> = () => <Field name="" type="editor" label="Editor:" />;

export const Toggle: ComponentStory<typeof Field> = () => <Field name="" type="toggle" label="Toggle:" />;
export const ToggleButton: ComponentStory<typeof Field> = () => (
    <Field name="" type="toggle-button" label="Toggle Button:" />
);

export const Transfer: ComponentStory<typeof Field> = () => <Field name="" type="transfer" label="Transfer:" />;
