import React from 'react';
import axios from 'axios';
import medal from '../../assets/medal.png'
import secondMedal from '../../assets/medal2.png'
import { Loader } from '../../styleComponents/index'
import * as DATA from '../../constants/data';

export default (WrappedComponent) => {
    return class indexHOC extends React.Component {
        state = {
            leagues: [],
            width: 0,
        };

        async componentDidMount() {
            this.updateWindowDimensions();
            window.addEventListener("resize", this.updateWindowDimensions);

            let data = [];
            let tables = [];
            const {LEAGUE_ID, TABLE_URL, LEAGUE_URL} = DATA

            for (const item of LEAGUE_ID) {
                tables.push(await axios.get(TABLE_URL + item + '&s=2019-2020'));
            }

            for (const item of LEAGUE_ID) {
                data.push(await axios.get(LEAGUE_URL + item));
            }

            const tablesData = tables.map((res) => ({
                table: res.data.table,
            }));

            const leaguesData = data.map((res, i) => ({
                name: res.data.leagues[0].strLeague.split(' ').splice(1).join(' '),
                orgName: res.data.leagues[0].strLeague.split(' ').join('%20'),
                country: res.data.leagues[0].strCountry,
                logo: res.data.leagues[0].strBadge,
                medal: <img src={medal} width="35" height="35" alt='medal' />,
                secondMedal: <img src={secondMedal} width="35" height="35" alt='medal' />,
                firstTeam: tablesData[i].table[0].name,
                secondTeam: tablesData[i].table[1].name,
                table: tablesData[i].table,
                id: res.data.leagues[0].idLeague
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
            const { leagues, width } = this.state
            if (leagues.length === 0 || width === 0) return <Loader><div></div></Loader>;
            return (
                <WrappedComponent {...this.props}
                    leagues={leagues}
                    windowWidth={width} />
            )
        }
    }
};
