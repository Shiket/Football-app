import styled from 'styled-components'

export const SocialMediaWrapper = styled.div`
  margin-left:15%;
  margin-top: 20px;
  margin-bottom: 42px;

  @media (max-width: 1160px) {
    display:flex;
    flex-direction:column;
    margin-left:0px;
    margin-top:0px;
  }

  @media (max-width: 600px) {
    display:block;
    margin-left:auto;
    margin-right:auto;
    margin-top:20px;
   }
`;
