// essa função quando chamada precisa de dois argumento
// o url e um objeto q pode ser vazio( se for metodo get), pois sem isso eles reclama
// que nao consegue dessestruturar o headers, body, ...options

export async function HTTPClient(url, { headers, body, ...options }) {
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
