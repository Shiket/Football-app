import styled from 'styled-components'

export const ContentSection = styled.div`
    display:flex;
    flex-direction:column;
    width:55%;
    padding-left:2%;
    max-height:calc(99vh - 200px);
    overflow:auto;

    @media (max-width: 1300px) {
        display:flex;
        flex-direction: column;
        overflow: hidden;
        min-height: 200px;
        height:100%;
        width:100%;
    }
`