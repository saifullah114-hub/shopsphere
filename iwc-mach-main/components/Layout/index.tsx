import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../utils/globalStyle';
import theme from '../../theme';

const BasicLayout = ({ children }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  );
};

export default BasicLayout;
