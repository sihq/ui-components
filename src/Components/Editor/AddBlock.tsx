import React, { useContext, useState } from 'react';

import Blocks from './Blocks';
import Conditional from '../Conditional';
import { FieldContext } from '../../Contexts';
import { PlusCircleIcon } from '@heroicons/react/outline';
import { TypeBlocks } from './Types';
import { v4 as uuidv4 } from 'uuid';

const AddBlock = (): JSX.Element => {
    const [open, toggle] = useState(false);
    const context = useContext(FieldContext);
    const blocks = context.value ? (context.value as TypeBlocks) : [];

    return (
        <div className="flex items-center justify-center relative">
            <Conditional expresion={open}>
                <div className="absolute mb-10 bottom-0 grid grid-cols-3 gap-2 w-96 transform -translate-x-1/2 left-1/2  bg-white rounded-md shadow-xl z-30 p-4 border border-gray-100">
                    {Blocks.map((editor_block, key) => {
                        return (
                            <div
                                key={key}
                                onClick={(): void => {
                                    context.onChange([...blocks, { id: uuidv4(), type: editor_block.name }]);

                                    toggle(false);
                                }}
                                className="border text-xs border-gray-200 hover:border-blue-500 hover:text-blue-500 rounded p-2 flex flex-col items-center justify-center"
                            >
                                {editor_block.icon ? editor_block.icon() : null}
                                {editor_block.name}
                            </div>
                        );
                    })}
                </div>
            </Conditional>

            <button
                type="button"
                onClick={(): void => toggle(!open)}
                className="text-gray-400 hover:text-blue-500 p-2 mt-5"
            >
                <PlusCircleIcon className="h-10 w-10" />
            </button>
        </div>
    );
};
export default AddBlock;
