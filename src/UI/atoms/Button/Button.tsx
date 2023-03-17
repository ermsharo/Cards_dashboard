import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  children: string | JSX.Element | JSX.Element[];
}

export const ButtonBox = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  border-radius: 1rem;
  padding: 0.5rem;
  background-color: darkblue;
  color: white;
  width: calc(100%);
  height: 3rem;
  margin: auto;

  margin-bottom: 2rem;
  &:hover {
  }
`;

function Button({}: ButtonProps) {
  return <ButtonBox>Button</ButtonBox>;
}

export default Button;
