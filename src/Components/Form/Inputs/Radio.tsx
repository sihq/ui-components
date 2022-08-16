import React, { ReactNode, useContext } from 'react';

import Conditional from '../../Conditional';
import { FieldContext } from '../../../Contexts';
import InlineErrors from '../shared/InlineErrors';
import Label from '../shared/Label';
import PrivacyBarrier from '../shared/PrivacyBarrier';

// @ts-ignore
interface RadioProperties extends React.InputHTMLAttributes<HTMLInputElement> {
    id?: string;
    label?: string;
    name: string;
    type: string;
    defer?: boolean;
    prepend?: ReactNode;
    append?: ReactNode;
    size?: string;
    variant?: string;
    value?: string;
}

export default (props: RadioProperties): JSX.Element => {
    const context = useContext(FieldContext);

    const { id, name, label, append, prepend, disabled, placeholder, value } = props;

    return (
        <>
            <span
                data-input="radio"
                className="flex relative flex-col text-gray-600 focus-within:text-blue-500 -ml-1 -mr-2 rounded p-1 pr-2 hover:text-blue-500 cursor-pointer text-xs group"
            >
                <label data-input="toggle" className="flex justify-start items-center relative">
                    {prepend}
                    <div className="relative flex-shrink-0 rounded-full w-7 h-4 transition duration-200 ease-linear">
                        <input
                            type="radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                            ref={context.ref}
                            id={`${id ?? name ?? label}`}
                            {...{ name, disabled, placeholder, value }}
                            checked={context.value === value}
                            onChange={({ target: { value } }) => context.onChange(value)}
                        />
                    </div>
                    <Conditional expresion={!!label}>
                        <div className="select-none flex flex-col">
                            <Label />
                        </div>
                    </Conditional>
                    {append}
                </label>
                <PrivacyBarrier />
                <InlineErrors />
            </span>
        </>
    );
};
