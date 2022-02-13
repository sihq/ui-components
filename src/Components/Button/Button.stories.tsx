// Button.stories.ts|tsx

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';
import Button from './Button';
import React from 'react';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
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

export const Primary: ComponentStory<typeof Button> = () => <Button primary>Button</Button>;