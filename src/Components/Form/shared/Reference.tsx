import React, { useContext } from 'react';

import { FieldContext } from '../../../Contexts';

export interface ReferenceProps {
    children?: JSX.Element | JSX.Element[];
}

export default function Reference({ children }: ReferenceProps): JSX.Element | null {
    const context = useContext(FieldContext);
    const reference = React.createRef();
    return <FieldContext.Provider value={{ ...context, ref: reference }}>{children}</FieldContext.Provider>;
}
