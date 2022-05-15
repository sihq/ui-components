import React, { ReactNode, useContext } from 'react';

import Conditional from '../../Conditional';
import { FieldContext } from '../../../Contexts';
import InlineErrors from '../shared/InlineErrors';
import Label from '../shared/Label';
import PrivacyBarrier from '../shared/PrivacyBarrier';

// @ts-ignore
interface ToggleProperties extends React.InputHTMLAttributes<HTMLInputElement> {
    id?: string;
    label?: string;
    name: string;
    type: string;
    defer?: boolean;
    prepend?: ReactNode;
    append?: ReactNode;
    size?: string;
    variant?: string;
}

export default (props: ToggleProperties): JSX.Element => {
    const context = useContext(FieldContext);

    const { id, name, label, append, prepend, disabled, placeholder } = props;

    return (
        <>
            <span
                data-input="checkbox"
                className="flex relative flex-col text-gray-600 focus-within:text-blue-500 -ml-1 -mr-2 rounded p-1 pr-2 hover:text-blue-500 cursor-pointer text-xs group"
            >
                <label data-input="toggle" className="flex justify-start items-center relative">
                    {prepend}
                    <div className="relative flex-shrink-0 rounded-full w-7 h-4 transition duration-200 ease-linear">
                        <input
                            type="checkbox"
                            className="opacity-0 absolute inset-0 w-full h-full z-40"
                            ref={context.ref}
                            id={`${id ?? name ?? label}`}
                            {...{ name, disabled, placeholder }}
                            checked={context.value}
                            onChange={() => context.onChange(context.value ? false : true)}
                        />
                        <span className="checked opacity-0 bg-green-500 absolute z-10 left-0 w-full h-full rounded-full transition duration-100 ease-linear"></span>
                        <span className="bg-gray-400 absolute left-0 w-full h-full rounded-full"></span>
                        <span className="checked-peg absolute z-20 left-0 bg-white w-3 h-3 m-0.5 rounded-full transition transform duration-100 ease-linear cursor-pointer translate-x-0"></span>
                    </div>
                    <Conditional expresion={!!label}>
                        <div className="select-none flex flex-col pl-2">
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
