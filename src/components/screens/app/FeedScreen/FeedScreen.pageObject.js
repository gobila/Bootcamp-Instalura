// Codigo para o teste de post na pagina de profile

export default class FeedScreenPageObject {
  constructor(cy) {
    this.cy = cy;
    const tokenName = 'LOGIN_COOKIE_APP_TOKEN';
    const tokenValue = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlOTAzNWY1YmIwMTlhM2M2MjU3MmRhIiwidXNlcm5hbWUiOiJvbWFyaW9zb3V0byIsInJvbGUiOlsidXNlciJdfSwiaWF0IjoxNjM2OTI2MTk5LCJleHAiOjE2Mzc1MzA5OTl9.nR0vlCIh2k6qXuKFDwgvv9kQf0MSpKXTf6j62k0K2cI';

    this.cy.setCookie(tokenName, tokenValue);
    this.cy.visit('/app/feed');
  }

  openFormModal() {
    this.cy.get('button[id="newPost"]').click();
    return this;
  }

  fillPostForm({ photoUrl, description, filter }) {
    this.cy.get('#formPost input[name="photoUrl"]').type(photoUrl);
    this.cy.get('#formPost input[name="description"]').type(description);
    this.cy.get('#formPost button[id="preview"]').click();
    this.cy.get('#formPost button').contains('Avançar').click();
    this.cy.get(`#${filter}`).click({ force: true });
    return this;
  }

  submitPostFom() {
    this.cy.get('#formPost button[type="submit"]').contains('Post').click({ force: true });
  }
}
