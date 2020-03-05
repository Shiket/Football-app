import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';

const Zoom = keyframes`${zoomIn}`;

export const MainWrapper = styled.div`
  display: flex;
  animation: 0.2s ${Zoom};
  overflow-y:auto;

  @media (max-width: 1300px) {
    flex-direction:column;
    overflow-y:auto; // to
    height: calc(94vh - 140px); //to
  }
`;
