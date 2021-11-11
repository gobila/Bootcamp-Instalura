/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import Card from '../../../common/Card';
import { Box } from '../../../foundation/layout/Box';
import Text from '../../../foundation/Text';

// eslint-disable-next-line no-unused-vars
export default function FeedScreen({ userContext }) {
  const { gitInfo } = userContext;
  const { user } = userContext;
  const { posts } = userContext;
  const totalPosts = posts.length - 1;
  const [currentPage, setCurrentPage] = useState(1);
  const [loadPosts, setLoadPosts] = useState([]);
  const [indice, setIndice] = useState([]);
  const idx = [];

  // Criando o sistema de scroll infinito
  // trazendo os post da pagina
  useEffect(() => {
    if (indice.length < totalPosts) {
      for (let i = 0; i < currentPage * 10 && idx.length < totalPosts; i += 1) {
        idx.push(totalPosts - i);
      }
      setIndice(idx);
    }
    if (loadPosts.length < totalPosts) {
      setLoadPosts(() => indice.map((i) => posts[i]));
    }
  }, [currentPage]);

  // setando a pagina
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCurrentPage((currentValue) => currentValue + 1);
      }
    });
    intersectionObserver.observe(document.querySelector('#sentinela'));
    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <Box loged>
      {loadPosts.length === 0
      && (
        <Box display="flex" flexDirection="column" alignItems="center">
          <img src="/images/assets/loading.webp" alt="Carregando" />
          <Text tag="h3" variant="subTitle">Estamos buscando novas fofocas para você</Text>
        </Box>
      )}
      {loadPosts.map((i) => (
        <div key={i._id}>
          {i.length !== 0
          && (
          <Card
            imgId={i._id}
            avatarURL={gitInfo.avatar_url}
            description={i.description}
            filter={i.filter}
            Post={i.photoUrl}
            user={user}
            allLikes={i.likes}
          />
          )}
        </div>
      ))}
      {loadPosts.length !== posts.length
      && (
        <Box display="flex" flexDirection="column" alignItems="center" id="sentinela">
          <img src="/images/assets/loading.webp" alt="Carregando" />
          <Text tag="h3" variant="subTitle">Estamos buscando novas fofocas para você</Text>
        </Box>
      )}
    </Box>
  );
}
