import React from 'react';

import { TableBar } from '../src/table/TableBar';
export default {
  title: 'TableBar',
  component: TableBar,
};

const Template = (args) => <TableBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  isSearch: true,
  isAdd: true,
};
