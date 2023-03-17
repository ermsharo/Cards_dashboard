import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export interface to {
  pathname?: string;
  hash?: string;
}

const LinkElement = styled.span`
  a {
    all: unset;
    cursor: pointer;

    :hover {
      opacity: 0.8;
    }
  }
`;

export interface LinkProps {
  to: to;
  children: string | JSX.Element | JSX.Element[];
}

function NavigationLink({ to, children }: LinkProps) {
  return (
    <LinkElement>
      <Link to={to}>{children}</Link>
    </LinkElement>
  );
}

export default NavigationLink;
