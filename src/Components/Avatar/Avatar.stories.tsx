// Button.stories.ts|tsx

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Avatar from './Avatar';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

export default {
    title: 'Avatar',
    component: Avatar,
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
    argTypes: {
        name: {
            defaultValue: 'John Doe',
            control: { type: 'text' },
        },
    },
} as ComponentMeta<typeof Avatar>;

export const UserAvatar: ComponentStory<typeof Avatar> = ({ name }) => <Avatar name={name} />;
