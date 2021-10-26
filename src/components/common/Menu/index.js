import React from 'react';
import PropTypes from 'prop-types';
import { MenuWrapper, MenuLogedWrapper } from './styles/MenuWrapper';
import Logo from '../../../assets/Logo';
import { Button } from '../Button';
import Text from '../../foundation/Text';
import TextField from '../../forms/TextFild';
import PerfilImg from '../PerfilImg';

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

export function MenuLoged({ onNewPostClick }) {
  return (
    <MenuLogedWrapper>
      {/* logo */}
      <MenuLogedWrapper.Left>
        <Logo />
        {/* Icone  desativado no memento */}
        {/* <MobileIcon/> */}
      </MenuLogedWrapper.Left>
      {/* Menu */}
      <MenuLogedWrapper.Central>
        <form style={{ width: '60%' }}>
          <TextField placeholder="Pesquisa" search />
        </form>
      </MenuLogedWrapper.Central>
      {/* login/cadastro */}
      <MenuLogedWrapper.Right>
        <Button icon onClick={onNewPostClick}>
          <img src="/images/assets/postIcon.png" alt="Novo Post" />
        </Button>
        <Button icon>
          <img src="/images/assets/home.png" alt="Início" />
        </Button>
        <Button icon>
          <img src="/images/assets/heart.png" alt="Curtidas" />
        </Button>
        <Button icon>
          <PerfilImg />
        </Button>
      </MenuLogedWrapper.Right>
    </MenuLogedWrapper>
  );
}
