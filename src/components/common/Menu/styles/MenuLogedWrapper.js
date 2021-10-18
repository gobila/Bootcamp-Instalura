import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { TextStyleVariantsMap } from '../../../foundation/Text';

export const MenuLogedWrapper = styled.nav`
  font-family: 'Rubik', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 18px;
  padding-left: 28px;
  padding-right: 28px;
  margin-bottom: 2px;
  z-index: 1;
  ${breakpointsMedia({
    md: css`
      justify-content: flex-start;
      margin-top: 32px;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      padding: 0 16px;
      max-width: 768px;
    `,
    lg: css`
      max-width: calc(100%);
      margin-top: 0px;
      padding-top: 10px;
      box-shadow: black 0px 1px 1px 1px;
    `,
    xl: css`
      max-width: calc(100% *1);
    `,
    xxl: css`
      max-width: calc(100% *1);
      padding: 10px 20%;
    `,
  })}
`;

MenuLogedWrapper.Left = styled.div`
  padding: 0;
  margin: 0;
  order: 1;
  ${breakpointsMedia({
    xs: css`
        max-width: calc(100% *0.4);
        margin:0px
        justify-content: flex-start;
        height: calc(100%);
        order: 1;
        svg{
          width: calc(100%);
        }
    `,
    md: css`
      order: initial;
      padding-right: 16px;
    `,
    xl: css`
    width: 10%;
    `,
  })}
`;

MenuLogedWrapper.Central = styled.div`
  padding: 0;
  margin: 0;
  order: 3;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 17px;
  border-top: 1px solid #88989E;
  border-bottom: 1px solid #88989E;
  padding: 12px;
  
  ${breakpointsMedia({
    md: css`
      max-width: calc(100% *0.5);
      justify-content: flex-end;
      flex: 1;
      order: initial;
      border: none;
      margin: 0;
      padding-top: 0;
      padding-bottom: 0;
    `,
    xl: css`
      max-width: calc(100% *0.6);
    `,
  })}
  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: #88989E;
    transition: 200ms ease-in-out;
    ${breakpointsMedia({
    xs: css`
        ${TextStyleVariantsMap.smallestException}
    `,
    md: css`
      ${TextStyleVariantsMap.paragraph1}
      font-size: 14px;
    `,
    lg: css`
      ${TextStyleVariantsMap.paragraph1}
      font-size: 14px;
    `,
  })}
    &:hover,
    &:focus {
      font-weight: 500;
      color: #070C0E;
      
    }
  }
`;

MenuLogedWrapper.Right = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex: 1;
  order: 2;
  justify-content: flex-end;
  ${breakpointsMedia({
    xs: css`
      justify-content: flex-end;
      order: 2;
    `,
    sm: css`
      max-width: calc(100% *0.4);
      justify-content: flex-end;
      order: 2;
    `,
    md: css`
      max-width: calc(100% *0.4);
      order: initial;
      justify-content: center;
    `,
    xl: css`
      max-width: calc(100% *0.3);
      
      justify-content: flex-end;
    `,
  })}
`;
