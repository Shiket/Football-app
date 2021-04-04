import styled from 'styled-components'

export const SectionTitle = styled.span`
    font-size:21px;
    margin-top:3vh;
    margin-bottom: 10px;

    @media(max-width: 1300px){
        text-align:center;
        font-size: 18px;
        margin: 15px 0px;
        display: ${props => (props.notVisibleMD ? 'none' : 'block')};
    }
    @media(max-width: 850px){
        display: block;
    }
`;