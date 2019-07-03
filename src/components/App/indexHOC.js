import React from 'react';
import axios from 'axios';

export default (WrappedComponent) => {
    return class indexHOC extends React.Component {
        state = {
            leagues: [],
        }

        async componentDidMount() {
            const leagueUrl = 'https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=';
            const leagueId = [4328, 4332, 4335, 4331, 4337, 4334]; // 28pl 32sa 35la 31bn 37er 34fr
            //constans
            let data = [];

            for (const item of leagueId) {
                data.push(await axios.get(leagueUrl + item));
            }

            const leaguesData = data.map((res) => ({
                name: res.data.leagues[0].strLeague.split(' ').splice(1).join(' '),
                country: res.data.leagues[0].strCountry,
                logo: res.data.leagues[0].strBadge
            }));

            this.setState({
                leagues: [...leaguesData]
            });
        }
        render() {
            if (this.state.leagues.length === 0) return <div>Loading..</div>
            return (
                <WrappedComponent {...this.props}
                    leagues={this.state.leagues} />
            )
        }
    }
};
