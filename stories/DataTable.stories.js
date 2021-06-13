import React from 'react';

import { DataTable } from '../src/DataTable';

export default {
  title: 'Table',
  component: DataTable,
};

const Template = (args) => <DataTable {...args} />;

export const Default = Template.bind({});
