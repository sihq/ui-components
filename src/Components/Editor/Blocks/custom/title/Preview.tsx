import { Data } from './Block';
import React from 'react';
export default (data: Data): JSX.Element => (
    <section className="text-gray-600 body-font text-left">
        <div className="container px-5 pt-6 pb-12 mx-auto">
            <div className="flex items-center justify-center">
                <img
                    className="lg:h-96 md:h-48 w-full object-cover object-center rounded-lg"
                    src={
                        data?.image
                            ? // @ts-ignore
                              `${data?.image.store}${data?.image.status === 'staged' ? 'tmp/' : ''}${data?.image.id}`
                            : 'https://dummyimage.com/720x400'
                    }
                    alt="blog"
                />
            </div>
            <div className="text-2xl font-bold mt-5">{data?.title ?? 'title'}</div>
        </div>
    </section>
);
