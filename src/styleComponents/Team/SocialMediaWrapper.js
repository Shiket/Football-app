import styled from 'styled-components'

export const SocialMediaWrapper = styled.div`
  margin-top: 2vh;
  display:flex;
  justify-content:space-around;
  width:100%;

  @media(max-width: 1300px){
    margin-top:10px;
    width:450px;
    margin-left: 8%;
  }

  @media(max-width: 600px){
    margin-top:10px;
    width:100%;
    margin-left: 0px;
  }
`;
