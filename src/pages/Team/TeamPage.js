import React from 'react';
import {
    Wrapper, TeamWrapper, TeamHeader, BackArrow, Details,
    TeamLogo, SectionName, Icon, Text, DescriptionRow,
    ContentSection, TeamDetails, Scroll, MainSection, WrapperNotCenter,
    Teams, Date, MatchesRow, SocialIcon, SocialMediaWrapper, Favourite, DescriptionSection, Description
} from "../../styleComponents"
import Larrow from '../../assets/leftArrow.png'
import TeamPageHOC from './TeamPageHOC'
import stadium from '../../assets/stadium.png'
import calendar from '../../assets/calendar.png'
import calendar2 from '../../assets/calendar2.png'
import twitterIco from '../../assets/twitter.png'
import facebookIco from '../../assets/fb.png'
import websiteIco from '../../assets/website.png'
import locationIco from '../../assets/marker.png'
import youtubeIco from '../../assets/yt.png'
import instagramIco from '../../assets/ig.png'
import fav from '../../assets/star.png'

const Team = ({ history, lastMatches, location, match, nextMatches }) => {

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

            {a.intHomeScore}-{a.intAwayScore}
        </MatchesRow>

    );

    return (
        <Wrapper>
            <TeamWrapper>
                <TeamHeader onClick={history.goBack}>
                    <Wrapper row><BackArrow src={Larrow} alt='back arrow' />{match.params.team}
                        <Text>&emsp;&emsp; {location.state.state[0].win}W &emsp; {location.state.state[0].draw}
                            D &emsp;{location.state.state[0].loss}L</Text>
                    </Wrapper>
                    <Favourite src={fav} alt='favourite icon' />
                </TeamHeader>

                <Wrapper row flex top>
                    <Details>
                        <TeamLogo src={location.state.state[0].strTeamBadge} />

                        <SectionName>Details:</SectionName>

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
                        <DescriptionRow as="a" href={location.state.state[0].strWebsite}>
                            <Icon src={websiteIco} alt="website icon"></Icon>
                            <Text>{location.state.state[0].strWebsite.slice(4)}</Text>
                        </DescriptionRow>

                        <SectionName>Social media:</SectionName>

                        <SocialMediaWrapper>
                            {location.state.state[0].strTwitter === "" ? <div></div> : <SocialIcon src={twitterIco} alt="twitter icon" />}
                            {location.state.state[0].strFacebook === "" ? <div></div> : <SocialIcon src={facebookIco} alt="twitter icon" />}
                            {location.state.state[0].strYoutube === "" ? <div></div> : <SocialIcon src={youtubeIco} alt="twitter icon" />}
                            {location.state.state[0].strInstagram === "" ? <div></div> : <SocialIcon src={instagramIco} alt="twitter icon" />}
                        </SocialMediaWrapper>

                    </Details>

                    <ContentSection>
                        <WrapperNotCenter row start>

                            <DescriptionSection>
                                <MainSection>Description:</MainSection>
                                <Scroll>
                                    <Description>{location.state.state[0].strDescriptionEN}</Description>
                                </Scroll>
                            </DescriptionSection>

                            <WrapperNotCenter start>
                                <MainSection>Last matches:</MainSection>
                                {last}
                            </WrapperNotCenter>

                        </WrapperNotCenter>

                        <WrapperNotCenter row start>
                            <DescriptionSection>
                                <MainSection>Team:</MainSection>

                                <Scroll>
                                    <Description>TEAM HERE</Description>
                                </Scroll>

                            </DescriptionSection>
                            <WrapperNotCenter start margin>
                                <MainSection>Upcomming matches:</MainSection>
                                {next}
                            </WrapperNotCenter>
                        </WrapperNotCenter>

                    </ContentSection>

                </Wrapper>
            </TeamWrapper>
        </Wrapper>
    )
}

export const TeamPage = TeamPageHOC(Team)