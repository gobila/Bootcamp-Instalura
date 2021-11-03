import React from 'react';
import InforCard from '../../../common/Card/InforCard';
import { Box } from '../../../foundation/layout/Box';
import { Grid } from '../../../foundation/layout/Grid';

export default function ProfileScreen(props) {
  const { gitInfo } = props;
  const { user } = props;
  const { posts } = props;

  return (
    <Box loged>
      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '60px',
        }}
      >
        {/* <Grid.Row justifyContent="center"> */}
        <InforCard
          userPhoto={gitInfo.avatar_url}
          userName={user.username}
          userBio={gitInfo.bio}
        />
        {/* </Grid.Row> */}

        <Grid.Row justifyContent="center">
          <Grid.Col
            value={{ xs: 12, md: 10, xl: 9 }}
            display="flex"
            // alignItems="flex-start"
            justifyContent="center"
            flexWrap="wrap"
          >
            {posts.map((i) => (
              <Box width="30%" margin="1.5%" display="flex">
                <img src={i.photoUrl} className={`${i.filter} filter-${i.filter}`} alt={i.description} style={{ width: '100%', overflowWrap: 'break-word' }} />
              </Box>
            )).reverse().slice(0, 100)}

          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}
