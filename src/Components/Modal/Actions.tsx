import React from 'react';

export interface ActionsProps {
    children?: JSX.Element | JSX.Element[] | string | null;
    alignment?: 'between' | 'right' | 'left' | 'center';
}

const ALIGNMENTS = {
    between: 'justify-between',
    right: 'justify-end',
    left: 'justify-start',
    center: 'justify-center',
};

export const Actions = ({ children, alignment = 'right' }: ActionsProps): JSX.Element => {
    return <div className={`px-4 py-3 flex items-center space-x-2 ${ALIGNMENTS[alignment]}`}>{children}</div>;
};
