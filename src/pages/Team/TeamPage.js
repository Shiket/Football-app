import React, { Component } from 'react';
import { Wrapper, TeamWrapper, TeamHeader, BackArrow, LeagueDetails, TeamLogo, SectionName, Icon, Text, DescriptionRow } from "../../styleComponents";
import Larrow from '../../assets/leftArrow.png'
import TeamPageHOC from './TeamPageHOC';
import stadium from '../../assets/stadium.png'
import calendar from '../../assets/calendar.png'
import twitterIco from '../../assets/Twitter.png'
import facebookIco from '../../assets/fb.png'
import website from '../../assets/website.png'
import location from '../../assets/marker.png'

class Team extends Component {
    render() {
        return (
            <Wrapper>
                <TeamWrapper>
                    <TeamHeader onClick={this.props.history.goBack}>
                        <BackArrow src={Larrow} alt='back arrow'></BackArrow>
                        {this.props.match.params.team}
                    </TeamHeader>
                    <Wrapper row flex>
                        <LeagueDetails>

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
                            <DescriptionRow>
                                <Icon src={website} alt="website icon"></Icon>
                                <Text>{this.props.location.state.state[0].strWebsite}</Text>
                            </DescriptionRow>

                            <SectionName>Social media:</SectionName>

                            <DescriptionRow>
                                <Icon src={twitterIco} alt="twitter icon"></Icon>
                                <Text>{this.props.location.state.state[0].strTwitter}</Text>
                            </DescriptionRow>
                            <DescriptionRow>
                                <Icon src={facebookIco} alt="facebook icon"></Icon>
                                <Text>{this.props.location.state.state[0].strYoutube}</Text>
                            </DescriptionRow>
                        </LeagueDetails>
                    </Wrapper>
                </TeamWrapper>
            </Wrapper>
        )
    }
}

export const TeamPage = TeamPageHOC(Team)
