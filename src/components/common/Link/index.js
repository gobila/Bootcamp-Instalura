import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import get from 'lodash/get';

const StyledLink = styled.a`
  color: inherit;
  ${({ theme, color }) => (color
    ? `color: ${get(theme, `colors.${color}.color`)}`
    : 'color: inherit;')};
  text-decoration: none;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  &:hover,
  &:focus {
    opacity: .5;
  }
`;
export default function Link({ children, href, ...props }) {
  return (
    // passHref é o atributo que passa o href para o filho geralmente um a
    // se nao tiver o href fica oculto
    <NextLink href={href} passHref>
      <StyledLink {...props}>
        {children}
      </StyledLink>
    </NextLink>

  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
