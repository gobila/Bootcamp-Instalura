import React from 'react';
import styled from 'styled-components';
import Logo, { MobileIcon } from '../../../assets/Logo'

const FooterWrapper = styled.footer`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px; 
  padding-right: 28px;
  padding-left: 28px;
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: ${({ theme }) => theme.colors.primary.main.color};
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;

export default  function Footer(props){
  return(
    <FooterWrapper {...props}>
      <a href="#">
        <MobileIcon/>
      </a>
      <p>
        Orgulhosamente criado durante 
        {' 27/07/2021 '}
        a
        {' 20/10/2021 '}
        <a href="https://www.alura.com.br/">
          <span>Bootcamp Alura JAM Stack</span>
        </a>
      </p>
    </FooterWrapper>
  )
}