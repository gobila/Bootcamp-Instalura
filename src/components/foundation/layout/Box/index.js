import styled from 'styled-components';
import { propsToStyle } from '../../../theme/utils/propsToStyle';

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
`;
