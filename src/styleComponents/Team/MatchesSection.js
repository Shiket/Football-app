import styled from 'styled-components'

export const MatchesSection = styled.div`
    display:flex;
    flex-direction:column;
    width:25%;
    overflow-y:auto;
    max-height:calc(99vh - 200px);
    padding-left:2%;

    @media(max-width: 1300px) {
        overflow-y: visible;
        width:100%;
        align-items:center;
    }
`