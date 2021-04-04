import styled from 'styled-components'

export const DetailsRow = styled.a`
    display: flex;
    align-items: center;
    min-height:30px;
    margin: 30px 0 0 8%;

  @media (max-width: 1920px) {
    margin: 20px 0 0 8%;
  }
`;

export const MatchesRow = styled.div`
  display:flex;
  min-height:52px;
  margin-top:20px;
  flex-direction:row;
  padding: 0 2%;
  align-items: center;
  width:100%;

@media(max-width:1920px){
  margin-top:12px;
}

  @media (max-width: 1300px) {
    width:380px;
    margin-top:5px;
  }

  @media (max-width: 450px) {
    width:100%;
  }

  @media( max-height: 1000px){
    min-height:44px;
  }
`;