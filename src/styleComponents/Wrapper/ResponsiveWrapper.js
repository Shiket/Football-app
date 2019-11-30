import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';

const Zoom = keyframes`${zoomIn}`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  justify-content: ${props => (props.center ? 'center' : 'start')};
  flex-direction:  ${props => (props.col ? 'column' : 'row')};
}`


export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: ${props => (props.center ? 'center' : 'start')};
  flex-direction:  ${props => (props.col ? 'column' : 'row')};
  animation: 0.2s ${Zoom};

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
    width:100%;
  }

  @media (max-width: 600px) {
    flex-direction:column;
    width:100%;
  }
`;
export const DetailsMediumScreenWrapper = styled.div`

  @media (max-width: 1160px) {
    display:flex;
    flex-direction:  ${props => (props.col ? 'column' : 'row')};
    width:100%;
  }

  @media (max-width: 600px) {
    flex-direction:column;
    width:100%;
  }
`;
