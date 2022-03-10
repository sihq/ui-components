// Field.stories.ts|tsx

import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import { BrowserRouter } from 'react-router-dom';
import Field from './Field';
import { InputDuration } from './InputDuration/InputDuration.stories';
import { InputPassword } from './InputPassword/InputPassword.stories';
import { InputPhone } from './InputPhone/InputPhone.stories';
import { InputSearch } from './InputSearch/InputSearch.stories';
import { InputSelect } from './InputSelect/InputSelect.stories';
import { InputTimezone } from './InputTimezone/InputTimezone.stories';
import { ReactiveControllerContext } from '../../Contexts';

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
                <div style={{ minWidth: 300 }}>
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

export const Sample = () => {
    const [state, setState] = useState({
        user: {
            first_name: 'test',
            last_name: 'martin',
            phone: {
                number: '55656',
            },
        },
    });
    return (
        <ReactiveControllerContext.Provider value={{ update: setState, state }}>
            <div className="space-y-4" style={{ width: 500 }}>
                <div className="space-x-4 flex">
                    <Field name="user.first_name" type="text" label="First name:" />
                    <Field name="user.last_name" type="text" label="Last name:" />
                </div>
                <Field name="user.phone" type="phone" label="Phone:" />
                <pre className="w-full border text-xs border-gray-300 rounded p-1 overflow-auto mt-5">
                    {JSON.stringify(state, null, 2)}
                </pre>
            </div>
        </ReactiveControllerContext.Provider>
    );
};
