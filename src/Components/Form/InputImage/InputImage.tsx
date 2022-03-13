import React, { SyntheticEvent, useContext, useState } from 'react';

import { FieldContext } from '../../../Contexts';
import InlineErrors from '../shared/InlineErrors';
import Label from '../shared/Label';
import { PhotographIcon } from '@heroicons/react/outline';
import PrivacyBarrier from '../shared/PrivacyBarrier';
import { TypeInput } from '../../../Types';
import Vapor from 'laravel-vapor';

interface ImageProperties extends TypeInput {
    label?: string;
    defer?: boolean;
}

export default function Image(props: ImageProperties): JSX.Element {
    const context = useContext(FieldContext);
    const { id, name, label, disabled, placeholder } = props;

    const [uploadProgress, setUploadProcess] = useState(0);

    function upload(e: SyntheticEvent) {
        // @ts-ignore
        const fileName = e.target.files[0].name;
        // @ts-ignore
        const type = e.target.files[0].type;
        // @ts-ignore
        Vapor.store(e.target.files[0], {
            // @ts-ignore
            signedStorageUrl: '/reactive/signed-transfer',
            visibility: 'public-read',
            // @ts-ignore
            progress: (progress: number) => {
                setUploadProcess(Math.round(progress * 100));
            },
        }).then((response: any) => {
            context.onChange({
                ...response.file,
                name: fileName,
                mime: type,
            });
        });
    }

    return (
        <>
            <Label />

            <div className="flex items-center space-x-4 rounded p-1 relative">
                <div className="h-14 w-14 flex items-center justify-center bg-gray-300 rounded outline-2 outline-offset-2 outline-gray-300 outline">
                    {context.value ? (
                        <div
                            className="h-full w-full bg-gray-200 rounded mr-2 bg-center bg-cover"
                            style={{
                                backgroundImage: `url(${
                                    // @ts-ignore
                                    context.value?.store
                                }${
                                    // @ts-ignore
                                    context.value?.status === 'staged' ? 'tmp/' : ''
                                }${
                                    // @ts-ignore
                                    context.value?.id
                                })`,
                            }}
                        ></div>
                    ) : (
                        <PhotographIcon className="m-4 text-white" />
                    )}
                </div>
                <div className="flex flex-col items-center space-y-2">
                    <input
                        type="file"
                        accept="image/png, image/jpeg, image/jpg"
                        id={`${id ?? name ?? label}`}
                        {...{ name, disabled, placeholder }}
                        onChange={upload}
                        className="outline-none bg-transparent flex-1 w-full ml-2 text-sm"
                    />
                    <div className={`h-2 w-full overflow-hidden flex ${uploadProgress === 0 ? 'hidden' : 'flex'} `}>
                        <div className="h-2 flex items-center overflow-hidden  bg-gray-300 shadow-inner w-full rounded-full">
                            <div
                                className="h-full bg-green-500 rounded-full border-2 transition-all duration-1000 ease-in-out border-white"
                                style={{ width: `${uploadProgress}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
                <PrivacyBarrier />
            </div>
            <InlineErrors />
        </>
    );
}
