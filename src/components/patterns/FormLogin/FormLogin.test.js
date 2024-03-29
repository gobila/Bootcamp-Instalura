import React from 'react';
import user from '@testing-library/user-event';
import FormLogin from './index';
import {
  render, act, screen, waitFor,
} from '../../../infra/test/testUtils';

const onSubmit = jest.fn();
onSubmit.mockImplementation((event) => {
  event.preventDefault();
});
describe('<FormLogin />', () => {
  describe('when from fields are valid', () => {
    test('complete a submision', async () => {
      await act(async () => {
        await render(
          <FormLogin
            onSubmit={onSubmit}
          />,
        );
      });
      // BUTTON desabilitado
      expect(screen.getByRole('button')).toBeDisabled();
      // USER
      const inputUsuario = screen.getByPlaceholderText('Usuário');
      user.type(inputUsuario, 'someusername');
      await waitFor(() => expect(inputUsuario).toHaveValue('someusername'));
      // PASSWORD
      const inputSenha = screen.getByPlaceholderText('Senha');
      user.type(inputSenha, 'somepassword');
      await waitFor(() => expect(inputSenha).toHaveValue('somepassword'));
      // BUTTON habilitado
      expect(screen.getByRole('button')).not.toBeDisabled();
      // click do bbutton
      user.click(screen.getByRole('button'));
      // SUBMIT
      expect(onSubmit).toBeCalledTimes(1);
    });
  });
  describe('when form fields are invalid', () => {
    test('displays the respective errors', async () => {
      render(<FormLogin onSubmit={onSubmit} />);

      const inputUsuario = screen.getByPlaceholderText('Usuário');
      inputUsuario.focus();
      inputUsuario.blur();

      await waitFor(() => screen.getByRole('alert'));

      expect(screen.getByRole('alert')).toHaveTextContent('Preencha ao menos 3 caracteres');
    });
  });
});
