import React, { useState } from 'react'
import 'react-table/react-table.css'
import { WrapperCenter, Headers, Switch } from '../../styleComponents/index'
import { FavouriteTeamsPage } from '../index'
import { withRouter } from "react-router"
import { LandingTable } from '../../components/index'

const Landing = ({ windowWidth, leagues, history }) => {
    let [LeagueView, setYourTeams] = useState(true);
    return (
        <WrapperCenter>
            <Headers>
                <Switch onClick={() => setYourTeams(LeagueView = true)} color>Add new team</Switch>
                <Switch onClick={() => setYourTeams(LeagueView = false)}>Your teams</Switch>
            </Headers>

            {LeagueView === true ? <LandingTable leagues={leagues}  windowWidth={windowWidth} />
                                 : <FavouriteTeamsPage /> }
        </WrapperCenter>
    )
}
export const LandingPage = withRouter(Landing);
