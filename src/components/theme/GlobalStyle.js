import React from 'react';
import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import theme from '../theme';

export const GlobalStyle = createGlobalStyle`
  *{
      box-sizing: border-box;
  }
  ${normalize}

  body {
    margin: 0;
    padding: 0;
    font-family: ${({theme})=> theme.fontFamily};
  }

  /* / * Full height layout */ */
    html, body {
        display: flex;
        min-height: 100vh;
        width: 100%;
    }
    #__next {
        min-height: 100vh;//propriedade personalizada para 100 da tela com poucos elementos
        
        flex: 1;
        display: flex;
        flex-direction: column;
    }
`