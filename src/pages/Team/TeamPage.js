import React, { useEffect } from 'react';
import { WrapperCenter, TeamWrapper } from "../../styleComponents"
import { withFirebase } from '../../components/Firebase/index';
import TeamPageHOC from './TeamPageHOC'
import { Header, Content } from '../../components/index'

const Team = ({ lastMatches, nextMatches, firebase, ...props}) => {

    useEffect (() => {
        console.log(props)
    })

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