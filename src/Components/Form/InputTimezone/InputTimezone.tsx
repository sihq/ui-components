import React from 'react';
import Select from '../InputSelect/InputSelect';
import { TIMEZONES } from './Timezones';
import { TypeInput } from '../../../Types';

export interface TimezoneProps extends TypeInput {}

export default (props: TimezoneProps): JSX.Element => {
    return <Select {...props} options={TIMEZONES} />;
};
