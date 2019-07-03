import React, { Component } from 'react';
import styled from 'styled-components'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { ReactTableDefaults } from 'react-table'

const StyledWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    padding-top:20px;
    `;

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
        border: 'none'
    },
})

class LandingPage extends Component {

    componentDidMount() {
        document.body.classList.remove("bgForm");
    }

    render() {
        const columns = [{
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
            minWidth: 200,
        }, {
            accessor: 'country',
            minWidth: 200,
            Cell: props => <span style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%'
            }}>{props.value}</span>
        }, {
            accessor: 'firstTeam',
            minWidth: 200,
        }
        ]
        return (
            <StyledWrapper>
                <ReactTable
                    data={this.props.leagues}
                    columns={columns}
                    className="-striped"
                />
            </StyledWrapper>
        )
    }
}

export default LandingPage;