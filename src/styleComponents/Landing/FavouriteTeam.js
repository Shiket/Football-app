import styled from 'styled-components'

export const FavouriteTeamsWrapper = styled.div`
  display: flex;
  flex-direction:column;
  font-size:18px;
  width:100%;
`;

export const FavouriteTeamRow = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content: space-around;
  padding-top:10px;
  padding-bottom:10px;
    background-color: #7d7d7db8;
  :nth-child(2n+2){
     background-color: #6363637a;
  }
`
export const FavTeamLogo = styled.img`
  width:45px;
  height:45px;
  margin-left:5%;

  @media (max-width: 1250px) {
    margin-left:10px;
    margin-right:10px;
  }
`

export const FavTeamName = styled.div`
    margin-right:30px;
    width:300px;
`

export const LeagueName = styled.div`
    margin-right:30px;
    min-width:200px;
  @media (max-width: 820px) {
    display:none;
  }
`
export const SocialMediaIcon = styled.img`
    width:30px;
    height:30px;
    margin-left:7px;
    margin-right:7px;
`
export const SocialMediaIconsWrapper = styled.div`
    width:176px;
    display:flex;
    justify-content:flex-start;

  @media (max-width: 550px) {
    display:none;
  }
`