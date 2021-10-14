import React from 'react';
import styled from 'styled-components';
import { Box } from '../../foundation/layout/Box';

const PerfilBox = styled(Box)`
  max-width:50px;
`;
const PerImg = styled.img`
  display: flex;
  width: 100%;
  border-radius: 50%;
`;

export default function PerfilImg() {
  return (
    <PerfilBox>
      <PerImg src="https://avatars.githubusercontent.com/u/71636?v=4" alt="Perfil" />
    </PerfilBox>
  );
}
