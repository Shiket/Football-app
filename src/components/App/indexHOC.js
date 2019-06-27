import React from 'react';
import axios from 'axios';

export default (WrappedComponent) => {
    return class indexHOC extends React.Component {
        state = {
            leagues: {},
        }
        //
        componentDidMount() {
            const leagueUrl = 'https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=';
            const leagueId = [4328,4332,4335,4331,4337,4334];
            // 4332 sa 4335 lalig 4331 bundes 4337 ere 4334 fr
            let league = {
                name:[],
            }

            leagueId.forEach(el => {
                axios.get(leagueUrl + el.toString())
                .then(res =>{
                    league.name.push(res.data.leagues[0].strLeague.split(' ').splice(1).join(' '))
                })
            })
            console.log(league)
            // let data = axios.all([leagueUrl + `4328`, leagueUrl + '4335', leagueUrl + '4331', leagueUrl + '4337', leagueUrl + '4334'])
            //     .then(axios.spread(function (acct, perms) {
            //         console.log(perms);
            //     }))
          }
        render() {
            if (this.state.length === 0) return <div>Loading..</div>
            return (
                <WrappedComponent {...this.props} />
                // context do sesji
            )
        }
    }
};
