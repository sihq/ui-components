import React, { useContext } from 'react';

import Blocks from './Blocks';
import { ReactiveControllerContext } from '../../Contexts';
import { TypeBlocks } from '../Editor/Types';
import _ from 'lodash';

export interface RenderProps {
    name: string;
}

export const Render = (props: RenderProps): JSX.Element => {
    const { state } = useContext(ReactiveControllerContext);

    const blocks = _.get(state, props.name) as TypeBlocks;

    return (
        <>
            {(blocks ?? []).map((block): JSX.Element | null => {
                const EditorBlock = Blocks.find(({ name }) => name === block?.type);
                return <>{EditorBlock?.preview(block.data)}</>;
            })}
        </>
    );
};
export default Render;