import styled from 'styled-components';
import { Button } from '../button/Button';
import SearchBar from '../table/tablebar/SearchBar';

export interface TableBarProps {
  isSearch?: boolean;
  isAdd?: boolean;
}

const style = {};

const BarGroup = styled.div`
  display: flex;
`;

export const TableBar = ({ isSearch, isAdd }: TableBarProps) => {
  return (
    <BarGroup>
      {isSearch && <SearchBar />}
      {isAdd && <Button label="ADD" />}
    </BarGroup>
  );
};
