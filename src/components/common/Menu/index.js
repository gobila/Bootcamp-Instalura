import React from 'react';
import { MenuWrapper } from './styles/MenuWrapper';
import Logo from '../../../assets/Logo';
import { Button } from '../Button';
import Text from '../../foundation/Text';

export default function Menu() {
  const link = [{
    texto: 'Home',
    url: '/',
  }, {
    texto: 'Perguntas frequentes',
    url: '/faq',
  }, {
    texto: 'Sobre',
    url: '/sobre',
  },
  ];
  return (
    <MenuWrapper>
      {/* logo */}
      <MenuWrapper.Left>
        <Logo />
        {/* Icone  desativado no memento */}
        {/* <MobileIcon/> */}
      </MenuWrapper.Left>
      {/* Menu */}
      <MenuWrapper.Central>
        {link.map((i) => (
          <li key={i.url}>
            <Text tag="a" variant="smallestException" href={i.url}>
              {i.texto}
            </Text>
          </li>
        ))}
      </MenuWrapper.Central>
      {/* login/cadastro */}
      <MenuWrapper.Right>
        <Button ghost variant="primary.main">
          Entrar
        </Button>
        <Button
          variant="primary.main"
        >
          Cadastrar
        </Button>
      </MenuWrapper.Right>
    </MenuWrapper>
  );
}
