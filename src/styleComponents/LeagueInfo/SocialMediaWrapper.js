import styled from 'styled-components'

export const SocialMediaWrapper = styled.div`
  margin-left:15%;
  margin-top: 20px;
  margin-bottom: 20px;
  display: ${props => (props.dnone ? 'none' : 'visible')};

  @media (max-width: 1160px) {
    display:flex;
    flex-direction:column;
    margin-top:0px;
    margin-left:0px;
    margin-bottom: 0px;
    display: ${props => (props.dnone ? 'visible' : 'none')};
  }

  @media (max-width: 600px) {
    display:block;
    margin-left:auto;
    margin-right:auto;
    display: ${props => (props.dnone ? 'none' : 'visible')};
   }
`;
