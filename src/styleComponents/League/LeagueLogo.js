import styled from 'styled-components'

export const LeagueLogo = styled.img`
    height: 160px;
    width: 160px;
    margin-top:2vh;
    margin-bottom: 2vh;
    display:flex;
    justify-content: center;
    align-items:center;

    @media (max-height: 560px) {
    display:none;
    }
    `;
