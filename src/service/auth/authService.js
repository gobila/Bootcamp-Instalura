import { parseCookies } from 'nookies';
import jwt from 'jsonwebtoken';
import { loginService, LOGIN_COOKIE_APP_TOKEN } from '../login/loginServie';
import { HTTPClient } from '../../infra/http/HTTPClient';
import { isStagingEnv } from '../../infra/env/isStagingEnv';

// VALE A PENA CRIAR UM NOVO ARQUIVO SO PARA ESSA URL
// API para o login
// const apiURL = 'https://instalura-api-git-master-omariosouto.vercel.app/api/login';
const BASE_URL = isStagingEnv
// Back end de Dev
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
// Back end de prod
  : 'https://instalura-api.omariosouto.vercel.app';

export const authService = (ctx) => {
  const cookies = parseCookies(ctx);
  const token = cookies[LOGIN_COOKIE_APP_TOKEN];
  const session = jwt.decode(token);

  return {
    async getToken() {
      return token;
    },
    async hasActiveSession() {
      return HTTPClient(`${BASE_URL}/api/auth`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(({ data }) => {
        // data.authenticated da api do Soutinho
        if (data.authenticated) {
          return true;
        }
        loginService.logout(ctx);
        return false;
      }).catch(() => {
        loginService.logout(ctx);
        return false;
      });
    },
    async getSession() {
      return session.user;
    },
  };
};
