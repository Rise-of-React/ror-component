import React from 'react';
import {DataTable} from '../src/DataTable';

export default {
  title: 'src/DataTable',
  component: DataTable,
};

const Template = (args) => <DataTable {...args}/>;

export const Default = Template.bind({});
Default.args = {
  data: ['test','test2'],
};
