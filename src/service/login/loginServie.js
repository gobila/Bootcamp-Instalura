import { destroyCookie, setCookie } from 'nookies';
import { isStagingEnv } from '../../infra/hooks/forms/useForm/env/isStagingEnv';

async function HTTPClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  }).then((respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      return respostaDoServidor.json();
    }
    throw new Error('Falha na requisição de pegar os dados da api');
  });
}

// API para o login
// const apiURL = 'https://instalura-api-git-master-omariosouto.vercel.app/api/login';
const BASE_URL = isStagingEnv
// Back end de Dev
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
// Back end de prod
  : 'https://instalura-api.omariosouto.vercel.app';

export const loginService = {
  async login({ username, password }) {
    return HTTPClient(`${BASE_URL}/api/login`, {
      method: 'POST',
      body: {
        username,
        password,
      },
    }).then((respostaConvertida) => {
      console.log(respostaConvertida);
      const { token } = respostaConvertida.data;
      setCookie(null, 'APP_TOKEN', token, {
        path: '/',
        maxAge: 86400 * 7,
      });
      return { token };
    });
  },
  logout() {
    destroyCookie(null, 'APP_TOKEN');
  },
};
