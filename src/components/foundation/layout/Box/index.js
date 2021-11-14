import styled, { css } from 'styled-components';
import { propsToStyle } from '../../../theme/utils/propsToStyle';

export const logedBackground = css`
    background-color:${({ theme }) => theme.colors.background.main.color}
`;

export const dropMenu = css`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    .dropMenuItem{
        display:none;
        border: 2px solid;
        border-radius: 10px;
        margin: 10px;
        position: absolute;
        top: 58px;
        background-color:${({ theme }) => theme.colors.background.main.color};
        width: 70px;
        margin: auto;
        flex-direction: column;
        align-items: center;
        button{
            margin:0px;
            padding:10px;
            :hover{
                background-color:${({ theme }) => theme.colors.secondary.main.color};
                color:${({ theme }) => theme.colors.secondary.main.contrastText};
                width: 100%;
                margin: 0px;
            }
        }
    }
    :hover{
        .dropMenuItem{
            display: flex;
        }
    }
    
`;
export const Box = styled.div`
    ${propsToStyle('flex')};
    ${propsToStyle('display')};
    ${propsToStyle('flexDirection')};
    ${propsToStyle('justifyContent')};
    ${propsToStyle('flexWrap')};
    ${propsToStyle('backgroundColor')};
    ${propsToStyle('backgroundImage')};
    ${propsToStyle('backgroundRepeat')};
    ${propsToStyle('backgroundPosition')};
//modulo 2 aula 3 add
    ${propsToStyle('boxShadow')}
    ${propsToStyle('padding')}
//modulo 3 aula 2 add
    ${propsToStyle('width')}
    ${propsToStyle('listStyle')}
    ${propsToStyle('margin')}
    ${propsToStyle('marginLeft')}
    ${propsToStyle('marginTop')}
    ${propsToStyle('marginBottom')}
    ${propsToStyle('marginRight')}
    ${({ theme, borderRadiusTheme }) => borderRadiusTheme && `border-radius: ${theme.borderRadius}`}
//modulo 5 projeto final
    ${propsToStyle('alignItems')}
    ${propsToStyle('height')}
    ${propsToStyle('maxHeight')}
    ${function BoxProps(props) {
    if (props.loged) {
      return logedBackground;
    }
    return '';
  }}
    ${propsToStyle('order')}
/* dropdown menu */
    ${function BoxProps(props) {
    if (props.dropMenu) {
      return dropMenu;
    }
    return '';
  }}
`;
