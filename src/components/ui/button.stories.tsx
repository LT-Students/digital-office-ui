import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DigitalOfficeButton as Button } from './button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: "contained",
  size: "large",
  children: "Button",
};