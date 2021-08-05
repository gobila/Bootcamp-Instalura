import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariantsMap } from '../../foundation/Text';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';
import { propsToStyle } from '../../theme/utils/propsToStyle';

const ButtonGhost = css`
    color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
    background-color: transparent;
`;
const ButtonDefault = css`
    color:${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
    background-color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
`;

export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius: 8px;
    /* ${TextStyleVariantsMap.smallestException} */
    /* color: white;
    background-color: #D7385E; */
    ${function (props) {
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

    ${propsToStyle('margin')}
    ${propsToStyle('display')}
`;

export default Button