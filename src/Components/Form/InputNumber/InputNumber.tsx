import Append from './InputNumber.Append';
import React from 'react';
import Text from '../Inputs/Text';
import { TypeInput } from '../../../Types';

export interface NumberProps extends TypeInput {}

export default (props: NumberProps): JSX.Element => {
    return <Text {...props} append={<Append />} />;
};
