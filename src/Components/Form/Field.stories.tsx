// Field.stories.ts|tsx

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';
import Field from './Field';
import { InputPassword } from './InputPassword/InputPassword.stories';
import { InputSelect } from './InputSelect/InputSelect.stories';
import React from 'react';

export const Password = InputPassword;
export const Select = InputSelect;

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
export const Phone: ComponentStory<typeof Field> = () => <Field name="" type="phone" label="Phone:" />;
export const DateOfBirth: ComponentStory<typeof Field> = () => (
    <Field name="" type="date-of-birth" label="Date Of Birth:" />
);
export const Duration: ComponentStory<typeof Field> = () => <Field name="" type="duration" label="Duration:" />;
export const Image: ComponentStory<typeof Field> = () => <Field name="" type="image" label="Image:" />;
export const Editor: ComponentStory<typeof Field> = () => <Field name="" type="editor" label="Editor:" />;

export const Search: ComponentStory<typeof Field> = () => <Field name="" type="search" label="Search:" />;
export const Timezone: ComponentStory<typeof Field> = () => <Field name="" type="timezone" label="Timezone:" />;
export const Toggle: ComponentStory<typeof Field> = () => <Field name="" type="toggle" label="Toggle:" />;
export const ToggleButton: ComponentStory<typeof Field> = () => (
    <Field name="" type="toggle-button" label="Toggle Button:" />
);

export const Transfer: ComponentStory<typeof Field> = () => <Field name="" type="transfer" label="Transfer:" />;
