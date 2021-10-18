import React, { useEffect, useState } from 'react';
import Card from '../../src/components/common/Card';
import { Box } from '../../src/components/foundation/layout/Box';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import { authService } from '../../src/service/auth/authService';
import { useUserService } from '../../src/service/user/hook';
import { userService } from '../../src/service/user/userService';

// eslint-disable-next-line no-unused-vars
export function ProfilePage(props) {
  const [posts, setPosts] = useState([]);
  const dados = useUserService.getProfilePage();
  // console.log(dados.data.posts.length);
  const getPosts = () => {
    const dadosResult = [];
    for (let i = 0; i < 25; i += 1) {
      dadosResult.push({ ...dados.data.posts[i], num: i });
    }
    setPosts([
      ...posts, ...dadosResult,
    ]);
  };
  useEffect(() => {
    if (!dados.loading && dados.data) {
      getPosts();
    }
  }, [dados.loading]);
  console.log(dados.data);
  return (
    <Box loged>

      {/* {dados.loading && 'Loading'}
      {!dados.loading && dados.data && 'Carregou com sucesso'}
      {!dados.loading && dados.error}
      <button type="button" onClick={getPosts}>click</button>
      Página de Profile! */}
      {/* <img src="https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif" alt="Nicolas Cage" /> */}

      {posts.length !== 0
      && (
      <Card
        Post="https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif"
        UserName={posts[0].user.slice(10)}
        likes={dados.data.user.totalLikes}
      />
      )}
      {/* {posts.map((i) => (
        <>
          <h1>{i.num}</h1>
          <img src={i.photoUrl} alt="" style={{ width: '90%' }} />
        </>
      ))} */}
    </Box>
  );
}
export async function getServerSideProps(ctx) {
  const auth = authService(ctx);

  const hasActiveSession = await auth.hasActiveSession();

  if (hasActiveSession) {
    const session = await auth.getSession();
    const profilePage = await userService.getProfilePage(ctx);
    return {
      props: {
        user: {
          ...session,
          ...profilePage.user,
        },
        posts: profilePage.posts,
      },
    };
  }
  ctx.res.writeHead(307, { location: '/login' });
  return ctx.res.end();
}

export default websitePageHOC(ProfilePage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
    menuProps: {
      display: true,
      variant: 'loged',
    },
    pageBoxProps: {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
  },
});
