import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { Wrapper } from '../../styleComponents/index'
import { ReactTableDefaults } from 'react-table'
import { withRouter } from "react-router"

Object.assign(ReactTableDefaults, {
    minRows: 5,
    showPagination: false,
    resizable: false,
    sortable: true,
    style: { color: "#fff", border: 'none'}
});

class Landing extends Component {
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
                minWidth: 180,
                Cell: props => <span >{props.value}</span>,
                style: { display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100%' }

            }, {
                accessor: 'country',
                minWidth: 120,
                show: (this.props.windowWidth > 500),
                Cell: props => <span>{props.value}</span>,
                style: { display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100%' }
            }, {
                accessor: 'medal',
                minWidth: 35,
                show: (this.props.windowWidth > 750),
                style: { display: 'flex', alignItems: 'center', justifyContent: "center" }

            }, {
                accessor: 'firstTeam',
                minWidth: 120,
                show: (this.props.windowWidth > 750),
                Cell: props =><span>{props.value}</span>,
                style: {display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100%'}
            }, {
                accessor: 'secondMedal',
                minWidth: 35,
                show: (this.props.windowWidth > 1000),
                style: { display: 'flex', alignItems: 'center', justifyContent: "center" }

            }, {
                accessor: 'secondTeam',
                minWidth: 120,
                show: (this.props.windowWidth > 1000),
                Cell: props => <span>{props.value}</span>,
                style: { display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100%' }
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
                                this.props.history.push(`/standings/${rowInfo.original.name.split(' ').join('')}`,
                                    { state: [this.props.leagues[rowInfo.index].table, this.props.leagues[rowInfo.index].orgName, this.props.leagues[rowInfo.index].logo] })
                            }
                        }
                    }}
                    getProps={() => {
                        return {
                            style: { marginTop: '8vh', width: '85%', backgroundColor: "rgba(105, 105, 105, 0.78)" }
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
export const LandingPage = withRouter(Landing);