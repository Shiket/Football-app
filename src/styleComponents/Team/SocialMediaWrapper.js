import styled from 'styled-components'

export const SocialMediaWrapper = styled.div`
  margin-left:14%;
  margin-top: 20px;
  margin-bottom: 8%;
  display: ${props => (props.dnone ? 'none' : 'flex')};

  @media (max-width: 1160px) {
    display:flex;
    flex-direction:column;
    margin-top:0px;
    margin-left:0px;
    margin-bottom: 0px;
    display: ${props => (props.dnone ? 'flex' : 'none')};
  }

  @media (max-width: 600px) {
    display: ${props => (props.dnone ? 'none' : 'flex')};
    flex-direction:row;
    justify-content:center
    margin-bottom: 25px;
   }
`;
