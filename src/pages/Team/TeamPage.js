import React from 'react';
import {
    WrapperCenter, TeamWrapper, TeamHeader, BackArrow, Details,
    TeamLogo, Icon, Text, DescriptionRow,
    ContentSection, Scroll, MainSection, Wrapper,
    Teams, Date, MatchesRow, SocialIcon, SocialMediaWrapper,
    Favourite, DescriptionSection, Description, PlayersList, SinglePlayer,
    Link, LastMatches, Score } from "../../styleComponents"
import Larrow from '../../assets/leftArrow.png'
import TeamPageHOC from './TeamPageHOC'
import stadium from '../../assets/stadium.png'
import calendar from '../../assets/calendar.png'
import calendar2 from '../../assets/calendar2.png'
import twitterIco from '../../assets/Twitter.png'
import facebookIco from '../../assets/fb.png'
import websiteIco from '../../assets/website.png'
import locationIco from '../../assets/marker.png'
import youtubeIco from '../../assets/yt.png'
import instagramIco from '../../assets/ig.png'
import fav from '../../assets/star.png'

const Team = ({ history, lastMatches, location, match, nextMatches, players }) => {

    const wholeTeam = players.map(a =>
        <SinglePlayer>
            {a.strPlayer}
        </SinglePlayer>
    );

    const next = nextMatches.map(a =>
        <MatchesRow>
            <Icon src={calendar2} alt="calendar icon"></Icon>
            <Date>{a.dateEvent} <br /> &emsp; {a.strTime.slice(0, 5)}</Date>
            {a.strEvent.split('vs')[0]} <br />{a.strEvent.split('vs')[1]}
        </MatchesRow>
    );

    const last = lastMatches.map(a =>
        <MatchesRow>
            {a.intHomeScore !== a.intAwayScore ?
                (a.intHomeScore > a.intAwayScore && a.strHomeTeam === match.params.team ?
                    <Teams win><div>{a.strHomeTeam} <br /> {a.strAwayTeam} </div></Teams> : (a.intAwayScore > a.intHomeScore && a.strAwayTeam === match.params.team ?
                        <Teams win>{a.strHomeTeam} <br /> {a.strAwayTeam} </Teams> : <Teams lose>{a.strHomeTeam} <br /> {a.strAwayTeam} </Teams>))
                : <Teams> {a.strHomeTeam} <br /> {a.strAwayTeam}</Teams>}

            <Score>{a.intHomeScore}-{a.intAwayScore}</Score>
        </MatchesRow>

    );

    return (
        <WrapperCenter>
            <TeamWrapper>
                <TeamHeader onClick={history.goBack}>
                    <WrapperCenter row><BackArrow src={Larrow} alt='back arrow' />{match.params.team}
                        <Text>&emsp;&emsp; {location.state.state[0].win}W &emsp; {location.state.state[0].draw}
                            D &emsp;{location.state.state[0].loss}L</Text>
                    </WrapperCenter>
                    <Favourite src={fav} alt='favourite icon' />
                </TeamHeader>

                <WrapperCenter row flex top>
                    <Details>
                        <TeamLogo src={location.state.state[0].strTeamBadge} />

                        <MainSection marginL>Details:</MainSection>

                        <DescriptionRow>
                            <Icon src={stadium} alt="stadium icon"></Icon>
                            <Text>{location.state.state[0].strStadium}</Text>
                        </DescriptionRow>
                        <DescriptionRow>
                            <Icon src={locationIco} alt="location icon"></Icon>
                            <Text>{location.state.state[0].strStadiumLocation}</Text>
                        </DescriptionRow>
                        <DescriptionRow>
                            <Icon src={location.state.state[1]} alt="league icon"></Icon>
                            <Text>{location.state.state[0].strLeague}</Text>
                        </DescriptionRow>
                        <DescriptionRow>
                            <Icon src={calendar} alt="calendar icon"></Icon>
                            <Text>{location.state.state[0].intFormedYear}</Text>
                        </DescriptionRow>
                        <DescriptionRow>
                            <Link target="_blank" href={'http://' + location.state.state[0].strWebsite}><Icon src={websiteIco} alt="website icon"></Icon></Link>
                            <Link target="_blank" href={'http://' + location.state.state[0].strWebsite}>{location.state.state[0].strWebsite.slice(4)}</Link>
                        </DescriptionRow>

                        <MainSection marginL>Social media:</MainSection>

                        <SocialMediaWrapper>
                            <Link target="_blank" href={'http://' + location.state.state[0].strTwitter}>{location.state.state[0].strTwitter === "" ? <div></div> : <SocialIcon src={twitterIco} alt="twitter icon" />}</Link>
                            <Link target="_blank" href={'http://' + location.state.state[0].strFacebook}>{location.state.state[0].strFacebook === "" ? <div></div> : <SocialIcon src={facebookIco} alt="twitter icon" />}</Link>
                            <Link target="_blank" href={'http://' + location.state.state[0].strYoutube}> {location.state.state[0].strYoutube === "" ? <div></div> : <SocialIcon src={youtubeIco} alt="twitter icon" />}</Link>
                            <Link target="_blank" href={'http://' + location.state.state[0].strInstagram}> {location.state.state[0].strInstagram === "" ? <div></div> : <SocialIcon src={instagramIco} alt="twitter icon" />}</Link>
                        </SocialMediaWrapper>

                    </Details>

                    <ContentSection>
                        <Wrapper row start>
                            <DescriptionSection>
                                <MainSection>Description:</MainSection>
                                <Scroll>
                                    <Description>{location.state.state[0].strDescriptionEN}</Description>
                                </Scroll>
                            </DescriptionSection>
                            <LastMatches>
                                <MainSection>Last matches:</MainSection>
                                {last}
                            </LastMatches>
                        </Wrapper>

                        <Wrapper row start>
                            <DescriptionSection>
                                <MainSection>Team:</MainSection>
                                <Scroll>
                                    <PlayersList>
                                        {wholeTeam}
                                    </PlayersList>
                                </Scroll>
                            </DescriptionSection>
                            <LastMatches start marginR marginB>
                                <MainSection>Upcomming matches:</MainSection>
                                {next}
                            </LastMatches>
                        </Wrapper>

                    </ContentSection>

                </WrapperCenter>
            </TeamWrapper>
        </WrapperCenter>
    )
}

export const TeamPage = TeamPageHOC(Team)