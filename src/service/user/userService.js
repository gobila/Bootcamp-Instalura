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
  : 'https://instalura-api.vercel.app';

export const userService = {
  async getProfilePage(ctx) {
    const url = `${BASE_URL}/api/users/posts/?per_page=10&order=DESC`;
    try {
      const token = await authService(ctx).getToken();
      const response = await HTTPClient(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return {
        user: {
          totalLikes: 1,
        },
        posts: response.data,
      };
    } catch (err) {
      throw new Error('Nao conseguiu trazer os post do user', err);
    }
  },

  // New Post
  async newPost(data) {
    const url = `${BASE_URL}/api/posts`;
    try {
      const token = await authService().getToken();
      const response = await HTTPClient(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      });
      return response.data;
    } catch (err) {
      throw new Error('Não foi possivel enviar o novo post', err);
    }
  },

  // GitHub infos
  async githubInfos(user) {
    const url = `https://api.github.com/users/${user}`;
    // passando o objeto vazio pois HTTPClient() requer 2 argumentos sendo o segundo as
    // opçoes de hearder e body
    const response = await HTTPClient(url, { });
    return response;
    // const restona = await fetch('https://api.github.com/users/omariosouto')
    //   .then((res) => res.json())
    //   .then((resp) => resp);
    // return restona
  },
};
