import React, { useContext } from 'react';
import { TypeInput, TypeOptions } from '../../../Types';

import Append from '../shared/Append';
import { FieldContext } from '../../../Contexts';
import InlineErrors from '../shared/InlineErrors';
import Label from '../shared/Label';
import Prepend from '../shared/Prepend';
import PrivacyBarrier from '../shared/PrivacyBarrier';
import { SelectorIcon } from '@heroicons/react/solid';
import Wrapper from '../shared/Wrapper';

interface SelectProps extends TypeInput {
    label?: string;
    options?: TypeOptions;
}

export default (props: SelectProps): JSX.Element => {
    const { id, type, name, label, disabled, placeholder, options } = props;
    const { onChange, onKeyDown, onKeyUp, onFocus } = props;
    const context = useContext(FieldContext);
    return (
        <>
            <Label />
            <Wrapper>
                <Prepend {...props} />
                <select
                    ref={context.ref}
                    id={`${id ?? name ?? label}`}
                    {...{ type, name, disabled, placeholder, onChange, onKeyDown, onKeyUp, onFocus }}
                    value={context.value ?? ''}
                    onChange={({ target: { value } }) => context.onChange(value)}
                    className="outline-none bg-transparent appearance-none flex-1 w-full"
                >
                    {(options ?? []).map(({ text, value }) => {
                        return (
                            <option key={`${value}`} value={value}>
                                {text}
                            </option>
                        );
                    })}
                </select>
                <span className="h-4 w-4 flex relative -mr-1 text-gray-600">
                    <SelectorIcon />
                </span>
                <Append {...props} />
                <PrivacyBarrier />
            </Wrapper>
            <InlineErrors />
        </>
    );
};
