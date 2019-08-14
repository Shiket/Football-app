import React from 'react';
import axios from 'axios';
import { Loader } from '../../styleComponents/index'
import * as DATA from '../../constants/data';

export default (WrappedComponent) => {
    return class TeamPageHOC extends React.Component {
        state = { team: 'asda' };

        async componentDidMount() {
            // let teams = await axios.get(DATA.TEAMS_URL + this.props.location.state.state[1]);
            // let logo = teams.data.teams.map(a => [{ teamid: a.idTeam, logo: a.strTeamBadge }]) // logo + id



        }

        render() {
            if (this.state.team.length === 0) return <Loader header><div></div></Loader>;
            return (
                <WrappedComponent {...this.props} />
            )
        }
    }
};
