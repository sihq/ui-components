// Field.stories.ts|tsx

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';
import Field from './Field';
import React from 'react';

export default {
    title: 'Field',
    component: Field,
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
} as ComponentMeta<typeof Field>;

export const Text: ComponentStory<typeof Field> = () => <Field name="" type="text" label="Text:" />;
export const Textarea: ComponentStory<typeof Field> = () => <Field name="" type="textarea" label="Textarea:" />;
export const Select: ComponentStory<typeof Field> = () => (
    <Field
        name=""
        type="select"
        label="Select:"
        options={[
            { value: 'first', text: 'first' },
            { value: 'second', text: 'second' },
        ]}
    />
);
export const Currency: ComponentStory<typeof Field> = () => <Field name="" type="currency" label="Currency:" />;
export const Address: ComponentStory<typeof Field> = () => <Field name="" type="address" label="Address:" />;
export const Phone: ComponentStory<typeof Field> = () => <Field name="" type="phone" label="Phone:" />;
export const DateOfBirth: ComponentStory<typeof Field> = () => (
    <Field name="" type="date-of-birth" label="Date Of Birth:" />
);
export const Duration: ComponentStory<typeof Field> = () => <Field name="" type="duration" label="Duration:" />;
export const Image: ComponentStory<typeof Field> = () => <Field name="" type="image" label="Image:" />;
export const Editor: ComponentStory<typeof Field> = () => <Field name="" type="editor" label="Editor:" />;
export const Password: ComponentStory<typeof Field> = () => <Field name="" type="password" label="Password:" />;
export const Search: ComponentStory<typeof Field> = () => <Field name="" type="search" label="Search:" />;
export const Timezone: ComponentStory<typeof Field> = () => <Field name="" type="timezone" label="Timezone:" />;
export const Toggle: ComponentStory<typeof Field> = () => <Field name="" type="toggle" label="Toggle:" />;
export const ToggleButton: ComponentStory<typeof Field> = () => (
    <Field name="" type="toggle-button" label="Toggle Button:" />
);
