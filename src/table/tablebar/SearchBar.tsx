import styled from 'styled-components';

interface SearchBarProps {}

const CustomSearchBar = styled.input`
  height: 1.3rem;
  max-width: 300px;
  border: solid;
  border-width: 0.2em;
  border-radius: 4px;
  border-color: #c2b0e2;

  background-color: #d4cce2;
  color: white;

  padding: 0.5rem 1rem;
  margin: 0;
  display: inline-block;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px #704fa8;
  }
`;

const SearchBar = ({}: SearchBarProps) => {
  return <CustomSearchBar></CustomSearchBar>;
};

export default SearchBar;
