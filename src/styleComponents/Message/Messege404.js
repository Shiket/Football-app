import styled from 'styled-components'

export const Message = styled.h1`
    background-color: ${({ theme }) => theme.colors.dark};
    margin-top: 15vh;
    padding: 20px 40px;
    border: 2px solid ${({ theme }) => theme.colors.white};
`;