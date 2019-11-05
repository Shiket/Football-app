import styled from 'styled-components'

export const LeagueInfo = styled.div`
    min-width: 380px;
    margin-top:3vh;
    height:100%;
    display:flex;
    flex-direction:column;
    background-color:#272727a9;
    overflow:auto;

@media (max-width: 1050px) {
    display: none;
}
`;