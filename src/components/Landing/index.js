import React, { Component } from 'react';

import bg from '../../img/bg1.jpg'
import bg1 from '../../img/bg.jpg'


class LandingPage extends Component {

    componentDidMount() {
        document.body.classList.add("bgswap");
    }

    render()
    {
        return (
            <div className="home">
                <h1>HOME</h1>
            </div>
        )
    }
}

export default LandingPage;