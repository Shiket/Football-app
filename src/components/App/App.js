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
        return (
            <Router>
                <Layout>
                    <Navigation />

                    <Switch>
                        <Route exact path={ROUTES.LANDING} render={() => <LandingPage leagues={this.props.leagues} windowWidth={this.props.windowWidth} />} />
                        <Route exact path={ROUTES.LEAGUE} render={() =>  <LeaguePage windowWidth={this.props.windowWidth} />}/>
                        <Route exact path={ROUTES.TEAM} component={TeamPage} />
                        <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
                        <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
                        <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
                        <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
                        <Route exact path={ROUTES.ADMIN} component={AdminPage} />

                        <Route component={NotFoundPage} />
                    </Switch>

                </Layout>
            </Router>
        );
    }
}

export default withAuthentication(AppHOC(App));