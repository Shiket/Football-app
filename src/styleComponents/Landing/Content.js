import styled from 'styled-components'

export const LandingSection = styled.div`
    width: 100%;
    display:flex;
    justify-content:center;
    height:67vh;
    min-height:180px;
    overflow:auto;
    padding-bottom:10px;

@media (max-height: 490px) {
    width: 100%;
    display:flex;
    justify-content:center;
    height:50vh;
    min-height:180px;
    overflow:auto;
    padding-bottom:10px;
  }
`

export const FavTeamsSection = styled.div`
    width: 82%;
    display:flex;
    justify-content:center;
    height:calc(67vh - 10px);
    min-height:180px;
    overflow:auto;
    background-color: #020608b0;


@media (max-height: 490px) {
    width: 82%;
    display:flex;
    justify-content:center;
    height:calc(50vh - 10px);
    min-height:180px;
    overflow:auto;
}
`