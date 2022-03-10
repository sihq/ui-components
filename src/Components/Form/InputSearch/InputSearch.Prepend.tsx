import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';

export default function Prepend(): JSX.Element | null {
    return (
        <span className="flex flex-shrink-0 items-center justify-center mr-2">
            <span className="p-0 rounded-full text-xs text-gray-500 ">
                <SearchIcon className="h-3 w-3" />
            </span>
        </span>
    );
}
