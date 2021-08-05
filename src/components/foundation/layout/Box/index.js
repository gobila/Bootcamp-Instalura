import styled from 'styled-components';
import { propsToStyle } from '../../../theme/utils/propsToStyle';

export const Box = styled.div`
    ${propsToStyle('flex')}
    ${propsToStyle('display')}
    ${propsToStyle('flexDirection')}
    ${propsToStyle('justifyContent')}
    ${propsToStyle('flexWrap')}
    ${propsToStyle('backgroundImage')}
    ${propsToStyle('backgroundRepeat')}
    ${propsToStyle('backgroundPosition')}
`;
