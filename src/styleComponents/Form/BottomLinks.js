import styled from 'styled-components'

export const BottomLinks = styled.p`
  align-self: flex-start;
  margin-left:10%;
  margin-top:10px;
  margin-bottom:10px;

  @media (max-height: 710px) {
      align-self:center;
      font-size:0.9em;
      margin-left:0%;
      display:flex;
      justify-content:center;
  }
`;