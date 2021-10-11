import React from 'react';
import { authService } from '../../src/service/auth/authService';
import { useUserService } from '../../src/service/user/hook';
// import { userService } from '../../src/service/user/userService';

// eslint-disable-next-line no-unused-vars
export default function ProfilePage(props) {
  const dados = useUserService.getProfilePage();

  return (
    <div>
      {dados.loading && 'Loading'}
      {!dados.loading && dados.data && 'Carregou com sucesso'}
      {!dados.loading && dados.error}

      <pre>
        {JSON.stringify(dados.data.posts, null, 4)}
      </pre>

      Página de Profile!
      <img src="https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif" alt="Nicolas Cage" />

    </div>
  );
}

export async function getServerSideProps(ctx) {
  const auth = authService(ctx);

  const hasActiveSession = await auth.hasActiveSession();

  if (hasActiveSession) {
    const session = await auth.getSession();
    // const profilePage = await userService.getProfilePage(ctx);
    return {
      props: {
        user: {
          ...session,
          // ...profilePage.user,
        },
        // posts: profilePage.posts,
      },
    };
  }
  ctx.res.writeHead(307, { location: '/login' });
  return ctx.res.end();
}
