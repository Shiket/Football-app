import styled from 'styled-components'

export const MainSection = styled.span`
    font-size: 18px;
    margin-top:3vh;
    margin-bottom: 10px;
    margin-left: ${props => (props.marginL ? '8%' : '0px')};

    @media (max-width: 1160px) {
        font-size: 16px;
        margin-bottom: 10px;
        margin-left: ${props => (props.marginL ? '8%' : '0px')};
        display: ${props => (props.dnone ? 'none' : 'visible')};
    }
     @media (max-width: 600px) {
        font-size: 16px;
        margin-bottom: 10px;
        margin-top:25px;
        margin-left:auto;
        margin-right:auto;
        display:block;
`;