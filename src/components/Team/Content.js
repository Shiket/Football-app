import React from 'react'
import {
  ContentSection, SectionTitle, MainWrapper, Description, Link, Text, RowCenter,
  MatchIcon, Teams, Date, MatchesRow, Icon, Score, Details, TeamLogo,
  DetailsRow, SocialIcon, SocialMediaWrapper, SectionNameDetails, MatchesSection, WrapperCenter
} from "../../styleComponents"
import { IMAGES } from '../../assets/index'
import { useLocation, useRouteMatch } from 'react-router-dom'

export const Content = ({ nextMatches, lastMatches }) => {
  let location = useLocation()
  let match = useRouteMatch()
  let upcommingMatches;
  // const wholeTeam = players.map(({ strPlayer }) =>
  //     <SinglePlayer> {strPlayer} </SinglePlayer> );
  const { strTwitter, strFacebook, strYoutube, strInstagram, strStadium, strStadiumLocation,
        strLeague, intFormedYear, strWebsite, strTeamBadge, strDescriptionEN } = location.state.state[0];

  const socialMediaData = [
    { icon: IMAGES.twitter, link:strTwitter },
    { icon: IMAGES.fb, link:strFacebook },
    { icon: IMAGES.yt, link:strYoutube },
    { icon: IMAGES.ig, link:strInstagram }];

  const details = [
    { icon: IMAGES.stadium, text:strStadium },
    { icon: IMAGES.marker, text:strStadiumLocation },
    { icon: location.state.state[1], text:strLeague },
    { icon: IMAGES.calendar, text:intFormedYear },
    { icon: IMAGES.website, text:strWebsite }];
  if(typeof(nextMatches) !== "string"){
    upcommingMatches = nextMatches.map(({ dateEvent, strEvent, strTime }) => (
      <MatchesRow>
        <MatchIcon src={IMAGES.calendar2} alt="calendar icon"></MatchIcon>
        <Date>
          {dateEvent.slice(2)} <br /> {strTime.slice(0, 5)}
        </Date>
        {strEvent.split("vs")[0]} <br />
        {strEvent.split("vs")[1]}
      </MatchesRow>
    ));
  }else upcommingMatches = nextMatches


  const previousMatches = lastMatches.map(({ strHomeTeam, strAwayTeam, intAwayScore, intHomeScore }) =>
    <MatchesRow>
      {intHomeScore !== intAwayScore ? (intHomeScore > intAwayScore && strHomeTeam === match.params.team ?
        <Teams win><div>{strHomeTeam} <br /> {strAwayTeam} </div></Teams> : (intAwayScore > intHomeScore && strAwayTeam === match.params.team ?
          <Teams win>{strHomeTeam} <br /> {strAwayTeam} </Teams> : <Teams lose>{strHomeTeam} <br /> {strAwayTeam} </Teams>)) :
        <Teams> {strHomeTeam} <br /> {strAwayTeam}</Teams>}
      <Score>{intHomeScore}-{intAwayScore}</Score>
    </MatchesRow>);

  const teamDetails = details.map((a, i) =>
    i === details.length - 1 ?
      <DetailsRow target="_blank" rel="noopener noreferrer" href={"http://" + a.text}>
        <Icon src={a.icon} alt="icon"></Icon>
        {a.text.slice(4)}
      </DetailsRow> :
      <DetailsRow>
        <Icon src={a.icon} alt='icon'></Icon>
        <Text>{a.text}</Text>
      </DetailsRow>);

  const socialMedia = socialMediaData.map(a =>
    a.link === "" ? null :
      <Link target="_blank" rel="noopener noreferrer" href={"http://" + a.link}>
        <SocialIcon src={a.icon} alt="icon" />
      </Link>)

  return (
    <MainWrapper>
      <Details>
        <TeamLogo src={strTeamBadge} />
        <SectionNameDetails>Details:</SectionNameDetails>
        {teamDetails}
        <SectionNameDetails>Social media:</SectionNameDetails>
        <SocialMediaWrapper>
        {socialMedia}
        </SocialMediaWrapper>
      </Details>

      <ContentSection>
        <SectionTitle>Description:</SectionTitle>
        <Description>
          {strDescriptionEN}
        </Description>

        <SectionTitle>Players:</SectionTitle>
        <span>
          Temporarily unavailable (API's provider has changed their free plan
          and this option requires additional payment)
        </span>
        {/* <PlayersList> {wholeTeam} </PlayersList>s */}
      </ContentSection>

      <MatchesSection>
        <RowCenter>
          <SectionTitle notVisibleMD>Last matches:</SectionTitle>
          <WrapperCenter>
            {previousMatches}
          </WrapperCenter>
          <SectionTitle notVisibleMD>Upcomming matches</SectionTitle>
          <WrapperCenter>
            {upcommingMatches}
          </WrapperCenter>
        </RowCenter>
      </MatchesSection>
    </MainWrapper>
  );
}