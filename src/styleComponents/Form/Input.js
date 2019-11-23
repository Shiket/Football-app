import styled from 'styled-components'

export const Input = styled.input`
      border-top:none;
      border-left:none;
      border-right:none;
      border-bottom: 3px solid #fff;
      background-color: #00000000;
      color: #fff;
      font-size:1.1em;
      font-family: 'Quicksand' ,'Helvetica Neue light';
      max-width:500px;
      min-width:200px;
      width:100%;
      margin-bottom:40px;
      height:41px;
   :focus{
      outline:none;
      border-bottom: 3px solid #6b50ff;
      background-color: #00000000;
   }
   ::placeholder {
      color: #fff;
   }

    @media (max-width: 630px) {
      width:80%;
  }
  @media (max-height: 710px) {
      font-size:0.9em;
      height:20px;
      border-bottom: 2px solid #fff;
  }

   @media (max-height: 580px) {
    margin-bottom:20px;
  }
`;