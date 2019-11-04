import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { WrapperCenter } from '../../styleComponents/index'
import { ReactTableDefaults } from 'react-table'
import { withRouter } from "react-router"

Object.assign(ReactTableDefaults, {
    minRows: 5,
    showPagination: false,
    resizable: false,
    sortable: true,
    style: { color: "#fff", border: 'none'}
});

const Landing = ({ windowWidth, leagues, history}) => {

        const columns = [
            {
                accessor: 'logo',
                minWidth: 100,
                Cell: ({value}) => <img src={value} alt='logo' width="80" height="80" />,
                style: { display: 'flex', justifyContent: "center", minHeight: '100px', alignItems: 'center' },
                height: '100%',
            }, {
                accessor: 'name',
                minWidth: 180,
                Cell: ({value}) => <span >{value}</span>,
                style: { display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100%' }

            }, {
                accessor: 'country',
                minWidth: 120,
                show: (windowWidth > 500),
                Cell: ({value}) => <span>{value}</span>,
                style: { display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100%' }
            }, {
                accessor: 'medal',
                minWidth: 35,
                show: (windowWidth > 750),
                style: { display: 'flex', alignItems: 'center', justifyContent: "center" }

            }, {
                accessor: 'firstTeam',
                minWidth: 120,
                show: (windowWidth > 750),
                Cell: ({value}) =><span>{value}</span>,
                style: {display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100%'}
            }, {
                accessor: 'secondMedal',
                minWidth: 35,
                show: (windowWidth > 1000),
                style: { display: 'flex', alignItems: 'center', justifyContent: "center" }

            }, {
                accessor: 'secondTeam',
                minWidth: 120,
                show: (windowWidth > 1000),
                Cell: ({value}) => <span>{value}</span>,
                style: { display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100%' }
            }
        ];

        return (
            <WrapperCenter>
                <ReactTable
                    data={leagues}
                    columns={columns}
                    className="-striped"
                    getTrProps={(state, rowInfo) => {
                        return {
                            style: { height: '105px' },
                            onClick: () => {
                                history.push(`/standings/${rowInfo.original.name.split(' ').join('')}`,
                                    { state: [leagues[rowInfo.index].table,
                                              leagues[rowInfo.index].orgName,
                                              leagues[rowInfo.index].logo,
                                              leagues[rowInfo.index].id] })
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
            </WrapperCenter>
        )
    }
export const LandingPage = withRouter(Landing);