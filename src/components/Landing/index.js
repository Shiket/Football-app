import React, { Component } from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Wrapper from '../../styleComponents/Wrapper/Wrapper'
import { ReactTableDefaults } from 'react-table'
import { withRouter } from "react-router";

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
})

class LandingPage extends Component {

    componentDidMount() {
        document.body.classList.remove("bgForm");
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
                show: (this.props.windowWidth > 500 ? true : false),
                Cell: props => <span style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%'
                }}>{props.value}</span>
            }, {
                accessor: 'medal',
                minWidth: 35,
                show: (this.props.windowWidth > 750 ? true : false),
                style: { display: 'flex', flexDirection: 'column', justifyContent: "center", }

            }, {
                accessor: 'firstTeam',
                minWidth: 120,
                show: (this.props.windowWidth > 750 ? true : false),
                Cell: props => <span style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%',
                }}>{props.value}</span>
            }, {
                accessor: 'secondMedal',
                minWidth: 35,
                show: (this.props.windowWidth > 1000 ? true : false),
                style: { display: 'flex', flexDirection: 'column', justifyContent: "center" }

            }, {
                accessor: 'secondTeam',
                minWidth: 120,
                show: (this.props.windowWidth > 1000 ? true : false),
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
                    getTrProps={(state, rowInfo, row, instance) => {
                        return {
                            style: { height: '105px' },
                            onClick: () => {
                                this.props.history.push(`${rowInfo.original.name.split(' ').join('')}`)
                                   // `${rowInfo.original.name.split(' ').join('')}`
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

export default withRouter(LandingPage);