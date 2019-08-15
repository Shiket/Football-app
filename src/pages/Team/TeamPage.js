import React, { Component } from 'react';
import { Wrapper, TeamWrapper, TeamHeader, BackArrow, Details,
        TeamLogo, SectionName, Icon, Text, DescriptionRow,
        ContentSection, Date, Time, Score } from "../../styleComponents";
import Larrow from '../../assets/leftArrow.png'
import TeamPageHOC from './TeamPageHOC';
import stadium from '../../assets/stadium.png'
import calendar from '../../assets/calendar.png'
import calendar2 from '../../assets/calendar2.png'
import twitterIco from '../../assets/Twitter.png'
import facebookIco from '../../assets/fb.png'
import website from '../../assets/website.png'
import location from '../../assets/marker.png'

class Team extends Component {
    render() {
        const next = this.props.nextMatches.map(a =>
        <DescriptionRow>
            <Icon src={calendar2} alt="calendar icon"></Icon>
                <Date>{a.dateEvent}</Date>
                <Time>{a.strTime.slice(0, 5)}</Time>
            <Text>{a.strEvent}</Text>
        </DescriptionRow>
        );

        const last = this.props.lastMatches.map(a =>
            <DescriptionRow>
                <Icon src={calendar2} alt="calendar icon"></Icon>
                <Date>{a.dateEvent}</Date>
                <Score>{a.intHomeScore} : {a.intAwayScore}</Score> {a.strHomeTeam} vs {a.strAwayTeam}
            </DescriptionRow>
        );

        console.log(this.props)
        return (
            <Wrapper>
                <TeamWrapper>
                    <TeamHeader onClick={this.props.history.goBack}>
                        <BackArrow src={Larrow} alt='back arrow'></BackArrow>
                        {this.props.match.params.team}
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
                            <DescriptionRow>
                                <Icon src={twitterIco} alt="twitter icon"></Icon>
                            </DescriptionRow>
                            <DescriptionRow>
                                <Icon src={facebookIco} alt="facebook icon"></Icon>
                            </DescriptionRow>
                        </Details>

                    <ContentSection>
                        <SectionName>Upcomming matches:</SectionName>
                        {next}
                    </ContentSection>
                    <ContentSection>
                        <SectionName>Last matches:</SectionName>
                        {last}
                    </ContentSection>
                    </Wrapper>
                </TeamWrapper>
            </Wrapper>
        )
    }
}

export const TeamPage = TeamPageHOC(Team)
