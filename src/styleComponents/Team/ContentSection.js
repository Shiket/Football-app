import styled from 'styled-components'

export const ContentSection = styled.div`
    display:flex;
    flex-direction:column;
    width:80%;
    margin-left:2%;
    max-height:calc(99vh - 200px);
    overflow:auto;
`;

export const DescriptionSection = styled.div`
    display:flex;
    flex-direction: column;
    width:70%;
    max-height:350px;
    margin-right:3%;

    @media (max-width: 1400px) {
        display:flex;
        flex-direction: column;
        width:57%;
        margin-right:3%;
    }

     @media (max-width: 1160px) {
        width:100%;
        max-height:100%;
     }
`