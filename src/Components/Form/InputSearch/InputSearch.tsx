import Append from './InputSearch.Append';
import Prepend from './InputSearch.Prepend';
import React from 'react';
import Text from '../Inputs/Text';
import { TypeInput } from '../../../Types';

export interface SearchProps extends TypeInput {}

export default (props: SearchProps): JSX.Element => {
    return <Text {...props} type="text" append={<Append />} prepend={<Prepend />} />;
};
