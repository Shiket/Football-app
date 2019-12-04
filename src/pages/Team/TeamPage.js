import React from 'react';
import { WrapperCenter, TeamWrapper } from "../../styleComponents"
import { withFirebase } from '../../components/Firebase/index';
import TeamPageHOC from './TeamPageHOC'
import { Header, Content } from '../../components/index'

const Team = ({ lastMatches, nextMatches, firebase }) => {
    return (
        <WrapperCenter>
            <TeamWrapper>
                <Header firebase={firebase} />
                <Content nextMatches={nextMatches} lastMatches={lastMatches} /> {/*players={players}*/}
            </TeamWrapper>
        </WrapperCenter>
    )
}

export const TeamPage = withFirebase(TeamPageHOC(Team))