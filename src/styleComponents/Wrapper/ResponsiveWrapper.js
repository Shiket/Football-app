import styled from 'styled-components'

export const ResponsiveWrapper = styled.div`
  display: flex;
  justify-content: ${props => (props.center ? 'center' : 'start')};
  flex-direction:  ${props => (props.col ? 'column' : 'row')};
}`


export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: ${props => (props.center ? 'center' : 'start')};
  flex-direction:  ${props => (props.col ? 'column' : 'row')};

  @media (max-width: 1160px) {
    display:flex;
    flex-direction:column;
    width:100%;
  }

  @media (max-width: 600px) {
    display:flex;
    flex-direction:column;
    margin-top:0px;
  }
`;

export const MediumScreenWrapper = styled.div`

  @media (max-width: 1160px) {
    display:flex;
    flex-direction:row;
    justify-content:space-around;
  }

  @media (max-width: 600px) {
    flex-direction:column;
    width:100%;
  }
`;