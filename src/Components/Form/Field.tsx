import React, { useContext } from 'react';
import { TypeIcon, TypeLabel, TypeOptions, TypeSize, TypeVariant } from '../../Types';

import Address from './Inputs/Address';
import Currency from './Inputs/Currency';
import DateOfBirth from './Inputs/DateOfBirth';
import Duration from './InputDuration/InputDuration';
import Editor from './Inputs/Editor';
import { FieldContext } from '../../Contexts';
import Image from './Inputs/Image';
import Password from './InputPassword/InputPassword';
import Phone from './InputPhone/InputPhone';
import Reference from './shared/Reference';
import Search from './InputSearch/InputSearch';
import Select from './InputSelect/InputSelect';
import Store from './shared/Store';
import Text from './Inputs/Text';
import Textarea from './Inputs/Textarea';
import Timezone from './InputTimezone/InputTimezone';
import Toggle from './Inputs/Toggle';
import ToggleButton from './Inputs/ToggleButton';
import Transfer from './Inputs/Transfer';

export interface FieldProperties {
    id?: string;
    label?: TypeLabel;
    name: string;
    type: string;
    defer?: boolean;
    secured?: boolean;
    size?: TypeSize;
    variant?: TypeVariant;
    options?: TypeOptions;
    icon?: TypeIcon;
    description?: string;
}

const Input = (props: FieldProperties): JSX.Element | null => {
    const { type } = props;
    switch (type) {
        case 'text':
            return <Text {...props} />;
        case 'password':
            return <Password {...props} />;
        case 'phone':
            return <Phone {...props} />;
        case 'address':
            return <Address {...props} />;
        case 'search':
            return <Search {...props} />;
        case 'select':
            return <Select {...props} />;
        case 'toggle':
            return <Toggle {...props} />;
        case 'toggle-button':
            return <ToggleButton {...props} />;
        case 'timezone':
            return <Timezone {...props} />;
        case 'date-of-birth':
            return <DateOfBirth {...props} />;
        case 'currency':
            return <Currency {...props} />;
        case 'duration':
            return <Duration />;
        case 'editor':
            return <Editor {...props} />;
        case 'textarea':
            return <Textarea {...props} />;
        case 'image':
            return <Image {...props} />;
        case 'transfer':
            return <Transfer {...props} />;
        default:
            return null;
    }
};

export const Field = (props: FieldProperties): JSX.Element => {
    const { id, name, label } = props;
    const context = useContext(FieldContext);
    return (
        <FieldContext.Provider value={{ ...context, ...props }}>
            <Reference>
                <Store>
                    <label htmlFor={`${id ?? name ?? label}`} className="flex flex-col flex-1">
                        <Input {...props} />
                    </label>
                </Store>
            </Reference>
        </FieldContext.Provider>
    );
};
export default Field;
