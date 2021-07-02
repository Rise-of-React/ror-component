import styled from 'styled-components';
export interface ButtonProps {
  isBig?: boolean;
  label: string;
}

interface StyleProps {
  isBig?: boolean;
}

const CommonButton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: ${(props: StyleProps) => (props.isBig ? 200 : 100)}px;
  height: ${(props: StyleProps) => (props.isBig ? 90 : 45)}px;
  border: none;
  border-radius: 4px;

  background-color: #c2b0e2;
  color: white;

  padding: 0.5rem 1rem;
  margin: 0;
  display: inline-block;
  text-align: center;

  &:hover {
    background-color: #764fb9;
    cursor: pointer;
  }
`;

class ButtonClass {}

export const Button: Function = (props: ButtonProps): JSX.Element => {
  return <CommonButton onClick={(event) => {}}>{props.label}</CommonButton>;
};
