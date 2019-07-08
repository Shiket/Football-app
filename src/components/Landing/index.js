import React, { Component } from 'react';
import styled from 'styled-components'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Wrapper from '../../styleComponents/Wrapper/Wrapper'
import { ReactTableDefaults } from 'react-table'



Object.assign(ReactTableDefaults, {
    minRows: 2,
    showPagination: false,
    resizable: false,
    sortable: false,
    style: {
        width: '85%',
        backgroundColor: "rgba(117, 117, 117, 0.8)",
        color: "#fff",
        fontSize: 17,
        border: 'none',
        marginTop: 50
    },
})

class LandingPage extends Component {

    componentDidMount() {
        document.body.classList.remove("bgForm");
    }

    render() {
        const columns = [
            {
            accessor: 'logo',
            minWidth: 100,
            Cell: props => <img src={props.value} alt='logo' width="80" height="80" />,
            style: { display: 'flex', justifyContent: "center", minHeight: '100px', marginTop: '3px' }
        }, {
            accessor: 'name',
            Cell: props => <span style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%',
                marginLeft: '10%'
            }}>{props.value}</span>,
            minWidth: 140,
        }, {
            accessor: 'country',
            minWidth: 120,
            Cell: props => <span style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%'
            }}>{props.value}</span>
        }, {
            accessor: 'medal',
            minWidth: 35,
            style: { display: 'flex', flexDirection: 'column', justifyContent: "center", }

        }, {
            accessor: 'firstTeam',
            minWidth: 120,
            Cell: props => <span style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%',
            }}>{props.value}</span>
        }, {
            accessor: 'secondMedal',
            minWidth: 35,
            style: { display: 'flex', flexDirection: 'column', justifyContent: "center", }

        }, {
            accessor: 'secondTeam',
            minWidth: 120,
            Cell: props => <span style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%',
            }}>{props.value}</span>
        }

        ]
        return (
            <Wrapper>
                <ReactTable
                    data={this.props.leagues}
                    columns={columns}
                    className="-striped"
                />
            </Wrapper>
        )
    }
}

export default LandingPage;