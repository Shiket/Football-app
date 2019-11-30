import styled, { keyframes } from 'styled-components';
import { slideInRight, slideInLeft } from 'react-animations';

const slideRight = keyframes`${slideInRight}`;
const slideLeft = keyframes`${slideInLeft}`;

export const LandingSection = styled.div`
    width: 100%;
    display:flex;
    justify-content:center;
    height:67vh;
    min-height:180px;
    animation: 0.2s ${slideLeft};
    overflow:auto;
    padding-bottom:10px;

@media (max-height: 490px) {
    width: 100%;
    display:flex;
    justify-content:center;
    height:50vh;
    min-height:180px;
    overflow:auto;
    padding-bottom:10px;
  }
`

export const FavTeamsSection = styled.div`
    width: 82%;
    display:flex;
    justify-content:center;
    height:calc(67vh - 10px);
    animation: 0.2s ${slideRight};
    min-height:180px;
    overflow:auto;
    background-color: #020608b0;


@media (max-height: 490px) {
    width: 82%;
    display:flex;
    justify-content:center;
    height:calc(50vh - 10px);
    min-height:180px;
    overflow:auto;
}
`
export const SignInMessage = styled.div`
    display:flex;
    font-size: 25px;
    color: #fff;
    margin-bottom: 30px;


@media (max-width: 700px) {
    font-size: 17px;
    text-align:center;
}
`