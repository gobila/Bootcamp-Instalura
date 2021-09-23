// CODIGO NOVO FOCANDO NA ORGANIZAÇÃO E LEGIBILIDADE VIA CLASSES
// Codigo antigo se encrontra no arquivo de teste
export default class LoginScreenPageObject {
  // construtor da classe que pega a variavel do Cypress e cria na chamada a
  // "visita" da pagina
  constructor(cy) {
    this.cy = cy;

    this.cy.visit('/app/login');
  }

  // medoto para preencher o os campos de formulario
  fillLoginForm({ user, password }) {
    this.cy.get('#formCadastro input[name="usuario"]').type(user);
    this.cy.get('#formCadastro input[name="senha"]').type(password);
    // nescessario retornar o this para que na chamada do metodo no arquivo de tetes
    // ele acesse as propriedades
    return this;
  }

  // medoto para pegar interação do botão
  submitLoginFom() {
    this.cy.get('#formCadastro button[type="submit"]').click();
  }
}
