import React from 'react';

import { Button, ButtonProps } from '../src/button/Button';
export default {
  title: 'Button',
  component: Button,
};

const Template = (args: ButtonProps) => {
  return <Button {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  isBig: true,
  label: 'I am Button',
};
