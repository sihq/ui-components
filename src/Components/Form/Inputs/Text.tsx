import React, { useContext } from 'react';

import Append from '../shared/Append';
import { FieldContext } from '../../../Contexts';
import InlineErrors from '../shared/InlineErrors';
import Label from '../shared/Label';
import Prepend from '../shared/Prepend';
import PrivacyBarrier from '../shared/PrivacyBarrier';
import { TypeInput } from '../../../Types';
import Wrapper from '../shared/Wrapper';

interface TextProperties extends TypeInput {
    label?: string;
    className?: string;
}

export default (props: TextProperties): JSX.Element => {
    const { id, type, name, label, disabled, placeholder, className } = props;
    const { onChange, onKeyDown, onKeyUp, onFocus } = props;

    const context = useContext(FieldContext);

    return (
        <>
            <Label />
            <Wrapper>
                <Prepend {...props} />
                <input
                    ref={context.ref}
                    id={`${id ?? name ?? label}`}
                    {...{ type, name, disabled, placeholder, onChange, onKeyDown, onKeyUp, onFocus }}
                    value={context.value}
                    onChange={({ target: { value } }) => context.onChange(value)}
                    className={`outline-none bg-transparent flex-1 w-full ${className}`}
                />
                <Append {...props} />
                <PrivacyBarrier />
            </Wrapper>
            <InlineErrors />
        </>
    );
};
