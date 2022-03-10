import React from 'react';
import Select from '../InputSelect/InputSelect';
import Store from '../shared/Store';
import { TIMEZONES } from './Timezones';
import { TypeInput } from '../../../Types';

export interface TimezoneProps extends TypeInput {}

export default (props: TimezoneProps): JSX.Element => {
    return (
        <Store>
            <Select {...props} options={TIMEZONES} />
        </Store>
    );
};
