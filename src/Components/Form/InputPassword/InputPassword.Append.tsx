import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import React, { useContext } from 'react';

import { FieldContext } from '../../../Contexts';

export interface AppendProps {
    hidden: boolean;
    set: (e: boolean) => void;
}

export default function Append(props: AppendProps): JSX.Element | null {
    const context = useContext(FieldContext);
    const { hidden, set } = props;
    return (
        <span className="flex flex-shrink-0 items-center justify-center ml-2">
            <button
                type="button"
                onClick={(): void => {
                    set(!hidden);
                    context.ref.current?.focus();
                }}
                className={`focus:outline-none z-10 relative p-0.5 rounded-full text-xs text-gray-400 hover:text-blue-500 ${
                    hidden ? '' : 'bg-gray-200'
                }`}
            >
                {hidden ? <EyeIcon className="h-3 w-3" /> : <EyeOffIcon className="h-3 w-3" />}
            </button>
        </span>
    );
}
