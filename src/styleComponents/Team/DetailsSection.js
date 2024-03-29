import styled from 'styled-components'

export const Details = styled.div`
    padding-top:5vh;
    width:20%;
    min-width:300px;
    overflow-y:auto;
    display:flex;
    flex-direction: column;
    background-color: #00000052;

  @media (max-width: 1300px) {
    padding-top: 30px;
    width:100%;
    min-height:640px;
    overflow-y: hidden;
  }

  @media(max-width:400px){
    min-width:100%;
  }
`;