import React, { useContext } from 'react';

import { COUNTRY_CODES } from './CountryCodes';
import { FieldContext } from '../../../Contexts';
import Select from '../InputSelect/InputSelect';
import Store from '../shared/Store';

export interface PrependProps {
    onChange: (value: any) => void;
}
export default function Prepend(props: PrependProps): JSX.Element | null {
    const context = useContext(FieldContext);

    const options = Object.entries(COUNTRY_CODES).map((country) => {
        const name = country[0];
        const code = country[1].code;
        return { value: name, text: `${name} +${code}` };
    });

    return (
        <span className=" flex flex-shrink-0 w-24 mr-2 h-4  overflow-hidden">
            <FieldContext.Provider value={{ name: `country`, type: 'select', variant: 'opaque', size: 'xs' }}>
                <Store onChange={(value) => props.onChange(value)}>
                    <Select {...{ name: 'country', type: 'select' }} options={options} />
                    <pre>{JSON.stringify(context.value)}</pre>
                </Store>
            </FieldContext.Provider>
        </span>
    );
}
