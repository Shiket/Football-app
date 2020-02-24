import React from 'react'
import {
    ContentSection, Scroll, MainSection, Wrapper, DetailsWrapper,
    DescriptionSection, Description, PlayersList, Link, Text,
    LastMatches, ResponsiveWrapper, Teams, Date, MatchesRow,
    Icon, SinglePlayer, Score, Details, TeamLogo, MediumScreenWrapper,
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

    return (
      <DetailsWrapper>
        <Details>
          <TeamLogo dnone src={location.state.state[0].strTeamBadge} />
          <DetailsWrapper col>
            <MainSection marginL dnone>
              Details:
            </MainSection>

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
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"http://" + location.state.state[0].strWebsite}
                  >
                    <Icon src={IMAGES.website} alt="website icon"></Icon>
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"http://" + location.state.state[0].strWebsite}
                  >
                    {location.state.state[0].strWebsite.slice(4)}
                  </Link>
                </DescriptionRow>
              </DetailsMediumScreenWrapper>
              <SocialMediaWrapper dnone>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"http://" + location.state.state[0].strTwitter}
                >
                  {location.state.state[0].strTwitter === "" ? (
                    <div></div>
                  ) : (
                    <SocialIcon src={IMAGES.twitter} alt="twitter icon" />
                  )}
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"http://" + location.state.state[0].strFacebook}
                >
                  {location.state.state[0].strFacebook === "" ? (
                    <div></div>
                  ) : (
                    <SocialIcon src={IMAGES.fb} alt="fb icon" />
                  )}
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"http://" + location.state.state[0].strYoutube}
                >
                  {" "}
                  {location.state.state[0].strYoutube === "" ? (
                    <div></div>
                  ) : (
                    <SocialIcon src={IMAGES.yt} alt="yt icon" />
                  )}
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"http://" + location.state.state[0].strInstagram}
                >
                  {" "}
                  {location.state.state[0].strInstagram === "" ? (
                    <div></div>
                  ) : (
                    <SocialIcon src={IMAGES.ig} alt="ig icon" />
                  )}
                </Link>
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
                <Description>
                  {location.state.state[0].strDescriptionEN}
                </Description>
              </Scroll>
            </DescriptionSection>
          </DetailsWrapper>

          <MainSection marginL dnone>
            Social media:
          </MainSection>
          <SocialMediaWrapper>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={"http://" + location.state.state[0].strTwitter}
            >
              {location.state.state[0].strTwitter === "" ? (
                <div></div>
              ) : (
                <SocialIcon src={IMAGES.twitter} alt="twitter icon" />
              )}
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={"http://" + location.state.state[0].strFacebook}
            >
              {location.state.state[0].strFacebook === "" ? (
                <div></div>
              ) : (
                <SocialIcon src={IMAGES.fb} alt="fb icon" />
              )}
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={"http://" + location.state.state[0].strYoutube}
            >
              {" "}
              {location.state.state[0].strYoutube === "" ? (
                <div></div>
              ) : (
                <SocialIcon src={IMAGES.yt} alt="yt icon" />
              )}
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={"http://" + location.state.state[0].strInstagram}
            >
              {" "}
              {location.state.state[0].strInstagram === "" ? (
                <div></div>
              ) : (
                <SocialIcon src={IMAGES.ig} alt="ig icon" />
              )}
            </Link>
          </SocialMediaWrapper>
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
            <LastMatches>
              <MainSection>Last matches:</MainSection>
              {last}
            </LastMatches>
          </ResponsiveWrapper>

          <Wrapper row start>
            <DescriptionSection>
              <MainSection>Team:</MainSection>
              <Scroll>
                <span>
                  Temporarily unavailable (APIs provider has changed their free plan
                  and requires additional payment)
                </span>
                {/* <PlayersList>
                            {wholeTeam}
                        </PlayersList> */}
              </Scroll>
            </DescriptionSection>
            <LastMatches start marginR marginB>
              <MainSection>Upcomming matches:</MainSection>
              {next}
            </LastMatches>
          </Wrapper>
        </ContentSection>
      </DetailsWrapper>
    );
}