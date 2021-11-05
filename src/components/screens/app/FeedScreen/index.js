import React from 'react';
import Card from '../../../common/Card';
import { Box } from '../../../foundation/layout/Box';
import Text from '../../../foundation/Text';

// eslint-disable-next-line no-unused-vars
export default function FeedScreen({ userContext }) {
  const { gitInfo } = userContext;
  const { user } = userContext;
  const { posts } = userContext;

  return (
    <Box loged>

      {posts.length === 0
      && (
        <Box display="flex" flexDirection="column" alignItems="center">
          <img src="/images/assets/loading.webp" alt="Carregando" />
          <Text tag="h3" variant="subTitle">Estamos buscando novas fofocas para você</Text>
        </Box>
      )}
      {posts.map((i) => (
        // eslint-disable-next-line no-underscore-dangle
        <div key={i._id}>
          {i.length !== 0
          && (
          <Card
            avatarURL={gitInfo.avatar_url}
            description={i.description}
            filter={i.filter}
            Post={i.photoUrl}
            UserName={user.username}
            likes={user.totalLikes}
          />
          )}
        </div>
      )).reverse()}
    </Box>
  );
}
