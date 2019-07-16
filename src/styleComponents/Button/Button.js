import styled from 'styled-components'

export const Button = styled.button`
  margin:0px 0 25px 0;
  padding:6px 20px;
  margin-left:auto;
  margin-right:auto;
  background-color: ${({theme}) => theme.colors.transparent};
  color: ${({ theme }) => theme.colors.white}
  font-size:1em;
  border-style:solid;
  border-color: ${({ theme }) => theme.colors.white} !important;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 15px;

  :disabled{
    color:  ${({ theme }) => theme.colors.farGray};
    border-color:${({ theme }) => theme.colors.farGray} !important;
  }
`
