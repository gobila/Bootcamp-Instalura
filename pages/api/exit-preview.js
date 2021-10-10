// esse arquivo é sair do modo de preview
export default function handler(req, res) {
  // setando o modo de preview
  res.clearPreviewData();
  // redirecionando para home
  res.writeHead(307, { location: '/' });
  return res.end('Preview mode disable');
}
