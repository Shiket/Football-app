import styled from  'styled-components'

export const Button = styled.button`
  margin:0px 20px 25px 0;
  padding:8px 30px;
  font-family: 'Quicksand' ,'Helvetica Neue light';
  margin-left:auto;
  margin-right:auto;
  background-color: ${({theme}) => theme.colors.transparent};
  color: ${({ theme }) => theme.colors.white}
  font-size:1em;
  cursor: pointer;
  border: 3px solid #fff;
  border-color: ${({ theme }) => theme.colors.white} !important;
  :disabled{
    color:  ${({ theme }) => theme.colors.farGray};
    border-color:${({ theme }) => theme.colors.farGray} !important;
    cursor: default;
  }
  @media (max-height: 710px) {
    margin:0px 0px 15px 0;
    padding:5px 20px;
  }

   @media (max-height: 580px) {
    margin:0px 0px 15px 0;
    padding:3px 20px;
  }
`;