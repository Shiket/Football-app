import styled from 'styled-components'

export const DescriptionRow = styled.div`
  display: flex;
  align-items: center;
  margin-top:15px;
  margin-left:10%;

   @media (max-width: 1160px) {
          display: ${props => (props.dnone ? 'none' : 'visible')};
          margin-top:0px;
   }

   @media (max-width: 600px) {
        display:flex;
        margin-top:13px;
   }
`;

export const MatchesRow = styled.div`
  display:flex;
  margin-top:16px;
  min-height:40px;
  flex-direction:row;
  align-items: center;
  min-width: 255px;
  width:100%;
`;