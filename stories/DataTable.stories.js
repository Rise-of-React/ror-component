import React from 'react';

import { DataTable } from '../src/DataTable';
export default {
  title: 'Table',
  component: DataTable,
};

const Template = (args) => <DataTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  head: [
    {
      name: 'name',
    },
    {
      name: 'content',
    },
    {
      name: 'created',
    },
  ],
  data: {
    [1]: ['hyojin', 'developer', '1994-08-29'],
  },
};
