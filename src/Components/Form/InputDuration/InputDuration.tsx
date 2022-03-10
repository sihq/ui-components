import Custom from './InputDuration.Custom';
import React from 'react';
import Store from '../shared/Store';
import { TypeInput } from '../../../Types';

export interface DurationProps extends TypeInput {}

export default (): JSX.Element => {
    return (
        <Store>
            <Custom />
        </Store>
    );
};
