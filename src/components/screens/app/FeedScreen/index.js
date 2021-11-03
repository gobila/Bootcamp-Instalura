import React from 'react';
import Card from '../../../common/Card';
import { Box } from '../../../foundation/layout/Box';
import Text from '../../../foundation/Text';

// eslint-disable-next-line no-unused-vars
export default function FeedScreen({ userContext }) {
  const { gitInfo } = userContext;
  const { user } = userContext;
  const { posts } = userContext;

  // const [posts, setPosts] = useState([]);
  // const dados = useUserService.getProfilePage();
  // // console.log(dados.data.posts.length);
  // const getPosts = () => {
  //   const dadosResult = [];
  //   for (let i = dados.data.posts.length - 1; i > 0; i -= 1) {
  //     dadosResult.push({ ...dados.data.posts[i], num: i });
  //   }
  //   setPosts([
  //     ...posts, ...dadosResult,
  //   ]);
  // };
  // useEffect(() => {
  //   if (!dados.loading && dados.data) {
  //     getPosts();
  //   }
  // }, [dados.loading]);
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
        <>
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
        </>
      )).reverse()}
    </Box>
  );
}
