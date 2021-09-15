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
const apiURL = 'https://instalura-api-git-master-omariosouto.vercel.app/api/login';
export const loginService = {

  async login({ username, password }) {
    return HTTPClient(apiURL, {
      method: 'POST',
      body: {
        username,
        password,
      },
    }).then((respostaConvertida) => {
      console.log(respostaConvertida);
      return respostaConvertida;
    });
  },
};
