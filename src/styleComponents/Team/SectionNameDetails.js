import styled from 'styled-components'

export const SectionNameDetails = styled.span`
    font-size: 22px;
    margin: 3vh 0 2vh 8%;

    @media(max-width:1920px){
        font-size: 20px;
    }

    @media(max-width: 1300px){
        font-size:18px;
        margin:15px 8%;
    }

    @media(max-height: 920px) and (min-width:1300px){
        margin-top:2vh;
        margin-bottom: 1vh;
    }
`;