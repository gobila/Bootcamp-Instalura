import React from 'react';
import { authService } from '../../src/service/auth/authService';
import { userService } from '../../src/service/user/userService';

export default function ProfilePage(props) {
  return (
    <div>
      <pre>
        {JSON.stringify(props, null, 4)}
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
