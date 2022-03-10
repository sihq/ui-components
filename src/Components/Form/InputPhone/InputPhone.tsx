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
            <FieldContext.Provider value={{ ...context, name: `${context.name}.number` }}>
                <Store>
                    <Text
                        {...props}
                        type="text"
                        prepend={
                            <FieldContext.Provider value={{ ...context, name: `${context.name}.country` }}>
                                <Store>
                                    <Prepend />
                                </Store>
                            </FieldContext.Provider>
                        }
                    />
                </Store>
            </FieldContext.Provider>
        </>
    );
};
