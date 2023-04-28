import React from "react";
import styled from "styled-components";
import theme from "../../theme";

export interface LinkProps {
  padding?: string;
  margin?: string;
  children: JSX.Element | React.ReactNode;
  onClick?: () => void;
  active?: boolean;
  href: string;
  whiteSpace?:
    | "normal"
    | "pre"
    | "nowrap"
    | "pre-wrap"
    | "pre-line"
    | "break-spaces";
  download?: string | boolean;
  target?: "_blank" | "_parent" | "_self" | "_top";
  display?: "inline-block" | "block" | "flex" | "inline-flex";
  hoverBackground?: string;
  hoverColor?: string;
  height?: string;
  width?: string;
  color?: string;
  textDecoration?: string;
  fontFamily?: string;
}

const ItemStyled = styled.a<LinkProps>`
  display: ${({ display }) => display};
  white-space: ${({ whiteSpace }) => whiteSpace};
  font-size: 0.875rem;
  margin: ${(props) => (props.margin ? props.margin : `0px`)};
  text-transform: capitalize;
  font-weight: normal;
  cursor: pointer;
  position: relative;
  padding: ${(props) => (props.padding ? props.padding : `0px`)};
  color: ${({ color }) => color};
  text-decoration: ${({ textDecoration }) => textDecoration};
  font-family: ${({ fontFamily }) => fontFamily};
  :hover {
    color: ${({ hoverColor }) => hoverColor};
  }
`;
const Link: React.FC<LinkProps> = ({ children, ...props }: LinkProps) => (
  <ItemStyled
    {...props}
    href={props.href}
  >
    {children}
  </ItemStyled>
);

export default Link;
