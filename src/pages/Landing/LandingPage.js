import React, { useState } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { WrapperCenter, Headers, Switch, LandingSection, FavTeamsSection, FormTitle, FormLogo } from '../../styleComponents/index'
import { ReactTableDefaults } from 'react-table'
import * as ROUTES from '../../constants/routes'
import { Link } from 'react-router-dom'
import ball from '../../assets/ball.png'
import { withRouter } from "react-router"

Object.assign(ReactTableDefaults, {
    minRows: 5,
    showPagination: false,
    resizable: false,
    sortable: true,
    style: { color: "#fff", border: 'none' }
});
const Landing = ({ windowWidth, leagues, history }) => {
    let [LeagueView, setYourTeams] = useState(true);


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
            Cell: ({ value }) => <span >{value}</span>,
            style: { display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100%' }

        }, {
            accessor: 'country',
            minWidth: 120,
            show: (windowWidth > 500),
            Cell: ({ value }) => <span>{value}</span>,
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
            Cell: ({ value }) => <span>{value}</span>,
            style: { display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100%' }
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
            style: { display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100%' }
        }
    ];

    return (
        <WrapperCenter>
            <Headers>
                <Switch onClick={() => setYourTeams(LeagueView = true)} color>Add new team</Switch>
                <Switch onClick={() => setYourTeams(LeagueView = false)}>Your teams</Switch>
            </Headers>
            {LeagueView === true ?
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
                                        {
                                            state: [leagues[rowInfo.index].table,
                                            leagues[rowInfo.index].orgName,
                                            leagues[rowInfo.index].logo,
                                            leagues[rowInfo.index].id]
                                        })
                                }
                            }
                        }}
                        getProps={() => {
                            return {
                                style: { width: '82%', backgroundColor: "rgba(105, 105, 105, 0.78)", margintBottom: "50px" }
                            }
                        }}
                        getTheadProps={() => {
                            return {
                                style: { display: 'none' }
                            }
                        }}
                    />
                </LandingSection> :
                <FavTeamsSection>
                    <WrapperCenter>
                        <WrapperCenter marginB row>
                            <img src={ball} width="48" height="48" alt="ball" />
                            <FormLogo>Football app</FormLogo>
                            <br /><br /><br /><br />
                        </WrapperCenter>
                        <FormTitle>You have to <Link to={ROUTES.SIGN_IN}>Sign in!</Link> to see this section </FormTitle>
                        <FormTitle>Don't have account yet? <Link to={ROUTES.SIGN_UP}>Create new account!</Link></FormTitle>
                    </WrapperCenter>
                </FavTeamsSection>}


        </WrapperCenter>
    )
}
export const LandingPage = withRouter(Landing);