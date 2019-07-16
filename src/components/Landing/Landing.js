import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Wrapper from '../../styleComponents/Wrapper/Wrapper'
import { ReactTableDefaults } from 'react-table'
import { withRouter } from "react-router"
import landingHOC from './LandingHOC'

Object.assign(ReactTableDefaults, {
    minRows: 2,
    showPagination: false,
    resizable: false,
    sortable: false,
    style: {
        width: '85%',
        backgroundColor: "rgba(105, 105, 105, 0.78)",
        color: "#fff",
        fontSize: 17,
        border: 'none',
        marginTop: '8vh'
    }
});

class LandingPage extends Component {

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        const columns = [
            {
                accessor: 'logo',
                minWidth: 100,
                Cell: props => <img src={props.value} alt='logo' width="80" height="80" />,
                style: { display: 'flex', justifyContent: "center", minHeight: '100px', alignItems: 'center' },
                height: '100%',
            }, {
                accessor: 'name',
                Cell: props  =>
                    <span style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        height: '100%',
                        marginLeft: '10%'
                    }}>{props.value}</span>,
                minWidth: 140,
            }, {
                accessor: 'country',
                minWidth: 100,
                show: (this.props.windowWidth > 500),
                Cell: props => <span style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%'
                }}>{props.value}</span>
            }, {
                accessor: 'medal',
                minWidth: 35,
                show: (this.props.windowWidth > 750),
                style: { display: 'flex', flexDirection: 'column', justifyContent: "center", }

            }, {
                accessor: 'firstTeam',
                minWidth: 120,
                show: (this.props.windowWidth > 750),
                Cell: props => <span style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%',
                }}>{props.value}</span>
            }, {
                accessor: 'secondMedal',
                minWidth: 35,
                show: (this.props.windowWidth > 1000),
                style: { display: 'flex', flexDirection: 'column', justifyContent: "center" }

            }, {
                accessor: 'secondTeam',
                minWidth: 120,
                show: (this.props.windowWidth > 1000),
                Cell: props => <span style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%',
                }}>{props.value}</span>
            }
        ];
        return (
            <Wrapper>
                <ReactTable
                    data={this.props.leagues}
                    columns={columns}
                    className="-striped"
                    getTrProps={(state, rowInfo) => {
                        return {
                            style: { height: '105px' },
                            onClick: () => {
                                this.props.history.push(`/standings/${rowInfo.original.name.split(' ').join('')}`)
                            }
                        }
                    }}
                    getTheadProps={() => {
                        return {
                            style: { display: 'none' }
                        }
                    }}
                />
            </Wrapper>
        )
    }
}

export default withRouter(landingHOC(LandingPage));