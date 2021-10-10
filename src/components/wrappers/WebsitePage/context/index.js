import { createContext } from 'react';

// Criando a função de contexto (contextAPI)

export const WebsitePageContext = createContext({
  // para o botao de cadastro da home ter acesso ao a função de abrir o modal
  toggleModalCadastro: () => {},
  // para pegar os valores via CMS
  getCMSContent: (cmsKey) => cmsKey,
});
