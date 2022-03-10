import { FieldContext, ReactiveControllerContext } from '../../../Contexts';
import React, { useContext, useState } from 'react';

import _ from 'lodash';

export interface StoreProps {
    children?: JSX.Element | JSX.Element[];
    onChange?: (value: any) => void;
}

export default function Store({ children, onChange }: StoreProps): JSX.Element | null {
    const [get, set] = useState({});
    const context = useContext(FieldContext);
    const { update, state } = useContext(ReactiveControllerContext);

    const setStore = update ?? set;
    const getStore = state ?? get;

    const action =
        onChange ??
        ((value: string | object | number | []) => {
            setStore(_.set({ ...getStore }, context.name, value));
        });
    const value = _.get(getStore, context.name) ?? null;

    return <FieldContext.Provider value={{ ...context, onChange: action, value }}>{children}</FieldContext.Provider>;
}
