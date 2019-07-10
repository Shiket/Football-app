import React from 'react';
import axios from 'axios';
import medal from '../../img/medal.png'
import secondMedal from '../../img/medal2.png'
import Loader from '../../styleComponents/Loader/Loader'
import * as DATA from '../../constants/data';

export default (WrappedComponent) => {
    return class indexHOC extends React.Component {
        state = {
            leagues: [],
            width: 0,
        }

        async componentDidMount() {

            this.updateWindowDimensions();
            window.addEventListener("resize", this.updateWindowDimensions);

            let data = [];
            let tables = [];

            for (const item of DATA.LEAGUE_ID) {
                tables.push(await axios.get(DATA.TABLE_URL + item + '&s=1819'));
            }

            for (const item of DATA.LEAGUE_ID) {
                data.push(await axios.get(DATA.LEAGUE_URL + item));
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

        componentWillUnmount() {
            window.removeEventListener("resize", this.updateWindowDimensions);
        }

        updateWindowDimensions = () => {
            this.setState({ width: window.innerWidth });
        };

        render() {
            if (this.state.leagues.length === 0 || this.state.width === 0) return <Loader><div></div></Loader>
            return (
                <WrappedComponent {...this.props}
                    leagues={this.state.leagues}
                    windowWidth={this.state.width} />
            )
        }
    }
};
