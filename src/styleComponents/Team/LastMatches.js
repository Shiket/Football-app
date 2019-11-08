import styled from 'styled-components'

export const LastMatches = styled.div`
    display:flex;
    flex-direction:column;
    width:3%;
    padding-bottom:10px;
    width:20%;
    display: ${props => (props.dnone ? 'none' : 'visible')};

    @media (max-width: 1400px) {
        display:flex;
        flex-direction: column;
        width:43%;
        margin-right:3%;
    }

    @media (max-width: 1160px) {
        display:flex;
        flex-direction: column;
        justify-content:flex-start;
        width:43%;
        padding-right:3%;
    }
    @media (max-width: 600px) {
        margin-left:auto;
        margin-right:auto;
        width:290px;
    }
`