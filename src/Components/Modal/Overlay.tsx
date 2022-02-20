import React from 'react';

export interface OverlayProps {
    children?: JSX.Element | JSX.Element[] | string | null;
}

export const Overlay = ({ children }: OverlayProps): JSX.Element => {
    return <div className="absolute inset-0 bg-black bg-opacity-25 z-50">{children}</div>;
};
