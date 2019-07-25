import styled from 'styled-components'

export const Input = styled.input`
      color: ${({ theme }) => theme.colors.white};
      border: 3px solid ${({ theme }) => theme.colors.farGray};
      background-color: ${({ theme }) => theme.colors.darkGray};
      -webkit-border-radius: 8px;
      -moz-border-radius: 8px;
      border-radius: 8px;
      display:block;
      font-size:1em;
      max-width:370px;
      width:85%;
      margin-bottom:40px;
      padding-left:12px;
      height:41px;
      box-sizing: border-box;
    
   ::placeholder {
      color: #fff;
   }`;