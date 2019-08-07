import React, { Component } from 'react';
import { withRouter } from "react-router"
import { Wrapper, LeagueInfo, WrapperNotCenter, BackArrow, LeagueHeader, LeagueLogo } from "../../styleComponents";
import ReactTable from "react-table";
import LeagueHOC from './LeagueHOC';
import Larrow from '../../assets/leftArrow.png'

class League extends Component {
    render() {
console.log(this.props)
        const columns = [
            {
                Header: '#',
                minWidth: 2,
                Cell: props => <span>{props.index + 1}</span>,
                style: {display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}
            }, {
                accessor: 'logo',
                minWidth: 4,
                Cell: props => <img src={props.value} width="30" height="30" alt="logo" />,
                style: { display: 'flex', justifyContent: "center", alignItems: 'center', }
            }, {
                Header: 'Team',
                accessor: 'name',
                minWidth: 13,
                Cell: props => <span>{props.value}</span>,
                style: {display: 'flex', alignItems: 'center', height: '100%'}
            }, {
                Header: 'PLD',
                accessor: 'played',
                minWidth: 7,
                Cell: props => <span>{props.value}</span>,
                style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }
            }, {
                Header: 'W',
                accessor: 'win',
                minWidth: 4,
                Cell: props => <span>{props.value}</span>,
                style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }
            }, {
                Header: 'D',
                accessor: 'draw',
                minWidth: 4,
                Cell: props => <span>{props.value}</span>,
                style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }
            }, {
                Header: 'L',
                accessor: 'loss',
                minWidth: 4,
                Cell: props => <span>{props.value}</span>,
                style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }
            }, {
                Header: 'G+',
                accessor: 'goalsfor',
                minWidth: 4,
                Cell: props => <span>{props.value}</span>,
                style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }
            }, {
                Header: 'G-',
                accessor: 'goalsagainst',
                minWidth: 4,
                Cell: props => <span>{props.value}</span>,
                style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }
            }, {
                Header: 'P',
                accessor: 'total',
                minWidth: 3,
                Cell: props => <span>{props.value}</span>,
                style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }
            }
        ];
        return (
            <WrapperNotCenter row>

                <LeagueInfo>
                    <LeagueHeader onClick={this.props.history.goBack}>
                        <Wrapper row>
                            <BackArrow src={Larrow}></BackArrow>
                            {this.props.location.state.state[1].split('%20').splice(1).join(' ')}
                        </Wrapper>
                    </LeagueHeader>
                    <Wrapper row>
                        <LeagueLogo src={this.props.location.state.state[2]} />
                    </Wrapper>
                </LeagueInfo>

                <ReactTable
                    data={this.props.teams}
                    columns={columns}
                    className="-striped"
                    getTrProps={() => {
                        return {
                            style: { height: '46px' }
                        }
                    }}
                    getTbodyProps={() => {
                        return {
                            style: { backgroundColor: "rgba(105, 105, 105, 0.78)" }
                        }
                    }}
                    getProps={() => {
                        return {
                            style: { marginTop: '3vh', width: '75%', height: '80vh' }
                        }
                    }}
                    getTheadProps={() => {
                        return {
                            style: {
                                height: '60px', borderBottom: '3px solid #fff', display: 'flex',
                                justifyContent: "center", alignItems: 'center', flexDirection: 'row',
                                backgroundColor: "#272727a9", paddingRight: '16px'
                            }
                        }
                    }}

                />
            </WrapperNotCenter>
        )
    }
}
export const LeaguePage = withRouter(LeagueHOC(League));