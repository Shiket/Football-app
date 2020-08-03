import React from 'react';
import { WrapperCenter, LeagueDetails, BackArrow, LeagueHeader, LeagueLogo, LeagueMatches, SectionHeader, MatchList } from "../../styleComponents";
import { useLocation, useHistory } from 'react-router-dom'
import { IMAGES } from '../../assets/index'

export const NextLeagueMatches = ({nextMatches}) => {
    let location = useLocation();
    let history = useHistory();
    const {state:dataPassed} = location.state;
    let next = '';

    if (typeof(nextMatches)!=="string") {
      next = nextMatches.map(a =>
         <LeagueMatches>
            <div>{a.strEvent.split('vs')[0]} - {a.strEvent.split('vs')[1]}</div>
            <div>{a.dateEvent.slice(5, a.lenght)} - {a.strTime.slice(0, 5)}</div>
         </LeagueMatches> )
    }else next = nextMatches;

    return (
            <LeagueDetails>
                <LeagueHeader onClick={history.goBack}>
                    <WrapperCenter row>
                        <BackArrow src={IMAGES.leftArrow} alt='back arrow'></BackArrow>
                         {dataPassed[1].split('%20').splice(1).join(' ')}
                    </WrapperCenter>
                </LeagueHeader>
                <WrapperCenter row border>
                    <LeagueLogo src={dataPassed[2]} />
                </WrapperCenter>
                <MatchList>
                    <SectionHeader>Next {dataPassed[1].split('%20').splice(1).join(' ')} matches</SectionHeader>
                    {next}
                </MatchList>
            </LeagueDetails>
    )
}