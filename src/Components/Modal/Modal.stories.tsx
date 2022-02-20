// Button.stories.ts|tsx

import { Actions, Content, Header, Modal, Overlay } from '.';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';
import Button from '../Button/Button';
import React from 'react';

export default {
    title: 'Modal',
    component: Modal,
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
} as ComponentMeta<typeof Modal>;

export const FormModal: ComponentStory<typeof Modal> = () => (
    <Overlay>
        <Modal>
            <div className="w-96">
                <Header title="header" />
                <Content>
                    <div className="p-5">hello</div>
                </Content>
                <Actions alignment="right">
                    <span>
                        <Button>Cancel</Button>
                    </span>
                    <span>
                        <Button variant="primary">Save</Button>
                    </span>
                </Actions>
            </div>
        </Modal>
    </Overlay>
);
