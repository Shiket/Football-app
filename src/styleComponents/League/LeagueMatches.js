import styled from 'styled-components'

export const LeagueMatches = styled.span`
    font-size: 14px;
    display:flex;
    justify-content: space-between
    margin-bottom:3px;
    padding-right:5%;
    padding-left:5%;
`;

export const Matches = styled.div`
    border-right: 3px solid #272727a9;
    border-bottom: 3px solid #272727a9;
    border-left: 3px solid #272727a9;
    border-top: 3px solid #fff;
    padding-bottom:10px;

@media (max-height: 764px) {
    height:200px
    overflow:auto;
    border-right: 0px;
}

@media (max-height: 560px){
    border-top: none;
    height:300px;
    overflow:auto;
    border-right: 0px;
    }

@media (max-height: 457px){
    display:none;
}
`;