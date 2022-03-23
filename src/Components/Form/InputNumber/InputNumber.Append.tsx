import { MinusIcon, PlusIcon } from '@heroicons/react/solid';
import React, { useContext } from 'react';

import { FieldContext } from '../../../Contexts';

export default function Append(): JSX.Element | null {
    const { value, onChange } = useContext(FieldContext);

    const number = Number(value);

    const increment = (): void => onChange(number + 1);
    const decrement = (): void => onChange(number - 1);

    return (
        <span className="flex flex-col flex-shrink-0 items-center justify-center -my-2 -mr-2 ml-2 border rounded overflow-hidden border-gray-300 divide-y divide-gray-300">
            <button
                type="button"
                onClick={increment}
                className="focus:outline-none z-10 relative  text-xs bg-gray-50 text-gray-500 hover:text-white hover:bg-blue-500"
            >
                <PlusIcon className="h-3 w-3" />
            </button>
            <button
                type="button"
                onClick={decrement}
                className="focus:outline-none z-10 relative    text-xs bg-gray-50  text-gray-500 hover:text-white hover:bg-blue-500"
            >
                <MinusIcon className="h-3 w-3" />
            </button>
        </span>
    );
}
