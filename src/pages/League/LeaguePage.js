import React from 'react';
import { withRouter } from "react-router"
import { Wrapper } from "../../styleComponents";
import LeagueHOC from './LeagueHOC';
import { Table, NextLeagueMatches } from '../../components/index'

const League = ({nextMatches, teams, windowWidth }) => {
    return (
        <Wrapper marginR marginL row>
          <NextLeagueMatches nextMatches={nextMatches} />
          <Table teams={teams} windowWidth={windowWidth} />
        </Wrapper>
    )
}
export const LeaguePage = withRouter(LeagueHOC(League));