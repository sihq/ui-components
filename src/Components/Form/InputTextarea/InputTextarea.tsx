import React, { ReactNode, useContext } from 'react';

import Append from '../shared/Append';
import { FieldContext } from '../../../Contexts';
import InlineErrors from '../shared/InlineErrors';
import Label from '../shared/Label';
import Prepend from '../shared/Prepend';
import PrivacyBarrier from '../shared/PrivacyBarrier';
import Wrapper from '../shared/Wrapper';

// @ts-ignore
export interface TextProperties extends React.InputHTMLAttributes<HTMLTextAreaElement> {
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

export default (props: TextProperties): JSX.Element => {
    const {
        id,
        type,
        name,
        label,
        disabled,

        placeholder,

        onChange,
        onKeyDown,
        onKeyUp,
        onFocus,
    } = props;

    const context = useContext(FieldContext);

    return (
        <>
            <Label />
            <Wrapper>
                <Prepend />
                <textarea
                    id={`${id ?? name ?? label}`}
                    {...{ type, name, disabled, placeholder, onChange, onKeyDown, onKeyUp, onFocus }}
                    ref={context.ref}
                    value={context.value}
                    onChange={({ target: { value } }) => context.onChange(value)}
                    className="outline-none bg-transparent flex-1 w-full"
                    style={{ minHeight: 100 }}
                />
                <Append />
                <PrivacyBarrier />
            </Wrapper>
            <InlineErrors />
        </>
    );
};
