import React, { useContext } from 'react';

import { COUNTRY_CODES } from './CountryCodes';
import { FieldContext } from '../../../Contexts';
import Select from '../InputSelect/InputSelect';

export default function Prepend(): JSX.Element | null {
    const context = useContext(FieldContext);

    const options = Object.entries(COUNTRY_CODES).map((country) => {
        const name = country[0];
        const code = country[1].code;
        return { value: name, text: `${name} +${code}` };
    });

    return (
        <span className=" flex flex-shrink-0 w-24 mr-2 h-4  overflow-hidden">
            <FieldContext.Provider value={{ ...context, label: null, type: 'select', variant: 'opaque', size: 'xs' }}>
                <Select {...{ name: 'country', type: 'select' }} options={options} />
            </FieldContext.Provider>
        </span>
    );
}
