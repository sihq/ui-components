import React, { useState } from 'react';

import Append from './InputPassword.Append';
import Store from '../shared/Store';
import Text from '../Inputs/Text';
import { TypeInput } from '../../../Types';

export interface PasswordProps extends TypeInput {}

export default (props: PasswordProps): JSX.Element => {
    const [hidden, set] = useState(true);
    return (
        <Store>
            <Text {...props} type={hidden ? props.type : 'text'} append={<Append {...{ hidden, set }} />} />
        </Store>
    );
};
