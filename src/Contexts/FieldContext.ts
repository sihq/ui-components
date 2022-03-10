import { createContext } from 'react';
export const FieldContext = createContext({
    variant: 'standard',
    size: 'sm',
} as any);
