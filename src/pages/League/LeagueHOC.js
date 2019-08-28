import React from 'react';
import axios from 'axios';
import { Loader } from '../../styleComponents/index'
import * as DATA from '../../constants/data';

export default (WrappedComponent) => {
    return class LeagueHOC extends React.Component {
        state = {
            teams: '',
            nextMatches: [],
        };

        async componentDidMount(){
            let teams = await axios.get(DATA.TEAMS_URL + this.props.location.state.state[1] );
            let nextLeagueMatches = await axios.get(DATA.NEXT_LEAGUE_MATCHES + this.props.location.state.state[3])
            console.log(nextLeagueMatches);

            const merged = this.props.location.state.state[0].map(item => ({
                ...item,
                ...teams.data.teams.find(({ idTeam }) => idTeam === item.teamid),
            }));

            this.setState({
                teams: [...merged],
                nextMatches: [...nextLeagueMatches.data.events]
            });
        }

        render() {
            if (this.state.teams.length === 0) return <Loader header><div></div></Loader>;
            return (
                <WrappedComponent {...this.props}
                    teams={this.state.teams}
                    nextMatches={this.state.nextMatches} />
            )
        }
    }
};