import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Box } from '../../foundation/layout/Box';
import Text from '../../foundation/Text';
import FormPost from '../../patterns/FormPost';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';
import { Button } from '../Button';

const CardWrapper = styled.div`
  max-width: 600px;
  display:flex;
  flex-direction: column;
  background-color:${({ theme }) => (theme.colors.background.light.color)};
  ${breakpointsMedia({
    xs: css`
      max-width: 100%;
      flex:1;
      margin: 0px;
      `,
    sm: css`
      max-width: 576px; 
      `,
    md: css`
      flex:0;
      margin: 25px auto 25px auto;
    `,
  })}
`;
const CardHead = styled(Box)`
  /* width: 600px; */
  display: inherit;
  align-items:center;
  img{
    width:50px;
    height: 50px;
    border-radius: 25px;
    /* margin-right:19px */
  }
  ${breakpointsMedia({
    xs: css`
        padding: 5px 25px;
        `,
    md: css`
        padding: 25px 25px;
        `,
  })}
`;
const CardBody = styled(Box)`
  display:flex;
  flex-direction: column;
  max-width: 100%;
  min-height: 50vh;
  max-height: 70vh;
  img{
    object-fit: fill;
  }
`;
const CardFooter = styled(Box)`
  margin: 10px 25px;
  max-width: 600px;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  img{
    width:150px;
    height: 150px;
    border-radius: 25px;
    margin-right:auto
  }
  input + label{
    cursor: pointer;
  }
  input[type="radio"]:checked + label{
    border: red 5px solid;
  }
`;

export function CardNewPost({
  propsDoModal,
}) {
  const [image, setImage] = useState('');
  const [filtro, setFiltro] = useState('');

  return (
    <CardWrapper {...propsDoModal}>
      <CardHead justifyContent="flex-end">
        <Button
          ghost
          data-modal-btn-close="true"
        >
          ❌ Fechar
        </Button>
      </CardHead>
      <CardBody>
        <Box maxHeight="50vh" display="flex" marginBottom="10px" justifyContent="center">
          <img
            className={filtro}
            src={image || 'https://place-hold.it/550/9c27b/fffff&text=%F0%9F%99%8E%E2%80%8D%E2%99%82%EF%B8%8F'}
            alt=""
          />
        </Box>
        <Text
          variant="smallestException"
          textAlign="center"
          margin="5px"
        >
          Formatos suportados: jpg, png, svg e xpto.
        </Text>
      </CardBody>
      <CardFooter>
        <FormPost
          onSubmit={(e) => {
            e.preventDefault();
            setImage(e.target.photoUrl.value);
          }}
          photoOk={image}
          filterList={(e) => setFiltro(e.target.value)}
        />
      </CardFooter>
    </CardWrapper>
  );
}
