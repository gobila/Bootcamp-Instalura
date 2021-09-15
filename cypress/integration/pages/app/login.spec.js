/// <reference types="cypress"/>

describe('/pages/app/login', () => {
  // it é a palavra do cypress para m grupo de teste
  it('prencha os campos e va para a pagina de login', () => {
    // interceptando a chamada da api
    cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/api/login')
      .as('userLogin');
    // visitaa pagina de login
    cy.visit('/app/login');
    // prencher input de usuario
    cy.get('#formCadastro input[name="usuario"]').type('omariosouto');
    // prencher input de senha
    cy.get('#formCadastro input[name="senha"]').type('senhasegura');
    // clicar no boão de submit
    cy.get('#formCadastro button[type="submit"]').click();
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
