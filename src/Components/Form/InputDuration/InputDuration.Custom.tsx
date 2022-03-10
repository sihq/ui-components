import React, { useContext } from 'react';

import CurrencyFormat from 'react-currency-format';
import { FieldContext } from '../../../Contexts';
import Prepend from './InputDuration.Prepend';
import Store from '../shared/Store';
import Text from '../Inputs/Text';

export default function Custom(): JSX.Element | null {
    const context = useContext(FieldContext);

    return (
        <CurrencyFormat
            customInput={(p) => (
                <Store
                    onChange={(value: any) => {
                        console.log(value);
                        p.onChange({ target: { value, focus: () => context.ref.current.focus() }, persist: () => {} });
                    }}
                >
                    <Text {...p} prepend={<Prepend />} />
                    {context.value}
                </Store>
            )}
            format="#.##"
            decimalScale={2}
            fixedDecimalScale
            onChange={(value: any) => {
                context.onChange(value.target.value);
            }}
        />
    );
}
