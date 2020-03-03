import React from 'react'
import {
    ContentSection, Scroll, MainSection, Wrapper, ContentWrapper,
    DescriptionSection, Description, Link, Text,
    Matches, ResponsiveWrapper, Teams, Date, MatchesRow,
    Icon, Score, Details, TeamLogo, MediumScreenWrapper,
    DescriptionRow, DetailsMediumScreenWrapper, SocialIcon, SocialMediaWrapper
    } from "../../styleComponents"
import { IMAGES } from '../../assets/index'
import { useLocation, useRouteMatch } from 'react-router-dom'

export const Content = ({  nextMatches, lastMatches}) => {
    let location = useLocation()
    let match = useRouteMatch()

    // const wholeTeam = players.map(({ strPlayer }) =>
    //     <SinglePlayer>
    //         {strPlayer}
    //     </SinglePlayer>
    // );

  const socialMediaData = [
    { icon: IMAGES.twitter, link: location.state.state[0].strTwitter },
    { icon: IMAGES.fb, link: location.state.state[0].strFacebook },
    { icon: IMAGES.yt, link: location.state.state[0].strYoutube },
    { icon: IMAGES.ig, link: location.state.state[0].strInstagram }];

  const details = [
    { icon: IMAGES.stadium, text: location.state.state[0].strStadium },
    { icon: IMAGES.marker, text: location.state.state[0].strStadiumLocation },
    { icon: location.state.state[1], text: location.state.state[0].strLeague },
    { icon: IMAGES.calendar, text: location.state.state[0].intFormedYear },
    { icon: IMAGES.website, text: location.state.state[0].strWebsite.slice(4) }];

    const next = nextMatches.map(({ dateEvent, strEvent, strTime }) =>
        <MatchesRow>
            <Icon src={IMAGES.calendar2} alt="calendar icon"></Icon>
            <Date>{dateEvent} <br /> &emsp; {strTime.slice(0, 5)}</Date>
            {strEvent.split('vs')[0]} <br />{strEvent.split('vs')[1]}
        </MatchesRow>
    );

    const last = lastMatches.map(({ strHomeTeam, strAwayTeam, intAwayScore, intHomeScore }) =>
        <MatchesRow>
            {intHomeScore !== intAwayScore ? (intHomeScore > intAwayScore && strHomeTeam === match.params.team ?
            <Teams win><div>{strHomeTeam} <br /> {strAwayTeam} </div></Teams> : (intAwayScore > intHomeScore && strAwayTeam === match.params.team ?
            <Teams win>{strHomeTeam} <br /> {strAwayTeam} </Teams> : <Teams lose>{strHomeTeam} <br /> {strAwayTeam} </Teams>)):
            <Teams> {strHomeTeam} <br /> {strAwayTeam}</Teams>}
            <Score>{intHomeScore}-{intAwayScore}</Score>
        </MatchesRow>
    );

    const teamDetails = details.map(a =>
      <DescriptionRow>
        <Icon src={a.icon} alt='icon'></Icon>
        <Text>{a.text}</Text>
      </DescriptionRow>
      )

    const socialMedia = socialMediaData.map(a =>
      <Link target="_blank" rel="noopener noreferrer" href={"http://" + a.link}>
        {a.link === "" ? <div></div> : <SocialIcon src={a.icon} alt="icon" />}
      </Link>)

    return (
      <ContentWrapper>
        <Details>
          <TeamLogo dnone src={location.state.state[0].strTeamBadge} />

          <ContentWrapper col>
            <MainSection marginL dnone>
              Details:
            </MainSection>

            <DetailsMediumScreenWrapper>
              <TeamLogo src={location.state.state[0].strTeamBadge} />

              <DetailsMediumScreenWrapper col>
                {teamDetails}

                <DescriptionRow target="_blank" rel="noopener noreferrer" href={"http://" + location.state.state[0].strWebsite}>
                    <Icon src={IMAGES.website} alt="website icon"></Icon>
                    {location.state.state[0].strWebsite.slice(4)}
                </DescriptionRow>

              </DetailsMediumScreenWrapper>

              <SocialMediaWrapper dnone>
                {socialMedia}
              </SocialMediaWrapper>
            </DetailsMediumScreenWrapper>

            <MediumScreenWrapper>
              <Matches dnone>
                <MainSection>Last matches:</MainSection>
                {last}
              </Matches>

              <Matches dnone>
                <MainSection>Upcomming matches:</MainSection>
                {next}
              </Matches>
            </MediumScreenWrapper>

            <DescriptionSection sm>
              <MainSection mb>Description:</MainSection>
              <Scroll>
                <Description>
                  {location.state.state[0].strDescriptionEN}
                </Description>
              </Scroll>
            </DescriptionSection>

          </ContentWrapper>

          <MainSection marginL dnone>Social media:</MainSection>

          <SocialMediaWrapper> {socialMedia} </SocialMediaWrapper>
        </Details>
        <ContentSection lg>
          <ResponsiveWrapper>
            <DescriptionSection>
              <MainSection>Description:</MainSection>
              <Scroll>
                <Description>
                  {location.state.state[0].strDescriptionEN}
                </Description>
              </Scroll>
            </DescriptionSection>
            <Matches>
              <MainSection>Last matches:</MainSection>
              {last}
            </Matches>
          </ResponsiveWrapper>

          <Wrapper row start>
            <DescriptionSection>
              <MainSection>Team:</MainSection>
              <Scroll>
                <span>
                  Temporarily unavailable (API's provider has changed their free plan
                  and this option requires additional payment)
                </span>
                {/* <PlayersList>
                            {wholeTeam}
                        </PlayersList> */}
              </Scroll>
            </DescriptionSection>
            <Matches start marginR marginB>
              <MainSection>Upcomming matches:</MainSection>
              {next}
            </Matches>
          </Wrapper>
        </ContentSection>
      </ContentWrapper>
    );
}