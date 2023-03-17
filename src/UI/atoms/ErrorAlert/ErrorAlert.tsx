import React from "react";
import styled from "styled-components";
import { Colors } from "../../../styles/defaultProps";

export interface ErrorAlertProps {
  errors: string[];
}

const ErrorBox = styled.div`
  padding: 1rem;
  background-color: ${Colors.errorColor};
  color: ${Colors.primaryfontColor};
  border-radius: 1rem;
  text-align: left;
  font-size: 1rem;
  margin-top: 1rem;
`;

function ErrorAlert({ errors }: ErrorAlertProps) {
  if (errors.length === 0) return <></>;
  return (
    <ErrorBox>
      <ul>
        {errors.map((error, index) => {
          return <li key={index}>{error}</li>;
        })}
      </ul>
    </ErrorBox>
  );
}

export default ErrorAlert;
