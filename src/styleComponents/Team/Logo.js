import styled from 'styled-components'

export const TeamLogo = styled.img`
    height: 225px;
    width: 225px;
    margin-left:auto;
    margin-right: auto;
    margin-bottom: 30px;
    display: ${props => (props.dnone ? 'visible' : 'none')};

    @media (max-width: 1160px) {
        display: ${props => (props.dnone ? 'none' : 'block')};
        height: 180px;
        width: 180px;
        margin-top:30px;
        margin-left: 5%;

    @media (max-width: 600px) {
        height: 200px;
        display: ${props => (props.dnone ? 'block' : 'none')};
        width: 200px;
        margin-left:auto;
        margin-right:auto;
        margin-bottom: 0;
        margin-top:0px;
`;