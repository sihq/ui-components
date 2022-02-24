import React, { SyntheticEvent, useContext, useState } from 'react';

import Append from '../shared/Append';
import { ControllerContext } from '@sihq/reactive';
import InlineErrors from '../InlineErrors';
import Label from '../Label';
import Prepend from '../shared/Prepend';
import PrivacyBarrier from '../PrivacyBarrier';
import { TypeInput } from '../../../Types';
import Vapor from 'laravel-vapor';
import Wrapper from '../shared/Wrapper';

interface ImageProperties extends TypeInput {
    label?: string;
    defer?: boolean;
}

export default React.forwardRef<HTMLInputElement, ImageProperties>((props, ref): JSX.Element => {
    const { setValue, value } = useContext(ControllerContext);
    const { id, name, label, disabled, placeholder } = props;
    const { onChange, onKeyDown, onKeyUp, onFocus } = props;

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
            setValue(name, {
                ...response.file,
                name: fileName,
                mime: type,
            });
        });
    }

    return (
        <>
            <Label {...props} />
            <Wrapper {...props}>
                <Prepend {...props} />

                <div className="flex flex-col relative">
                    <div className="flex items-center">
                        <div>
                            {value(name) ? (
                                <div
                                    className="aspect-video h-10 bg-gray-200 rounded mr-2 bg-center bg-cover"
                                    style={{
                                        backgroundImage: `url(https://${
                                            // @ts-ignore
                                            value(name)?.bucket
                                        }.s3.ap-southeast-2.amazonaws.com/${
                                            // @ts-ignore
                                            value(name)?.key
                                        })`,
                                    }}
                                ></div>
                            ) : null}
                        </div>
                        <input
                            type="file"
                            accept="image/png, image/jpeg, image/jpg"
                            ref={ref}
                            id={`${id ?? name ?? label}`}
                            {...{ name, disabled, placeholder, onChange, onKeyDown, onKeyUp, onFocus }}
                            {...(onChange ? {} : { onChange: upload })}
                            className="outline-none bg-transparent flex-1 w-full ml-2"
                        />
                    </div>
                    <div
                        className={`h-1 absolute -bottom-2 left-0 right-0  w-full overflow-hidden ${
                            uploadProgress === 0 || uploadProgress === 100 ? 'hidden' : 'flex'
                        }`}
                    >
                        <div className="h-2  bg-gray-400 shadow-inner w-full rounded-full">
                            <div
                                className="h-2 bg-green-500 rounded-full"
                                style={{ width: `${uploadProgress}%` }}
                            ></div>
                        </div>
                    </div>
                </div>

                <Append {...props} />
                <PrivacyBarrier {...props} />
            </Wrapper>
            <InlineErrors {...props} />
        </>
    );
});
