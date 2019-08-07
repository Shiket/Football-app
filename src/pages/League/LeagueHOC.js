import React from 'react';
import axios from 'axios';
import { Loader } from '../../styleComponents/index'
import * as DATA from '../../constants/data';

export default (WrappedComponent) => {
    return class LeagueHOC extends React.Component {
        state = { teams: ''};

        async componentDidMount(){
            let teams = await axios.get(DATA.TEAMS_URL + this.props.location.state.state[1] );
            let logo = teams.data.teams.map(a => [{teamid:a.idTeam, logo:a.strTeamBadge}]) // logo + id

            let data = [...this.props.location.state.state[0]]
            let merged = [];

            for (let i = 0; i < data.length; i++) { // na es6 przerobić
                merged.push({
                    ...data[i],
                    ...logo.find(a => a[0].teamid === data[i].teamid)
                });
            }

            merged.map(a=> a.logo = (a[0].logo));

            this.setState({
                teams: [...merged]
            });
        }

        render() {
            if (this.state.teams.length === 0) return <Loader header><div></div></Loader>;
            return (
                <WrappedComponent {...this.props}
                                    teams={this.state.teams} />
            )
        }
    }
};
