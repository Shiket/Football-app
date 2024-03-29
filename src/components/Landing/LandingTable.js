import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { LandingSection } from '../../styleComponents/index'
import { ReactTableDefaults } from 'react-table'
import { useHistory } from 'react-router-dom'

export const LandingTable = ({windowWidth, leagues}) => {
    const history = useHistory();

    Object.assign(ReactTableDefaults, {
        minRows: 5,
        showPagination: false,
        resizable: false,
        sortable: true,
        style: { color: "#fff", border: 'none' }
    });

    const columns = [
        {
            accessor: 'logo',
            minWidth: 100,
            Cell: ({ value }) => <img src={value} alt='logo' width="70" height="70" />,
            style: { display: 'flex', justifyContent: "center", minHeight: '90px', alignItems: 'center' },
            height: '100%',
        }, {
            accessor: 'name',
            minWidth: 160,
            Cell: ({ value }) => <span>{value}</span>,
            style: { display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100%', fontSize:'19px' }

        }, {
            accessor: 'country',
            minWidth: 120,
            show: (windowWidth > 500),
            Cell: ({ value }) => <span>{value}</span>,
            style: { display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100%', fontSize:'19px' }
        }, {
            accessor: 'medal',
            minWidth: 35,
            show: (windowWidth > 750),
            style: { display: 'flex', alignItems: 'center', justifyContent: "center" }

        }, {
            accessor: 'firstTeam',
            minWidth: 120,
            show: (windowWidth > 750),
            Cell: ({ value }) => <span>{value}</span>,
            style: { display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100%', fontSize:'19px' }
        }, {
            accessor: 'secondMedal',
            minWidth: 35,
            show: (windowWidth > 1000),
            style: { display: 'flex', alignItems: 'center', justifyContent: "center" }

        }, {
            accessor: 'secondTeam',
            minWidth: 120,
            show: (windowWidth > 1000),
            Cell: ({ value }) => <span>{value}</span>,
            style: { display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100%', fontSize:'19px' }
        }
    ];
    return(
        <LandingSection>
            <ReactTable
                data={leagues}
                columns={columns}
                className="-striped"
                getTrProps={(state, rowInfo) => {
                    return {
                        style: { height: '92px', cursor: 'pointer' },
                        onClick: () => {
                            history.push(`/Football-app/standings/${rowInfo.original.name.split(' ').join('')}`,
                                { state:
                                    [leagues[rowInfo.index].table,
                                     leagues[rowInfo.index].orgName,
                                     leagues[rowInfo.index].logo,
                                     leagues[rowInfo.index].id] })
                        }
                    }
                }}
                getProps={() => {
                    return {style: { width: '82%', backgroundColor: "rgba(105, 105, 105, 0.78)", margintBottom: "50px" }}
                }}
                getTheadProps={() => {
                    return {style: { display: 'none' }}
                }}
            />
        </LandingSection>
    )
}