/// <reference types="cypress"/>

describe('/pages/app/login', () => {
  // it é a palavra do cypress para m grupo de teste
  it('prencha os campos e va para a pagina de login', () => {
    // visitaa pagina de login
    cy.visit('/app/login');
    // prencher input de usuario
    cy.get('#formCadastro input[name="usuario"]').type('moises');
    // prencher input de senha
    cy.get('#formCadastro input[name="senha"]').type('senhaSegura');
    // clicar no boão de submit
    cy.get('#formCadastro button[type="submit"]').click();
    // Carrgar a pagina de profile em /app/login
    cy.url().should('include', '/app/profile');
  });
});
