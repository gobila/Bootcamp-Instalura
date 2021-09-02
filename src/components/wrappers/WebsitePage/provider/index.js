import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import { GlobalStyle } from '../../../theme/GlobalStyle';

// componet que tira responsabilidade do _app deixando isolando o meu
// codigo do codigo do next
// nesse caso eu posso criar outros providers sem interverir no _app
// que recebe apenas um componet com o provider que eu escolher no HOC

export default function WebsiteGlobalProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

WebsiteGlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
