import React from 'react';

export interface HeaderProps {
    title?: JSX.Element | JSX.Element[] | string | null;
}

export const Header = ({ title }: HeaderProps): JSX.Element => {
    return (
        <div className="px-5 py-3">
            <div className="text-xl text-gray-700">{title}</div>
        </div>
    );
};
