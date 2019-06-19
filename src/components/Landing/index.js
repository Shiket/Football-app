import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    `;

class LandingPage extends Component {

    componentDidMount() {
        document.body.classList.add("bgswap");
        axios.get(`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`)
            .then(res => {
                const persons = res.data;
                console.log(persons)
            })
    }

    render() {
        return (
            <StyledWrapper>

            </StyledWrapper>
        )
    }
}

export default LandingPage;