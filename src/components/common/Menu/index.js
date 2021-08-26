import React from 'react';
import PropTypes from 'prop-types';
import { MenuWrapper } from './styles/MenuWrapper';
import Logo from '../../../assets/Logo';
import { Button } from '../Button';
import Text from '../../foundation/Text';

export default function Menu({ onCadastrarClick }) {
  const link = [{
    texto: 'Home',
    url: '/',
  }, {
    texto: 'Perguntas frequentes',
    url: '/faq',
  }, {
    texto: 'Sobre',
    url: '/about',
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
            {/* usando o NextLink do next/link para fazer o roteamento */}
            {/* <NextLink href={link.url}>
              <a>
              {link.texto}
              <a>
            </NextLink> */}
            {/* Aqui o componete Text se comporta como o NextLink pois faz uma verificação
                atras do atributo href, vê componets Link e Text */}
            <Text tag="a" variant="smallestException" href={i.url}>
              {i.texto}
            </Text>
          </li>
        ))}
      </MenuWrapper.Central>
      {/* login/cadastro */}
      <MenuWrapper.Right>
        <Button ghost variant="primary.main" href="/app/login">
          Entrar
        </Button>
        <Button
          variant="primary.main"
          onClick={onCadastrarClick}
        >
          Cadastrar
        </Button>
      </MenuWrapper.Right>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  onCadastrarClick: PropTypes.func.isRequired,
};
