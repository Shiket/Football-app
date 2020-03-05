import styled from 'styled-components'

export const Description = styled.div`
    margin-left:10px;
    padding-right:8px;
    overflow-y:auto;
    text-align: justify;
    text-justify: inter-word;
    max-height:270px;

    @media(max-width: 1300px){
        width:90%;
        overflow-y: auto;
        min-height:150px;
        max-height: 300px;
        margin-left:4%;
    }
`;