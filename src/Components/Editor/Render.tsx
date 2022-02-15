import React, { useContext } from 'react';

import Blocks from './Blocks';
import { ControllerContext } from '@sihq/reactive';
import { TypeBlocks } from '../Editor/Types';

// @ts-ignore
interface EditorProperties extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

export default React.forwardRef<HTMLInputElement, EditorProperties>((props): JSX.Element => {
    const { value } = useContext(ControllerContext);

    const { name } = props;

    const blocks = value(name) ? (value(name) as TypeBlocks) : [];

    return (
        <>
            {blocks.map((block): JSX.Element | null => {
                const EditorBlock = Blocks.find(({ name }) => name === block?.type);
                return <>{EditorBlock?.preview(block.data)}</>;
            })}
        </>
    );
});
