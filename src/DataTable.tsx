import React,{FunctionComponent, ReactNode} from 'react';
import { row } from './types';

interface DataTableProps<T> {
  data?: T[];
}

//https://medium.com/weekly-webtips/typescript-generic-react-components-17c71a64150e

export function DataTable<T extends row>(props: DataTableProps<T>) {
  const {data} = props;
  return <div style={{width:500,height:300,backgroundColor:'red'}}>{data.map((d)=><div>${d}</div>)}</div>;
}
