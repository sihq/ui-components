// Field.stories.ts|tsx

import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { SyntheticEvent, useContext, useState } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Button } from '../Button';
import { Controller } from '../..';
import Field from './Field';
import { InputDuration } from './InputDuration/InputDuration.stories';
import { InputEditor } from './InputEditor/InputEditor.stories';
import { InputNumber } from './InputNumber/InputNumber.stories';
import { InputPassword } from './InputPassword/InputPassword.stories';
import { InputPhone } from './InputPhone/InputPhone.stories';
import { InputSearch } from './InputSearch/InputSearch.stories';
import { InputSelect } from './InputSelect/InputSelect.stories';
import { InputTextarea } from './InputTextarea/InputTextarea.stories';
import { InputTinymce } from './InputTinymce/InputTinymce.stories';
import { InputTimezone } from './InputTimezone/InputTimezone.stories';
import { ReactiveControllerContext } from '../../Contexts';
import { withReactive } from '../../Providers/withReactive';

export const Password = InputPassword;
export const Select = InputSelect;
export const Search = InputSearch;
export const Timezone = InputTimezone;
export const Duration = InputDuration;
export const Phone = InputPhone;
export const Editor = InputEditor;
export const Textarea = InputTextarea;
export const Tinymce = InputTinymce;
export const Number = InputNumber;

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

export const Currency: ComponentStory<typeof Field> = () => <Field name="" type="currency" label="Currency:" />;
export const Address: ComponentStory<typeof Field> = () => <Field name="" type="address" label="Address:" />;

export const DateOfBirth: ComponentStory<typeof Field> = () => (
    <Field name="" type="date-of-birth" label="Date Of Birth:" />
);

export const Radio: ComponentStory<typeof Field> = () => <Field name="" type="radio" label="Radio" />;

export const Image: ComponentStory<typeof Field> = () => <Field name="" type="image" label="Image:" />;

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
            <div className="space-y-4" style={{ width: 1000 }}>
                <div className="space-x-4 flex">
                    <Field name="user.first_name" type="text" label="First name:" />
                    <Field name="user.last_name" type="text" label="Last name:" />
                </div>
                <Field name="user.phone" type="phone" label="Phone:" />
                <Field name="user.avatar" type="image" label="Image:" />
                {/* <div className="flex" style={{ height: 500 }}>
                    <Field name="editor" type="editor" label="Editor:" />
                </div> */}
                <pre className="w-full border text-xs border-gray-300 rounded p-1 overflow-auto mt-5">
                    {JSON.stringify(state, null, 2)}
                </pre>

                <Button type="submit">Submit</Button>
            </div>
        </ReactiveControllerContext.Provider>
    );
};

const properties = {
    controller: 'App//Lala',
};

export const SampleController = withReactive(
    Controller(properties, () => {
        const context = useContext(ReactiveControllerContext);

        const { dispatch } = context;

        const onSubmit = (e: SyntheticEvent): void => {
            alert('submit');
            dispatch(`save`);
            e.preventDefault();
        };
        return (
            <form {...{ onSubmit }} className="space-y-4" style={{ width: 1000 }}>
                <div className="space-x-4 flex">
                    <Field name="user.first_name" type="text" label="First name:" />
                    <Field name="user.last_name" type="text" label="Last name:" />
                </div>
                <Field name="user.phone" type="phone" label="Phone:" />
                <Field name="user.avatar" type="image" label="Image:" />
                {/* <div className="flex" style={{ height: 500 }}>
                    <Field name="editor" type="editor" label="Editor:" />
                </div> */}
                <pre className="w-full border text-xs border-gray-300 rounded p-1 overflow-auto mt-5">
                    {JSON.stringify(context, null, 2)}
                </pre>

                <Button type="submit">Submit</Button>
            </form>
        );
    }),
);
