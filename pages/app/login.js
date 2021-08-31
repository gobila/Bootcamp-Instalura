import React from 'react';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

function LoginScreen() {
  return (
    <div>
      Página de Login

      <a href="/">
        Voltar para a home com refresh
      </a>
    </div>
  );
}

export default websitePageHOC(LoginScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Login',
    },
    menuProps: {
      displey: false,
    },
  },
});
