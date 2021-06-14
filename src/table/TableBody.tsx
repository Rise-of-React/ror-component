import { row } from '../types';

export interface TableBodyProps<T> {
  head?: TableHead[];
  sticky?: boolean;
  data?: T[];
}

export type TableHead = {
  name: string;
};

const style = {};

const defaultOption = {};

export const TableBody: <T extends row>(p: TableBodyProps<T>) => JSX.Element = (props) => {
  const { head, data } = props;

  return (
    <>
      <thead>
        {head.map((element) => (
          <th>{element.name}</th>
        ))}
      </thead>
      <tbody>
        {data &&
          Object.entries(data).map((row) => {
            return (
              <tr>
                {row[1].map((d) => (
                  <td>{d}</td>
                ))}
              </tr>
            );
          })}
      </tbody>
    </>
  );
};
