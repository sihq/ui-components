import React, { ReactNode, useContext, useState } from 'react';

import AddBlock from '../../Editor/AddBlock';
import BlockProperties from '../../Editor/BlockProperties';
import Context from '../../Editor/Context';
import EditorBlock from '../../Editor/EditorBlock';
import { FieldContext } from '../../../Contexts';
import InlineErrors from '../shared/InlineErrors';
import Label from '../shared/Label';
import PrivacyBarrier from '../shared/PrivacyBarrier';
import { TypeBlocks } from '../../Editor/Types';
import Wrapper from '../shared/Wrapper';

// @ts-ignore
interface EditorProperties extends React.InputHTMLAttributes<HTMLInputElement> {
    id?: string;
    label?: string;
    name: string;
    type: string;
    defer?: boolean;
    prepend?: ReactNode;
    append?: ReactNode;
    size?: string;
    variant?: string;
}

export default (props: EditorProperties): JSX.Element => {
    const context = useContext(FieldContext);
    const [selected, setSelected] = useState<string | null>(null);

    const blocks = context.value ? (context.value as TypeBlocks) : [];

    function move(from: any, to: any): void {
        const reorder = [...blocks];
        const f = reorder.splice(from, 1)[0];
        reorder.splice(to, 0, f);
        context.onChange(reorder);
    }

    function remove(from: any): void {
        const reorder = [...blocks];
        reorder.splice(from, 1)[0];
        context.onChange(reorder);
    }

    return (
        <>
            <Context.Provider value={{ selected: selected }}>
                <Label />
                <Wrapper>
                    <span className={`flex w-full h-full overflow-hidden`}>
                        <div className="flex-1 flex flex-col p-10 space-y-2 overflow-auto scrollbar">
                            {blocks.map((block, key): JSX.Element => {
                                return (
                                    <EditorBlock
                                        key={key}
                                        block={block}
                                        select={(): void => setSelected(block.id)}
                                        moveDown={(): void => move(key, key + 1)}
                                        moveUp={(): void => move(key, key - 1)}
                                        remove={(): void => remove(key)}
                                    />
                                );
                            })}
                            <div className="mt-auto">
                                <AddBlock {...props} />
                            </div>
                        </div>
                        <BlockProperties {...props} />

                        <PrivacyBarrier />
                    </span>
                </Wrapper>
                <InlineErrors />
            </Context.Provider>
        </>
    );
};
