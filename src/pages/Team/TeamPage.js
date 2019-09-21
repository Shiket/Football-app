import React, { Component } from 'react';
import { Wrapper, TeamWrapper, TeamHeader, BackArrow, Details,
        TeamLogo, SectionName, Icon, Text, DescriptionRow,
        ContentSection, TeamDetails, MainSection, WrapperNotCenter,
         Teams, Date, MatchesRow, SocialIcon, SocialMediaWrapper, Favourite} from "../../styleComponents"
import Larrow from '../../assets/leftArrow.png'
import TeamPageHOC from './TeamPageHOC'
import stadium from '../../assets/stadium.png'
import calendar from '../../assets/calendar.png'
import calendar2 from '../../assets/calendar2.png'
import twitterIco from '../../assets/twitter.png'
import facebookIco from '../../assets/fb.png'
import website from '../../assets/website.png'
import location from '../../assets/marker.png'
import youtubeIco from '../../assets/yt.png'
import instagramIco from '../../assets/ig.png'
import fav from '../../assets/star.png'

class Team extends Component {
    render() {
        const next = this.props.nextMatches.map(a =>
            <MatchesRow>
                <Icon src={calendar2} alt="calendar icon"></Icon>
                <Date>{a.dateEvent} <br /> &emsp; {a.strTime.slice(0, 5)}</Date>
                {a.strEvent.split('vs')[0]} <br />{a.strEvent.split('vs')[1]}
            </MatchesRow>
        );

        const last = this.props.lastMatches.map(a =>
            <MatchesRow>
                <Icon src={calendar2} alt="calendar icon"></Icon>
                <Teams>{a.strHomeTeam} <br /> {a.strAwayTeam} </Teams> {a.intHomeScore}-{a.intAwayScore}
            </MatchesRow>
        );

        console.log(this.props.location.state.state[0])
        return (
            <Wrapper>
                <TeamWrapper>
                    <TeamHeader onClick={this.props.history.goBack}>
                        <Wrapper row><BackArrow src={Larrow} alt='back arrow' />{this.props.match.params.team}
                        <Text>&emsp;&emsp; {this.props.location.state.state[0].win}W &emsp; {this.props.location.state.state[0].draw}
                            D &emsp;{this.props.location.state.state[0].loss}L</Text>
                        </Wrapper>
                        <Favourite src={fav} alt='favourite icon'/>
                    </TeamHeader>

                    <Wrapper row flex top>
                        <Details>
                            <TeamLogo src={this.props.location.state.state[0].strTeamBadge} />

                            <SectionName>Details:</SectionName>

                            <DescriptionRow>
                                <Icon src={stadium} alt="stadium icon"></Icon>
                                <Text>{this.props.location.state.state[0].strStadium}</Text>
                            </DescriptionRow>
                            <DescriptionRow>
                                <Icon src={location} alt="location icon"></Icon>
                                <Text>{this.props.location.state.state[0].strStadiumLocation}</Text>
                            </DescriptionRow>
                            <DescriptionRow>
                                <Icon src={this.props.location.state.state[1]} alt="league icon"></Icon>
                                <Text>{this.props.location.state.state[0].strLeague}</Text>
                            </DescriptionRow>
                            <DescriptionRow>
                                <Icon src={calendar} alt="calendar icon"></Icon>
                                <Text>{this.props.location.state.state[0].intFormedYear}</Text>
                            </DescriptionRow>
                            <DescriptionRow as="a" href={this.props.location.state.state[0].strWebsite}>
                                <Icon src={website} alt="website icon"></Icon>
                                <Text>{this.props.location.state.state[0].strWebsite.slice(4)}</Text>
                            </DescriptionRow>

                            <SectionName>Social media:</SectionName>

                            <SocialMediaWrapper>
                                {this.props.location.state.state[0].strTwitter < 1 ? <div></div> : <SocialIcon src={twitterIco} alt="twitter icon"></SocialIcon>}
                                {this.props.location.state.state[0].strFacebook.length < 1 ? <div></div> : <SocialIcon src={facebookIco} alt="twitter icon"></SocialIcon>}
                                {this.props.location.state.state[0].strYoutube.length < 1 ? <div></div> : <SocialIcon src={youtubeIco} alt="twitter icon"></SocialIcon>}
                                {this.props.location.state.state[0].strInstagram.length < 1 ? <div></div> : <SocialIcon src={instagramIco} alt="twitter icon"></SocialIcon>}
                            </SocialMediaWrapper>

                        </Details>

                        <ContentSection>
                            <WrapperNotCenter row start>

                                <WrapperNotCenter margin>
                                    <MainSection>Last matches:</MainSection>
                                    {last}
                                </WrapperNotCenter>

                                <WrapperNotCenter margin>
                                    <MainSection>Upcomming matches:</MainSection>
                                    {next}
                                </WrapperNotCenter>

                            </WrapperNotCenter>
                            <MainSection>Team details:</MainSection>

                            <TeamDetails>
                                <div>{this.props.location.state.state[0].strDescriptionEN}</div>
                            </TeamDetails>
                        </ContentSection>
                    </Wrapper>
                </TeamWrapper>
            </Wrapper>
        )
    }
}

export const TeamPage = TeamPageHOC(Team)