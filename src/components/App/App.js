import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'
import Navigation from '../Navigation/Navigation'
import { LandingPage, SignInPage, AccountPage, AdminPage,
     LeaguePage, NotFoundPage, PasswordForgetPage, SignUpPage, TeamPage} from "../../pages";
import Layout from '../../Layout/Layout'
import { withAuthentication } from '../Session'
import AppHOC from './AppHOC'

class App extends Component {
    render() {
        const {leagues, windowWidth} = this.props
        const {LANDING, LEAGUE, TEAM, SIGN_UP, SIGN_IN, PASSWORD_FORGET, ACCOUNT, ADMIN} = ROUTES
        return (
            <Router>
                <Layout>
                    <Navigation />
                    <Switch>
                        <Route exact path={LANDING} render={() => <LandingPage leagues={leagues} windowWidth={windowWidth} />} />
                        <Route exact path={LEAGUE} render={() =>  <LeaguePage windowWidth={windowWidth} />}/>
                        <Route exact path={TEAM} component={TeamPage} />
                        <Route exact path={SIGN_UP} component={SignUpPage} />
                        <Route exact path={SIGN_IN} component={SignInPage} />
                        <Route exact path={PASSWORD_FORGET} component={PasswordForgetPage} />
                        <Route exact path={ACCOUNT} component={AccountPage} />
                        <Route exact path={ADMIN} component={AdminPage} />

                        <Route component={NotFoundPage} />
                    </Switch>

                </Layout>
            </Router>
        );
    }
}

export default withAuthentication(AppHOC(App));