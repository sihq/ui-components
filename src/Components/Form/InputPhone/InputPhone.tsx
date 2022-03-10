import React, { useContext } from 'react';

import { FieldContext } from '../../../Contexts';
import Prepend from './InputPhone.Prepend';
import Store from '../shared/Store';
import Text from '../Inputs/Text';
import { TypeInput } from '../../../Types';

export interface PhoneProps extends TypeInput {}

export default (props: PhoneProps): JSX.Element => {
    const context = useContext(FieldContext);
    return (
        <>
            <Store onChange={(value) => context.onChange({ ...context.value, phone: value })}>
                <Text
                    {...props}
                    type="text"
                    prepend={<Prepend onChange={(value) => context.onChange({ ...context.value, country: value })} />}
                />
            </Store>
            <pre>{JSON.stringify(context.value)}</pre>
        </>
    );
};
