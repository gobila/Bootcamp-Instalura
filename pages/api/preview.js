// esse arquivo é uma apiRoute(lambda) do Next para fazer com que o preview funcione
export default function handler(req, res) {
  // setando o modo de preview
  res.setPreviewData({});
  // definido a chave de acesso
  const key = 'BIRDMAN';
  if (req.query.key !== key) {
    return res.status(401).json({
      message: 'Invalid key to enable preview',
    });
  }
  // redirecionando para home
  res.writeHead(307, { location: '/' });
  return res.end('Preview mode enabled');
}
