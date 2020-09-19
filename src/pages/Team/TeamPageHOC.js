import React from 'react';
import axios from 'axios';
import { Loader } from '../../styleComponents/index'
import * as DATA from '../../constants/data';

export default (WrappedComponent) => {
    return class TeamPageHOC extends React.Component {
        state = {
            nextMatches: [],
            lastMatches: [],
            //players: [],
        };

        async componentDidMount() {
            const { teamid } = this.props.location.state.state[0];

            let next5 = await axios.get(DATA.NEXT_MATCHES + teamid);
            let last5 = await axios.get(DATA.LAST_MATCHES + teamid);
            //let players = await axios.get(DATA.PLAYERS + teamid);

            this.setState({
                 nextMatches: next5.data.events !== null ? [...next5.data.events] : "No upcomming matches this season!",
                 lastMatches: [...last5.data.results],
            //    // players: [...players.data.player]
             });
        }

        render() {
             if (this.state.lastMatches.length === 0) return <Loader header><div></div></Loader>; //next matches nie last
            return (
                <WrappedComponent {...this.props}
                    nextMatches={this.state.nextMatches}
                    lastMatches={this.state.lastMatches}
                   // players={this.state.players}
                   />
            )
        }
    }
};
