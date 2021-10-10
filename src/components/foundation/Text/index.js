import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import styled, { css } from 'styled-components';
import { propsToStyle } from '../../theme/utils/propsToStyle';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';
import Link from '../../common/Link';
import { WebsitePageContext } from '../../wrappers/WebsitePage/context';

export const TextStyleVariantsMap = {
  paragraph1: css`
        font-size:${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
        font-weight:${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
        line-height:${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
    `,
  smallestException: css`
        font-size:${({ theme }) => theme.typographyVariants.smallestException.fontSize};
        font-weight:${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
        line-height:${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
    `,
  title: css`
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.titleXS.fontSize};
      font-weight: ${theme.typographyVariants.titleXS.fontWeight};
      line-height: ${theme.typographyVariants.titleXS.lineHeight};
    `}
    ${breakpointsMedia({
    md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.title.fontSize};
          font-weight: ${theme.typographyVariants.title.fontWeight};
          line-height: ${theme.typographyVariants.title.lineHeight};
        `}
      `,
  })}
  `,

};

const TextBase = styled.span`
    ${(props) => TextStyleVariantsMap[props.variant]}
    color: ${(props) => get(props.theme, `colors.${props.color}.color`)};
    ${propsToStyle('textAlign')}
    ${propsToStyle('marginBottom')}
    ${propsToStyle('margin')}


`;

export default function Text({
  tag, variant, children, href, cmsKey, ...props
}) {
  const websitePageContext = useContext(WebsitePageContext);
  const componentContent = cmsKey ? websitePageContext.getCMSContent(cmsKey) : children;

  // const componentContent = cmsKey
  //   ? websitePageContext.getCMSContent(cmsKey)
  //   : children;
  // passando um if para se algum Text tiver um href
  // se tiver ele chama o componet Link que tem o next/Link
  if (href) {
    return (
      <TextBase
        as={Link}
        variant={variant}
        {...props}
        href={href}
      >
        {componentContent}
      </TextBase>
    );
  }
  return (
    <TextBase
      as={tag}
      variant={variant}
      {...props}
    >
      {componentContent}
    </TextBase>

  );
}

Text.propsType = {
  tag: PropTypes.string.isRequired,
  variant: PropTypes.string,
  children: PropTypes.node,
  href: PropTypes.string,
  cmsKey: PropTypes.string,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null, // por causa da teag input que nao tem filho de fato
  href: '',
  cmsKey: undefined,
};
