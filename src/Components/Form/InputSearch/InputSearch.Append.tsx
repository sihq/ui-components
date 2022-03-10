import React, { useContext } from 'react';

import { FieldContext } from '../../../Contexts';
import { XIcon } from '@heroicons/react/solid';

export default function Append(): JSX.Element | null {
    const context = useContext(FieldContext);
    return context.value ? (
        <span className="flex flex-shrink-0 items-center justify-center">
            <button
                type="button"
                onClick={(): void => context.onChange('')}
                className="focus:outline-none z-10 bg-gray-200 p-0.5 rounded-full text-xs text-gray-400 hover:text-blue-500"
            >
                <XIcon className="h-3 w-3" />
            </button>
        </span>
    ) : null;
}
