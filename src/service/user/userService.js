import { isStagingEnv } from '../../infra/env/isStagingEnv';
import { HTTPClient } from '../../infra/http/HTTPClient';
import { authService } from '../auth/authService';

// VALE A PENA CRIAR UM NOVO ARQUIVO SO PARA ESSA URL
// API para o login
// const apiURL = 'https://instalura-api-git-master-omariosouto.vercel.app/api/login';
const BASE_URL = isStagingEnv
// Back end de Dev
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
// Back end de prod
  : 'https://instalura-api.omariosouto.vercel.app';

export const userService = {
  async getProfilePage(ctx) {
    const url = `${BASE_URL}/api/users/posts`;
    const token = await authService(ctx).getToken();
    const response = await HTTPClient(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return {
      user: {
        totalLikes: 100,
      },
      posts: response.data,
    };
  },
  catch(err) {
    throw new Error('Nao conseguiu trazer os post do user', err);
  },

};
