/// <reference types="cypress"/>
import LoginScreenPageObject from '../../../../src/components/screens/app/LoginScreen/LoginScreen.pageObject';

describe('/pages/app/login', () => {
  describe('when fill and submit a form login request', () => {
    // it é a palavra do cypress para m grupo de teste
    it('go to the profile page', () => {
    // interceptando a chamada da api
      cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/api/login')
        .as('userLogin');
      // instanciando a classe
      const loginScreen = new LoginScreenPageObject(cy);
      // chamando o metodo que testa o form de login e e passando os dados para ele,
      // logo em seguida chama o que faz osubmit e testa a troca de paginas
      loginScreen.fillLoginForm({ user: 'omariosouto', password: 'senhasegura' }).submitLoginFom();

      // Carrgar a pagina de profile em /app/login
      cy.url().should('include', '/app/profile');
      // confimando se pegou o token
      cy.wait('@userLogin').then((intercept) => {
      // token gerado no server
        const { token } = intercept.response.body.data;
        // conferindo se existe o token no cookie e se ele é igual ao do server
        cy.getCookie('APP_TOKEN').should('exist').should(
          'have.property', 'value', token,
        );
      });
    });
  });
});

// A PARTE DO CODIGO NOVO FOI MOVIDO PARA O ARQUIVO LOGINSCREEN.PAGEOBJECT NA
// PASTA DE TELAS DE LOGIN

//  CODIGO ANTIGO
// describe('/pages/app/login', () => {
//   // it é a palavra do cypress para m grupo de teste
//   it('prencha os campos e va para a pagina de login', () => {
//     // interceptando a chamada da api
//     cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/api/login')
//       .as('userLogin');
//     // visitaa pagina de login
//     cy.visit('/app/login');
//     // prencher input de usuario
//     cy.get('#formCadastro input[name="usuario"]').type('omariosouto');
//     // prencher input de senha
//     cy.get('#formCadastro input[name="senha"]').type('senhasegura');
//     // clicar no boão de submit
//     cy.get('#formCadastro button[type="submit"]').click();
//     // Carrgar a pagina de profile em /app/login
//     cy.url().should('include', '/app/profile');
//     // confimando se pegou o token
//     cy.wait('@userLogin').then((intercept) => {
//       // token gerado no server
//       const { token } = intercept.response.body.data;
//       // conferindo se existe o token no cookie e se ele é igual ao do server
//       cy.getCookie('APP_TOKEN').should('exist').should(
//         'have.property', 'value', token,
//       );
//     });
//   });
// });
