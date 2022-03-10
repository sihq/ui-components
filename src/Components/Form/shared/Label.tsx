import React, { useContext } from 'react';

import { FieldContext } from '../../../Contexts';

export default function Label(): JSX.Element {
    const context = useContext(FieldContext);
    return <span className="font-semibold text-gray-600 text-sm leading-loose select-none">{context.label}</span>;
}
