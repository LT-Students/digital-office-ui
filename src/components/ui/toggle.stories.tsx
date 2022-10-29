import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DigitalOfficeToggle as Toggle } from './toggle';

export default {
  title: 'Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
export const Error = Template.bind({});
export const Disabled = Template.bind({});

Error.args = {
  error: true,
};

Disabled.args = {
    disabled: true,
};