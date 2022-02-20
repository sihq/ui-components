// Button.stories.ts|tsx

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { GiftIcon, KeyIcon } from '@heroicons/react/outline';
import { SIZES, VARIANTS } from '../../Types';

import { BrowserRouter } from 'react-router-dom';
import Button from './Button';
import React from 'react';

export default {
    title: 'Button',
    component: Button,
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
    argTypes: {
        variant: {
            options: VARIANTS,
            control: { type: 'select' },
        },
        size: {
            options: SIZES,
            control: { type: 'select' },
        },
    },
} as ComponentMeta<typeof Button>;

export const Standard: ComponentStory<typeof Button> = ({ variant, size }) => (
    <Button variant={variant} size={size}>
        Button
    </Button>
);

export const WithIcon: ComponentStory<typeof Button> = ({ variant, size }) => (
    <Button variant={variant} size={size} icon={<GiftIcon />}>
        Button with icon
    </Button>
);

export const IconOnly: ComponentStory<typeof Button> = ({ variant, size }) => (
    <Button variant={variant} size={size} icon={<KeyIcon />}></Button>
);
