import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '../../../../infra/test/testUtils';
import Card from '../index';
import { ButtonLike } from '../../Button';
// Post, user, allLikes, filter, description, avatarURL, imgId,
describe('<Card /> like option', () => {
  // eslint-disable-next-line jest/expect-expect
  test('renders components', () => {
    render(
      <Card
        Post="/images/bubbles.svg"
        user="omariosouto"
        allLikes="1"
        filter="none"
        description="description"
        avatarURL="/images/bubbles.svg"
        imgId="1"
      />,
    );
    // screen.debug();
    expect(Card).toMatchSnapshot();
  });
  describe('when click in like button', () => {
    test('clicked', () => {
      const onClickMock = jest.fn();
      render(
        <ButtonLike
          liked="true"
          name="Curtidas"
          data-imgId="imgId"
          imgId="1234"
          handleLike={onClickMock}
        />,
      );
      screen.debug();
      const btn = screen.getByRole('button');
      user.click(btn);
      expect(onClickMock).toHaveBeenCalledTimes(1);
    });
  });
});
