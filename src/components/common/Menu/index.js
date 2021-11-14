import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { MenuWrapper, MenuLogedWrapper } from './styles/MenuWrapper';
import Logo from '../../../assets/Logo';
import { Button } from '../Button';
import Text from '../../foundation/Text';
import TextField from '../../forms/TextFild';
import PerfilImg from '../PerfilImg';
import { Box } from '../../foundation/layout/Box';
import { loginService } from '../../../service/login/loginServie';

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

// =====================MENU LOGADO ================================ //
export function MenuLoged({ onNewPostClick, avatar }) {
  const [searhClick, setSearhClick] = useState(false);
  const redirect = useRouter();
  // Logout
  const handleLogout = async () => {
    await loginService.logout(null);
    redirect.push('/');
  };

  return (
    <MenuLogedWrapper>
      {/* logo */}
      <MenuLogedWrapper.Left>
        <Logo />
        {/* Icone  desativado no memento */}
        {/* <MobileIcon/> */}
      </MenuLogedWrapper.Left>
      {/* Menu */}
      <MenuLogedWrapper.Central searhClick={searhClick}>
        <form>
          <TextField placeholder="Pesquisa" search />
        </form>
      </MenuLogedWrapper.Central>
      {/* login/cadastro */}
      <MenuLogedWrapper.Right>
        {/* Novo Post */}
        <Button icon onClick={onNewPostClick} order={{ xs: '3', md: '1' }}>
          <img src="/images/assets/postIcon.png" alt="Novo Post" />
        </Button>
        {/* Botao de pesquisa (apenas no mobile) */}
        <Button
          icon
          onClick={() => setSearhClick(!searhClick)}
          order={{ xs: '2', md: '' }}
          display={{ xs: 'block', md: 'none' }}
        >
          <img src="/images/lupa.svg" alt="Pesquisa" style={{ width: '35px' }} />
        </Button>
        {/* Botao de Feed */}
        <Button icon href="feed" order={{ xs: '1', md: '2' }}>
          <img src="/images/assets/home.png" alt="Início" />
        </Button>
        {/* Botao de curtidas */}
        <Button icon order={{ xs: '3', md: '3' }}>
          <img src="/images/assets/heart.png" alt="Curtidas" />
        </Button>
        {/* Botao de Profile */}
        <Box order={{ xs: '5', md: '4' }} dropMenu>
          <Button icon href="profile">
            <PerfilImg
              avatar={avatar}
            />
          </Button>
          <Box className="dropMenuItem">
            <Button icon>
              <Text variant="paragraph1">Perfil</Text>
            </Button>

            <Button icon>
              <Text variant="paragraph1" onClick={handleLogout}>Logout</Text>
            </Button>
          </Box>
        </Box>
      </MenuLogedWrapper.Right>
    </MenuLogedWrapper>
  );
}
