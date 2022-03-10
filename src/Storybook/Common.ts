import { SIZES, VARIANTS } from '../Types';
export const argTypes = {
    size: {
        options: SIZES,
        defaultValue: 'sm',
        control: { type: 'inline-radio' },
    },
    variant: {
        options: VARIANTS,
        defaultValue: 'standard',
        control: { type: 'inline-radio' },
    },
};
