// Button.stories.ts|tsx

import { ComponentMeta, ComponentStory } from '@storybook/react';

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
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => <Button variant="primary">Button</Button>;

export const Standard: ComponentStory<typeof Button> = () => <Button variant="standard">Button</Button>;

export const Destructive: ComponentStory<typeof Button> = () => <Button variant="destructive">Button</Button>;
