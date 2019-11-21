import React from 'react';
import {
    WrapperCenter, TeamWrapper, TeamHeader, BackArrow, Details,
    TeamLogo, Icon, Text, DescriptionRow,
    ContentSection, Scroll, MainSection, Wrapper,
    Teams, Date, MatchesRow, SocialIcon, SocialMediaWrapper,
    Favourite, DescriptionSection, Description, PlayersList, SinglePlayer,
    Link, LastMatches, Score, ResponsiveWrapper, DetailsWrapper, MediumScreenWrapper,
    DetailsMediumScreenWrapper, PrevPage } from "../../styleComponents"
import { IMAGES } from '../../assets/index'
import { AuthUserContext } from '../../components/Session';
import { withFirebase } from '../../components/Firebase/index';
import TeamPageHOC from './TeamPageHOC'

const Team = ({ history, lastMatches, location, match, nextMatches, players, firebase}) => {

    const wholeTeam = players.map(a =>
        <SinglePlayer>
            {a.strPlayer}
        </SinglePlayer>
    );
    const next = nextMatches.map(a =>
        <MatchesRow>
            <Icon src={IMAGES.calendar2} alt="calendar icon"></Icon>
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
                <TeamHeader>
                    <PrevPage row pointer onClick={history.goBack}><BackArrow src={IMAGES.leftArrow} alt='back arrow' />{match.params.team}
                        <Text dnone>&emsp;&emsp; {location.state.state[0].win}W &emsp; {location.state.state[0].draw}
                            D &emsp;{location.state.state[0].loss}L</Text>
                    </PrevPage>

                    <AuthUserContext.Consumer>
                        {authUser => authUser ?
                            <Favourite src={IMAGES.star} alt='favourite icon' />
                            :<Favourite onClick={()=>alert('You have to sign in!')}src={IMAGES.star} alt='favourite icon' />
                        }
                    </AuthUserContext.Consumer>

                </TeamHeader>

                <DetailsWrapper>
                    <Details>

                        <TeamLogo dnone src={location.state.state[0].strTeamBadge} />
                        <DetailsWrapper col>
                            <MainSection marginL dnone>Details:</MainSection>

                            <DetailsMediumScreenWrapper>
                                <TeamLogo src={location.state.state[0].strTeamBadge} />
                                <DetailsMediumScreenWrapper col>
                                    <DescriptionRow>
                                        <Icon src={IMAGES.stadium} alt="stadium icon"></Icon>
                                        <Text>{location.state.state[0].strStadium}</Text>
                                    </DescriptionRow>
                                    <DescriptionRow>
                                        <Icon src={IMAGES.marker} alt="location icon"></Icon>
                                        <Text>{location.state.state[0].strStadiumLocation}</Text>
                                    </DescriptionRow>
                                    <DescriptionRow dnone>
                                        <Icon src={location.state.state[1]} alt="league icon"></Icon>
                                        <Text>{location.state.state[0].strLeague}</Text>
                                    </DescriptionRow>
                                    <DescriptionRow>
                                        <Icon src={IMAGES.calendar} alt="calendar icon"></Icon>
                                        <Text>{location.state.state[0].intFormedYear}</Text>
                                    </DescriptionRow>

                                    <DescriptionRow>
                                        <Link target="_blank" href={'http://' + location.state.state[0].strWebsite}><Icon src={IMAGES.website} alt="website icon"></Icon></Link>
                                        <Link target="_blank" href={'http://' + location.state.state[0].strWebsite}>{location.state.state[0].strWebsite.slice(4)}</Link>
                                    </DescriptionRow>

                                </DetailsMediumScreenWrapper>
                                <SocialMediaWrapper dnone>
                                    <Link target="_blank" href={'http://' + location.state.state[0].strTwitter}>{location.state.state[0].strTwitter === "" ? <div></div> : <SocialIcon src={IMAGES.twitter} alt="twitter icon" />}</Link>
                                    <Link target="_blank" href={'http://' + location.state.state[0].strFacebook}>{location.state.state[0].strFacebook === "" ? <div></div> : <SocialIcon src={IMAGES.fb} alt="fb icon" />}</Link>
                                    <Link target="_blank" href={'http://' + location.state.state[0].strYoutube}> {location.state.state[0].strYoutube === "" ? <div></div> : <SocialIcon src={IMAGES.yt} alt="yt icon" />}</Link>
                                    <Link target="_blank" href={'http://' + location.state.state[0].strInstagram}> {location.state.state[0].strInstagram === "" ? <div></div> : <SocialIcon src={IMAGES.ig} alt="ig icon" />}</Link>
                                </SocialMediaWrapper>

                            </DetailsMediumScreenWrapper>

                            <MediumScreenWrapper>
                                <LastMatches dnone>
                                    <MainSection>Last matches:</MainSection>
                                    {last}
                                </LastMatches>

                                <LastMatches dnone>
                                    <MainSection>Upcomming matches:</MainSection>
                                    {next}
                                </LastMatches>
                            </MediumScreenWrapper>
                            <DescriptionSection sm>
                                <MainSection mb>Description:</MainSection>
                                <Scroll>
                                    <Description>{location.state.state[0].strDescriptionEN}</Description>
                                </Scroll>
                            </DescriptionSection>
                        </DetailsWrapper>

                        <MainSection marginL dnone>Social media:</MainSection>

                        <SocialMediaWrapper>
                            <Link target="_blank" href={'http://' + location.state.state[0].strTwitter}>{location.state.state[0].strTwitter === "" ? <div></div> : <SocialIcon src={IMAGES.twitter} alt="twitter icon" />}</Link>
                            <Link target="_blank" href={'http://' + location.state.state[0].strFacebook}>{location.state.state[0].strFacebook === "" ? <div></div> : <SocialIcon src={IMAGES.fb} alt="fb icon" />}</Link>
                            <Link target="_blank" href={'http://' + location.state.state[0].strYoutube}> {location.state.state[0].strYoutube === "" ? <div></div> : <SocialIcon src={IMAGES.yt} alt="yt icon" />}</Link>
                            <Link target="_blank" href={'http://' + location.state.state[0].strInstagram}> {location.state.state[0].strInstagram === "" ? <div></div> : <SocialIcon src={IMAGES.ig} alt="ig icon" />}</Link>
                        </SocialMediaWrapper>

                    </Details>

                    <ContentSection lg>
                        <ResponsiveWrapper>
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
                        </ResponsiveWrapper>

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

                </DetailsWrapper>
            </TeamWrapper>
        </WrapperCenter>
    )
}

export const TeamPage = withFirebase(TeamPageHOC(Team))