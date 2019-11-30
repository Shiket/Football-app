import styled, { keyframes } from 'styled-components';
import { slideInLeft } from 'react-animations';

const SlideLeft = keyframes`${slideInLeft}`;

export const LeagueInfo = styled.div`
    min-width: 380px;
    margin-top:5vh;
    height:100%;
    max-height:638px;
    display:flex;
    flex-direction:column;
    background-color:#272727a9;
    animation: 0.2s ${SlideLeft};

@media (max-width: 1050px){
    display: none;
}

@media (max-height: 457px){
    display:none;
}
`;