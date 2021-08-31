import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { TextStyleVariantsMap } from '../../foundation/Text';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';
import { propsToStyle } from '../../theme/utils/propsToStyle';
import Link from '../Link';

const ButtonGhost = css`
    color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
    background-color: transparent;
`;
const ButtonDefault = css`
    color:${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
    background-color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
`;

const ButtonWrapper = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius: 8px;
    /* ${TextStyleVariantsMap.smallestException} */
    /* color: white;
    background-color: #D7385E; */
    ${function BtnProps(props) {
    if (props.ghost) {
      return ButtonGhost;
    }
    return ButtonDefault;
  }}
    transition: opacity${({ theme }) => theme.transition};
    border-radius: ${({ theme }) => theme.borderRadius};
    &:hover,
    &:focus {
        opacity: .5;
    }

    ${breakpointsMedia({
    xs: css`
            ${TextStyleVariantsMap.smallestException}
            padding: 8px 16px;
        `,
    md: css`
            ${TextStyleVariantsMap.paragraph1}
        `,
  })}
    &:disabled {
        cursor: not-allowed;
        opacity: .2;
    }
    ${({ fullWidth }) => fullWidth && css`
        width: 100%;
    `};

    ${propsToStyle('margin')}
    ${propsToStyle('display')}
`;

export function Button({ href, children, ...props }) {
  const hasHref = Boolean(href);
  const tag = hasHref ? Link : 'button';
  return (
    <ButtonWrapper
      as={tag}
      href={href}
      {...props}
    >
      {children}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  href: undefined,
};

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};
