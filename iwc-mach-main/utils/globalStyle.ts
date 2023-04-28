import { createGlobalStyle, DefaultTheme } from "styled-components";
import { generateColor } from "./global.utils";

export interface GlobalStylesProps {
  fontRoboto?: boolean;
  whiteColor?: boolean;
  lightGrey?: boolean;
}

type IGlobalStyles = GlobalStylesProps & DefaultTheme;

const GlobalStyles = createGlobalStyle<IGlobalStyles>`
  :root{
    ${generateColor()}; 
  }
`;
export default GlobalStyles;
