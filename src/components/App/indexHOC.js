import React from 'react';
import axios from 'axios';
import medal from '../../img/medal.png'
import secondMedal from '../../img/medal2.png'

export default (WrappedComponent) => {
    return class indexHOC extends React.Component {
        state = {
            leagues: [],
        }

        async componentDidMount() {
            const leagueUrl = 'https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=';
            const tableUrl = 'https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=';
            const leagueId = [4328, 4332, 4335, 4331, 4337, 4334]; // 28pl 32sa 35la 31bn 37er 34fr
            //constans
            let data = [];
            let tables = [];

            for (const item of leagueId) {
                tables.push(await axios.get(tableUrl + item + '&s=1819'));
            }

            for (const item of leagueId) {
                data.push(await axios.get(leagueUrl + item));
            }

            const tablesData = tables.map((res,i) =>  ({
                table: res.data.table,
            }));

            tablesData.forEach(a => console.log(a.table))
            const leaguesData = data.map((res, i) => ({
                name: res.data.leagues[0].strLeague.split(' ').splice(1).join(' '),
                country: res.data.leagues[0].strCountry,
                logo: res.data.leagues[0].strBadge,
                medal: <img src={medal} width="35" height="35" alt='medal'/>,
                secondMedal: <img src={secondMedal} width="35" height="35" alt='medal' />,
                firstTeam: tablesData[i].table[0].name,
                secondTeam: tablesData[i].table[1].name
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
