import React from 'react';
import styled from 'styled-components';
import { Dots } from '../../../assets/dots';
import { Box } from '../../foundation/layout/Box';
import Text from '../../foundation/Text';
import { Button } from '../Button';

export { CardNewPost } from './CardNewPost';

const CardWrapper = styled.div`
  max-width: 600px;
  margin: 25px auto 25px auto;
  display:flex;
  flex-direction: column;
  background-color:${({ theme }) => (theme.colors.background.light.color)};
`;
const CardHead = styled(Box)`
  max-width: 600px;
  display: inherit;
  justify-content: space-between;
  align-items:center;
  padding: 25px 40px;
  img{
    width:50px;
    height: 50px;
    border-radius: 25px;
    margin-right:19px
  }
`;
const CardBody = styled(Box)`
  max-width: 100%;
  max-height: 600px;
  img{
    width:100%;
  }
`;
const CardFooter = styled(Box)`
  margin: 10px 25px;
  max-width: 600px;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  img{
    width:30px;
    height: 30px;
    border-radius: 25px;
    margin-right:19px
  }
`;

export default function Card({
  Post, UserName, likes, filter, description,
}) {
  const avatar = 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Nicolas_Cage_Deauville_2013.jpg';
  return (
    <CardWrapper>
      <CardHead>
        <Box
          display="flex"
          alignItems="center"
        >
          <img src={avatar} alt="Nicolas Cage" />
          <Text tag="p" variant="paragraph1">
            {UserName}
          </Text>
        </Box>
        <Button icon>
          {/* <img src="/images/assets/iconMoreLight.svg" alt="" /> */}
          <Dots />
        </Button>
      </CardHead>
      <CardBody>
        <img src={Post} className={filter} alt={description} />
      </CardBody>
      <CardFooter>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <Button icon>
              <img src="/images/assets/heart1.png" alt="Curtidas" />
            </Button>
            {likes}
            <Button icon>
              <img src="/images/assets/message-circle.png" alt="comentarios" />
            </Button>
            {likes}
            <Button icon>
              <img src="/images/assets/send.png" alt="compartilhar" />
            </Button>
          </Box>
          <Button icon>
            <img src="/images/assets/bookmark.png" alt="salvar" />
          </Button>
        </Box>
        <Box display="flex" alignItems="center">
          <img src={avatar} alt="Nicolas Cage" />
          <Text tag="p" variant="comments">
            So excited to play this new...
          </Text>
          <Button comments>
            <Text tag="p">Mais</Text>
          </Button>
        </Box>
      </CardFooter>
    </CardWrapper>
  );
}
