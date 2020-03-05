import styled from 'styled-components'

export const DetailsRow = styled.a`
  display: flex;
  align-items: center;
  min-height:30px;
  margin-top:15px;
  margin-left:8%;
`;

export const MatchesRow = styled.div`
  display:flex;
  min-height:52px;
  margin-top:5px;
  flex-direction:row;
  padding: 0 2%;
  align-items: center;
  width:100%;

  @media (max-width: 1300px) {
    width:380px;
  }
`;