import React from 'react';
import { TableBody } from './table/TableBody';
import { TableFooter } from './table/TableFooter';
import { TableHeader } from './table/TableHeader';
import { row } from './types';

interface DataTableProps<T> {
  data?: T[];
}

//https://medium.com/weekly-webtips/typescript-generic-react-components-17c71a64150e

export function DataTable<T extends row>(props: DataTableProps<T>) {
  const { data } = props;
  return (
    <>
      <TableHeader />
      <TableBody />
      <TableFooter />
    </>
  );
}
