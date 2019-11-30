import styled, { keyframes } from 'styled-components';
import { fadeInRight } from 'react-animations';

const fadeRight = keyframes`${fadeInRight}`;

export const MenuWrapper = styled.div`
    width:450px;
    height:100vh;
    overflow-y:auto;
    position: absolute;
    display:flex;
    align-item:center;
    flex-direction:column;
    animation: 0.3s ${fadeRight};
    right:0;
    top:0;
    background-color: #1b1b1bfa;
    z-index: 1;

  @media (max-width: 650px) {
    width:100%;
  }
`;