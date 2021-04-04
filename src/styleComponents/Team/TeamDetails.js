import styled from 'styled-components'

export const Description = styled.div`
    margin-left:10px;
    padding-right:8px;
    overflow-y:auto;
    text-align: justify;
    text-justify: inter-word;
    font-size:19px;
    max-height:45%;

@media(max-width:1920px){
    font-size:18px;
    padding-right:8px;
    max-height:40%;
}

    @media(max-width: 1300px){
        width:90%;
        min-height:150px;
        height:100%;
        max-height:100%;
        margin-left:4%;
        font-size:17px;
    }
`;