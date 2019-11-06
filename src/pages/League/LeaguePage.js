import React from 'react';
import { withRouter } from "react-router"
import { WrapperCenter, LeagueInfo, Wrapper, BackArrow, LeagueHeader, LeagueLogo, LeagueMatches, SectionHeader, Matches } from "../../styleComponents";
import ReactTable from "react-table";
import LeagueHOC from './LeagueHOC';
import Larrow from '../../assets/leftArrow.png'

const League = ({ history, location, nextMatches, teams, windowWidth }) => {
    const next = nextMatches.map(a =>
        <LeagueMatches>
            <div>{a.strEvent.split('vs')[0]} - {a.strEvent.split('vs')[1]}</div>
            <div>{a.dateEvent.slice(5, a.lenght)} - {a.strTime.slice(0, 5)}</div>
        </LeagueMatches>
    );

    const columns = [
        {
            Header: '#',
            minWidth: 2,
            Cell: ({ index }) => <span>{index + 1}</span>,
            style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }
        }, {
            accessor: 'strTeamBadge',
            minWidth: 4,
            Cell: ({ value }) => <img src={value} width="30" height="30" alt="logo" />,
            style: { display: 'flex', justifyContent: "center", alignItems: 'center', }
        }, {
            Header: 'Team',
            accessor: 'name',
            minWidth: 13,
            Cell: ({ value }) => <span>{value}</span>,
            style: { display: 'flex', alignItems: 'center', height: '100%' }
        }, {
            Header: 'P',
            accessor: 'total',
            minWidth: 3,
            Cell: ({ value }) => <span>{value}</span>,
            style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }
        }, {
            Header: 'M',
            accessor: 'played',
            minWidth: 3,
            Cell: ({ value }) => <span>{value}</span>,
            style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }
        }, {
            Header: 'W',
            accessor: 'win',
            minWidth: 3,
            Cell: ({ value }) => <span>{value}</span>,
            style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }
        }, {
            Header: 'D',
            accessor: 'draw',
            minWidth: 3,
            show: windowWidth > 470,
            Cell: ({ value }) => <span>{value}</span>,
            style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }
        }, {
            Header: 'L',
            accessor: 'loss',
            minWidth: 3,
            show: windowWidth > 470,
            Cell: ({ value }) => <span>{value}</span>,
            style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }
        }, {
            Header: 'G+',
            accessor: 'goalsfor',
            minWidth: 3,
            show: windowWidth > 730,
            Cell: ({ value }) => <span>{value}</span>,
            style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }
        }, {
            Header: 'G-',
            accessor: 'goalsagainst',
            minWidth: 3,
            show: windowWidth > 730 ,
            Cell: ({ value }) => <span>{value}</span>,
            style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }
        }
    ];
    return (
        <Wrapper marginR marginL row>

            <LeagueInfo>
                <LeagueHeader onClick={history.goBack}>
                    <WrapperCenter row>
                        <BackArrow src={Larrow} alt='back arrow'></BackArrow>
                        {location.state.state[1].split('%20').splice(1).join(' ')}
                    </WrapperCenter>
                </LeagueHeader>
                <WrapperCenter row border>
                    <LeagueLogo src={location.state.state[2]} />
                </WrapperCenter>
                <Matches>
                    <SectionHeader>Next {location.state.state[1].split('%20').splice(1).join(' ')} matches</SectionHeader>
                    {next}
                </Matches>
            </LeagueInfo>

            <ReactTable
                data={teams}
                columns={columns}
                className="-striped"
                getTrProps={(state, rowInfo) => {
                    return {
                        style: { height: '46px', cursor: 'pointer' },
                        onClick: () => {
                            history.push(`/Football-app/teams/${rowInfo.original.name}`,
                                { state: [teams[rowInfo.index], location.state.state[2]] })
                        }
                    }
                }}
                getTbodyProps={() => {
                    return {
                        style: { backgroundColor: "rgba(105, 105, 105, 0.78)" }
                    }
                }}
                getProps={() => {
                    return {
                        style: { width: '90%', height:'84vh', paddingTop: '5vh',paddingBottom:'1vh' },
                    }
                }}
                getTheadProps={() => {
                    return {
                        style: {
                            height: '55px', borderBottom: '3px solid #fff', display: 'flex',
                            justifyContent: "center", alignItems: 'center', flexDirection: 'row',
                            backgroundColor: "#272727a9"
                        }
                    }
                }}

            />
        </Wrapper>
    )
}
export const LeaguePage = withRouter(LeagueHOC(League));