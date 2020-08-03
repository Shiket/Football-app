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
            const { state:teamInfo } = this.props.location.state;

            let teams = await axios.get(DATA.TEAMS_URL + teamInfo[1] );
            let nextLeagueMatches = await axios.get(DATA.NEXT_LEAGUE_MATCHES + teamInfo[3])

            const merged = teamInfo[0].map(item => ({
                ...item,
                ...teams.data.teams.find(({ idTeam }) => idTeam === item.teamid),
            }));

            this.setState({
                  teams: [...merged],
                  nextMatches: nextLeagueMatches.data.events != null ?
                    [...nextLeagueMatches.data.events] : 'No upcomming matches this season!'
            })
        }
        render() {
        const { teams, nextMatches } = this.state;
            if (teams.length === 0) return <Loader header><div></div></Loader>;
            return (
                <WrappedComponent {...this.props}
                    teams={teams}
                    nextMatches={nextMatches}
             />
            )
        }
    }
};