import React from 'react';

export interface ContentProps {
    children?: JSX.Element | JSX.Element[] | string | null;
}

export const Content = ({ children }: ContentProps): JSX.Element => {
    return <div className="border-t border-b border-gray-300 bg-gray-100 py-2">{children}</div>;
};
