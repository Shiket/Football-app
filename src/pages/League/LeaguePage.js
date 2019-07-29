import React, { Component } from 'react';
import { withRouter } from "react-router"
import {Wrapper} from "../../styleComponents";
import ReactTable from "react-table";

export class LeaguePage extends Component {

    render(){
        console.log(this.props.location.state.state);
        const columns = [
            {
                Header: '#',
                minWidth: 4,
                Cell: props => <span style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    height: '100%'
                }}>{props.index+1}</span>
            },{
                Header: 'Team',
                accessor: 'name',
                minWidth: 20,
                Cell: props => <span style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%'
                    }}>{props.value}</span>
            }, {
                Header: 'PLD',
                accessor: 'played',
                minWidth: 5,
                Cell: props => <span style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    height: '100%',
                }}>{props.value}</span>
            }, {
                Header: 'W',
                accessor: 'win',
                minWidth: 3,
                Cell: props => <span style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    height: '100%',
                }}>{props.value}</span>
            }, {
                Header: 'D',
                accessor: 'draw',
                minWidth: 3,
                Cell: props => <span style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    height: '100%',
                }}>{props.value}</span>
            }, {
                Header:'L',
                accessor: 'loss',
                minWidth: 3,
                Cell: props => <span style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    height: '100%',
                }}>{props.value}</span>
            }, {
                Header: 'G+',
                accessor: 'goalsfor',
                minWidth: 4,
                Cell: props => <span style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    height: '100%',
                }}>{props.value}</span>
            }, {
                Header: 'G-',
                accessor: 'goalsagainst',
                minWidth: 4,
                Cell: props => <span style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    height: '100%',
                }}>{props.value}</span>
            }, {
                Header: 'P',
                accessor: 'total',
                minWidth: 3,
                Cell: props => <span style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    height: '100%',
                }}>{props.value}</span>
            }
        ];
        return (
            <Wrapper>
                <ReactTable
                    data={this.props.location.state.state}
                    columns={columns}
                    className="-striped"
                    getTrProps={(state, rowInfo) => {
                        return {
                            style: { height: '38px' }
                        }
                    }}

                />
            </Wrapper>
        )
    }
}
withRouter(LeaguePage);