import styled from 'styled-components'

export const DescriptionRow = styled.div`
  display: flex;
  align-items: center;
  height:100%;
  margin-top:13px;
  padding-left:10%;

   @media (max-width: 1160px) {
        display: ${props => (props.dnone ? 'none' : 'visible')};
   }

   @media (max-width: 600px) {
        display:flex;
        align-self: flex-start;
   }
`;

export const MatchesRow = styled.div`
  display: flex;
  margin-top:16px;
  flex-direction:row;
  align-items: center;
  width:100%;
`;