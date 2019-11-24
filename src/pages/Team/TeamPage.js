import React from 'react';
import { WrapperCenter, TeamWrapper } from "../../styleComponents"
import { withFirebase } from '../../components/Firebase/index';
import TeamPageHOC from './TeamPageHOC'
import { Header, Content } from '../../components/index'

const Team = ({ lastMatches, nextMatches, players, firebase }) => {
    return (
        <WrapperCenter>
            <TeamWrapper>
                <Header firebase={firebase} />
                <Content players={players} nextMatches={nextMatches} lastMatches={lastMatches}/>
            </TeamWrapper>
        </WrapperCenter>
    )
}

export const TeamPage = withFirebase(TeamPageHOC(Team))