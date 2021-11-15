/// <reference types="cypress"/>
///
import FeedScreenPageObject from '../../../../src/components/screens/app/FeedScreen/FeedScreen.pageObject';

describe('/pages/app/feed/', () => {
  describe('go to the profile page', () => {
    it('open modal post and fill form', () => {
      const feedScreen = new FeedScreenPageObject(cy);
      feedScreen.openFormModal().fillPostForm({
        photoUrl: 'https://images.tcdn.com.br/img/img_prod/680735/moletom_ze_gotinha_4826_3_f0ab8656e14bd2c1bd6fee2edbffa3b6.jpg',
        filter: '1977',
        description: 'Zé Gotinha bombado',
      }).submitPostFom();

      cy.url().should('eq', 'http://localhost:3000/app/profile/');
    });
  });
});
