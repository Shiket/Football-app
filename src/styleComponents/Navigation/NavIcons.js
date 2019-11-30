import styled, { keyframes } from 'styled-components'
import { rollIn } from 'react-animations';

const roll = keyframes`${rollIn}`;

export const NavIcon = styled.img`
    width:33px;
    height:33px;
    margin-left:25px;
    cursor: pointer;
`;

export const NavBall = styled.img`
    width:33px;
    height:33px;
    margin-left:30px;
    cursor: pointer;
    animation: 2s ${roll};
`;