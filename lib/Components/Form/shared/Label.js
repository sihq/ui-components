import React, { useContext } from 'react';
import { FieldContext } from '../../../Contexts';
export default function Label() {
    var context = useContext(FieldContext);
    return React.createElement("span", { className: "font-semibold text-gray-600 text-sm leading-loose select-none" }, context.label);
}
