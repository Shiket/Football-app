import styled from 'styled-components'

export const FormWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.contentBg};
  max-width:650px;
  width:85%;
  min-height:300px;
  margin-top:5vh;
  padding: 10px 0;
  display:flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  border-radius: 9px;
`;