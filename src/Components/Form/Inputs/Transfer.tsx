import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

import Append from '../shared/Append';
import InlineErrors from '../shared/InlineErrors';
import Label from '../shared/Label';
import Prepend from '../shared/Prepend';
import PrivacyBarrier from '../shared/PrivacyBarrier';
import React from 'react';
import { TypeInput } from '../../../Types';
import Wrapper from '../shared/Wrapper';

interface TransferProperties extends TypeInput {
    label?: string;
}

const Transfer = (props: TransferProperties): JSX.Element | null => {
    return (
        <>
            <Label />
            <Wrapper {...props}>
                <Prepend {...props} />
                <div className="flex w-full h-32">
                    <div className="flex h-full flex-col flex-1 scrollbar space-y-2 pr-3 relative">
                        <button
                            type="button"
                            className="flex items-center outline-none text-left focus:bg-gray-700 focus:text-white p-2 bg-gray-50 relative rounded hover:bg-gray-100 hover:text-gray-700 select-none cursor-pointer"
                        >
                            Lala
                        </button>
                        <button
                            type="button"
                            className="flex items-center outline-none text-left focus:bg-gray-700 focus:text-white p-2 bg-gray-50 relative rounded hover:bg-gray-100 hover:text-gray-700 select-none cursor-pointer"
                        >
                            Lala
                        </button>
                    </div>

                    <div
                        style={{ minHeight: '100px' }}
                        className="flex flex-col space-y-2 justify-center h-full w-px bg-gray-300"
                    >
                        <button
                            type="button"
                            className="h-5 w-5 outline-none focus:ring-2 focus:ring-gray-700 bg-white hover:bg-gray-100 hover:text-blue-500 text-gray-400 transform -translate-x-1/2 flex items-center justify-center p-0.5 rounded-full"
                        >
                            <ChevronRightIcon />
                        </button>
                        <button
                            type="button"
                            className="h-5 w-5 outline-none focus:ring-2 focus:ring-gray-700 bg-white hover:bg-gray-100 hover:text-blue-500 text-gray-400 transform -translate-x-1/2 flex items-center justify-center p-0.5 rounded-full"
                        >
                            <ChevronLeftIcon />
                        </button>
                    </div>

                    <div className="flex h-full flex-col flex-1 space-y-2 scrollbars overflow-auto pl-3">
                        <button
                            type="button"
                            className="flex items-center outline-none text-left focus:bg-gray-700 focus:text-white p-2 bg-gray-50 relative rounded hover:bg-gray-100 hover:text-gray-700 select-none cursor-pointer"
                        >
                            Lala
                        </button>
                        <button
                            type="button"
                            className="flex items-center outline-none text-left focus:bg-gray-700 focus:text-white p-2 bg-gray-50 relative rounded hover:bg-gray-100 hover:text-gray-700 select-none cursor-pointer"
                        >
                            Lala
                        </button>
                        <button
                            type="button"
                            className="flex items-center outline-none text-left focus:bg-gray-700 focus:text-white p-2 bg-gray-50 relative rounded hover:bg-gray-100 hover:text-gray-700 select-none cursor-pointer"
                        >
                            Lala
                        </button>
                    </div>
                </div>
                <Append {...props} />
                <PrivacyBarrier />
            </Wrapper>
            <InlineErrors />
        </>
    );
};

export default Transfer;
