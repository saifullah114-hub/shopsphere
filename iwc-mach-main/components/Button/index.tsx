import React from "react";
import styled, { css, keyframes } from "styled-components";
import Flex from "../Flex";
import Svg from "../Svg";
import { loaderStyle } from "./button.utils";
import theme from "../../theme";

export enum BUTTON_KIND {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TEXT = "text",
  DANGER_PRIMARY = "danger-primary",
}

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  kind: BUTTON_KIND | string;
  size?: "large" | "medium" | "small";
  onClick?: any;
  children?: React.ReactNode;
  disabled?: boolean;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  color?: string;
  margin?: string;
  padding?: string;
  iconFill?: string;
  iconStroke?: string;
  iconStrokeWidth?: number;
  buttonIcon?: JSX.Element | React.ReactNode;
  iconWidth?: number;
  iconHeight?: number;
  iconBgOnHover?: string;
  iconFillOnHover?: string;
  iconStrokeOnHover?: string;
  iconMargin?: string;
  borderRadius?: string;
  width?: string;
  textAlign?: string;
  minWidth?: string;
  alignSelf?: string;
  fontSize?: string;
  lineHeight?: string;
  flexDirection?: "row" | "row-reverse";
  loading?: boolean;
  border?: string;
  minHeight?: string;
  customHeight?: string;
  boxShadow?: string;
  justifyContent?: string;
  loaderText?: string;
  loaderColor?: string;
  fontWeight?: number;
  columnGap?: string;
  hoverBorderColor?: string;
}

const rotation = keyframes`
   0% {
   
    transform: rotate(0deg);
  }
  100% {
   
    transform: rotate(360deg);
  }
`;

export const animation = css`
  ${rotation} 1s infinite linear
`;

const ButtonLoader = styled.div<{
  width: number;
  height: number;
  fill: string;
}>`
  border: ${({ fill }) => `2px solid ${fill}`};
  border-right-color: transparent;
  border-radius: 50%;
  box-sizing: border-box;
  display: inline-block;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  animation: ${animation};
`;

const getLoader = (props: ButtonProps) => {
  const styles = loaderStyle(props.kind);
  const size = props.size ?? "medium";
  return (
    <>
      {props.loaderText || ""}
      <ButtonLoader
        width={styles[size].width}
        height={styles[size].height}
        fill={props.loaderColor || styles[size].color}
      />
    </>
  );
};

const getButtonKind = (props: Partial<ButtonProps>) => {
  switch (props.kind) {
    case "primary":
      return css`
        background-color: ${props.backgroundColor
          ? props.backgroundColor
          : theme.color.primary01};
        color: ${props.color ? props.color : theme.color.white};
        border-radius: ${props.borderRadius ? props.borderRadius : "28px"};
        box-shadow: ${props.boxShadow
          ? props.boxShadow
          : `${theme.shadow.elevation03} ${theme.color.primaryColor20}`};
        border: solid 1px transparent;
        ${getSize}
        &:hover {
          background-color: ${props.hoverBackgroundColor
            ? props.hoverBackgroundColor
            : props.backgroundColor
            ? props.backgroundColor
            : theme.color.teal2};
          box-shadow: ${theme.shadow.elevation04} ${theme.color.primaryColor20};
        }

        &:active {
          background-color: ${props.backgroundColor
            ? props.backgroundColor
            : theme.color.primary01};
          box-shadow: ${theme.shadow.elevation01} ${theme.color.primaryColor20};
        }

        &:disabled {
          background-color: ${props.backgroundColor
            ? props.backgroundColor
            : theme.color.primary01};
          color: ${theme.color.white};
          cursor: not-allowed;
          opacity: 0.4;
          box-shadow: none;
        }
      `;
    case "secondary":
      return css`
        background-color: ${props.backgroundColor
          ? props.backgroundColor
          : theme.color.white};
        color: ${props.color ? props.color : theme.color.black};
        border-radius: ${props.borderRadius ? props.borderRadius : "28px"};
        border: ${props.border ? props.border : `solid 1px transparent`};
        box-shadow: ${props.boxShadow};
        ${getSize}

        &:hover {
          background-color: ${props.hoverBackgroundColor
            ? props.hoverBackgroundColor
            : props.backgroundColor
            ? props.backgroundColor
            : theme.color.black};
          color: ${theme.color.white};
          border: ${props.hoverBorderColor
            ? props.hoverBorderColor
            : `solid 1px transparent`};
        }

        &:active {
          color: ${props.color ? props.color : theme.color.primary01};
        }

        &:disabled {
          color: ${theme.color.grey3};
          cursor: not-allowed;
          box-shadow: none;
        }
      `;
    case "text":
      return css`
        color: ${props.color ? props.color : theme.color.primary01};
        border-radius: 4px;
        ${getSize}

        &:hover {
          color: ${props.color ? props.color : theme.color.primary01};
          background-color: ${props.backgroundColor
            ? props.backgroundColor
            : theme.color.grey5};
        }

        &:active {
          color: ${props.color ? props.color : theme.color.primary01};
        }

        &:disabled {
          color: ${theme.color.teal3};
          cursor: not-allowed;
          box-shadow: none;
          opacity: 0.4;
        }
      `;
    case "danger-primary":
      return css`
        background-color: ${props.backgroundColor
          ? props.backgroundColor
          : theme.color.red03};
        color: ${props.color ? props.color : theme.color.red01};
        border-radius: ${props.borderRadius ? props.borderRadius : "28px"};
        border: ${props.border ? props.border : `solid 1px transparent`};
        ${getSize}

        &:hover {
          color: ${props.color ? props.color : theme.color.red01};
        }

        &:active {
          color: ${props.color ? props.color : theme.color.red01};
        }

        &:disabled {
          cursor: not-allowed;
          box-shadow: none;
          opacity: 0.4;
        }
      `;
  }
};

const getSize = (props: Partial<ButtonProps>) => {
  switch (props.size ?? "medium") {
    case "large":
      return css`
        font-size: ${props.fontSize ? props.fontSize : "1.25rem"};
        line-height: ${props.lineHeight ? props.lineHeight : "160%"};
        min-width: ${props.minWidth ? props.minWidth : "108px"};
        padding: ${props.padding ? props.padding : "12px 24px"};
        min-height: ${props.minHeight ? props.minHeight : "56px"};
        height: ${props.customHeight ? props.customHeight : "auto"};
      `;
    case "medium":
      return css`
        font-size: ${props.fontSize ? props.fontSize : "1rem"};
        line-height: ${props.lineHeight ? props.lineHeight : "150%"};
        min-width: ${props.minWidth ? props.minWidth : "80px"};
        padding: ${props.padding ? props.padding : "8px 16px"};
        min-height: ${props.minHeight ? props.minHeight : "40px"};
        height: ${props.customHeight ? props.customHeight : "auto"};
      `;
    case "small":
      return css`
        font-size: ${props.fontSize ? props.fontSize : "0.75rem"};
        line-height: ${props.lineHeight ? props.lineHeight : "133%"};
        min-width: ${props.minWidth ? props.minWidth : "60px"};
        padding: ${props.padding ? props.padding : "8px 12px"};
        min-height: ${props.minHeight ? props.minHeight : "32px"};
        height: ${props.customHeight ? props.customHeight : "auto"};
      `;

    default:
      return ``;
  }
};

const ButtonStyled = styled.button<ButtonProps>`
  margin: ${(props) => (props.margin ? props.margin : `0px`)};
  box-sizing: border-box;
  text-align: ${(props) => (props.textAlign ? props.textAlign : `center`)};
  border: none;
  outline: none;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 1px;
  cursor: pointer;
  text-transform: capitalize;
  background-color: transparent;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 600)};
  font-family: inherit;
  width: ${(props) => props.width};
  align-self: ${(props) => (props.alignSelf ? props.alignSelf : "auto")};
  ${getButtonKind};
  &:focus {
    outline: none;
  }
  &:hover {
    svg {
      g {
        fill: ${({ iconFillOnHover }) => iconFillOnHover};
      }
    }
  }
`;

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  buttonIcon,
  iconWidth,
  iconMargin,
  iconHeight,
  flexDirection,
  loading,
  onClick,
  justifyContent,
  columnGap = "unset",
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyled
      {...props}
      disabled={disabled}
      onClick={loading ? undefined : onClick}
    >
      <Flex
        justifyContent={justifyContent ?? "center"}
        alignItem='center'
        flexDirection={flexDirection}
        columnGap={loading ? "5px" : columnGap}
      >
        {loading ? (
          getLoader(props)
        ) : buttonIcon ? (
          <>
            <Svg
              width={iconWidth}
              height={iconHeight}
              svgFill={props.iconFill}
              svgStroke={props.iconStroke}
              svgStrokeWidth={props.iconStrokeWidth}
              margin={iconMargin}
              bgOnHover={props.iconBgOnHover}
              fillOnHover={props.iconFillOnHover}
              strokeOnHover={props.iconStrokeOnHover}
            >
              {buttonIcon}
            </Svg>
            {children}
          </>
        ) : (
          children
        )}
      </Flex>
    </ButtonStyled>
  );
};

export default Button;
