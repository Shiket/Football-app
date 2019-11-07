import styled from 'styled-components'

export const LastMatches = styled.div`
    display:flex;
    flex-direction:column;
    width:3%;
    padding-bottom:10px;
    width:20%;

    @media (max-width: 1400px) {
        display:flex;
        flex-direction: column;
        width:43%;
        margin-right:3%;
    }
    @media (max-width: 1160px) {
        display:none;
    }
`