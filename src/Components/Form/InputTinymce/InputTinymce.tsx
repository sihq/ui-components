import React, { ReactNode, useContext } from 'react';

import Append from '../shared/Append';
import { Editor } from '@tinymce/tinymce-react';
import { FieldContext } from '../../../Contexts';
import InlineErrors from '../shared/InlineErrors';
import Label from '../shared/Label';
import Prepend from '../shared/Prepend';
import PrivacyBarrier from '../shared/PrivacyBarrier';

// @ts-ignore
export interface TextProperties extends React.InputHTMLAttributes<HTMLTextAreaElement> {
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

export default (props: TextProperties): JSX.Element => {
    const { id, type, name, label, disabled, placeholder, size = 'sm' } = props;

    const context = useContext(FieldContext);

    return (
        <>
            <Label />

            <Prepend />
            <Editor
                apiKey="8aiaq16fygumut8qxrh0s3f7uf5ffuwsrsxcmao4njkwhqrt"
                id={`${id ?? name ?? label}`}
                ref={context.ref}
                init={{
                    height: `${size === 'sm' ? 200 : ''}${size === 'xs' ? 300 : ''}`,
                    menubar: false,
                    statusbar: false,
                    plugins: 'lists link code',
                    toolbar: 'bold italic | bullist numlist | link | alignleft aligncenter alignright | code',
                }}
                value={context.value}
                onChange={({ target: { value } }: any) => context.onChange(value)}
                {...{ type, name, disabled, placeholder }}
            />
            <Append />
            <PrivacyBarrier />

            <InlineErrors />
        </>
    );
};
