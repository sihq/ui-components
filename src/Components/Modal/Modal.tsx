import React from 'react';

export interface ModalProps {
    children?: JSX.Element | JSX.Element[] | string | null;
}

export const Modal = ({ children }: ModalProps): JSX.Element => {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow">
            {children}
        </div>
    );
};
