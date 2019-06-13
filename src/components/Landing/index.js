import React, { Component } from 'react';
import axios from 'axios'
class LandingPage extends Component {

    componentDidMount() {
        document.body.classList.add("bgswap");
        axios.get(`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`)
            .then(res => {
                const persons = res.data;
                console.log(persons)
            })
    }
    render() {
        return (
            <div className="leagues-container">
                <div className="box">
                    <table>
                        <tr>
                            <td>logo</td>
                            <td>league name</td>
                            <td>trophy</td>
                            <td>first team</td>
                            <td>favourite</td>
                        </tr>

                        <tr>
                            <td>logo</td>
                            <td>league name</td>
                            <td>trophy</td>
                            <td>first team</td>
                            <td>favourite</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default LandingPage;