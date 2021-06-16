import styled from 'styled-components';
export interface ButtonProps {
  isBig?: boolean;
  label: string;
}

interface StyleProps {
  isBig?: boolean;
}

const CommonButton = styled.div`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: ${(props: StyleProps) => (props.isBig ? 200 : 100)}px;
  heigth: 50px;

  border: none;
  border-radius: 4px;

  background-color: #c2b0e2;
  color: white;

  padding: 0.5rem 1rem;
  margin: 0;
  display: inline-block;
`;

class ButtonClass {}

export const Button: Function = (props: ButtonProps): JSX.Element => {
  return <CommonButton>{props.label}</CommonButton>;
};
