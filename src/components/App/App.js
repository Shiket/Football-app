import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'
import Navigation from '../Navigation/Navigation'
import { LandingPage, SignInPage, AccountPage, AdminPage,
HomePage, LeaguePage, NotFoundPage, PasswordForgetPage, SignUpPage} from "../../pages";
import Layout from '../../Layout/Layout'
import { withAuthentication } from '../Session'

class App extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Navigation />

                    <Switch>
                        <Route exact path={ROUTES.LANDING} component={LandingPage} />
                        <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
                        <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
                        <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
                        <Route exact path={ROUTES.HOME} component={HomePage} />
                        <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
                        <Route exact path={ROUTES.ADMIN} component={AdminPage} />
                        <Route exact path={ROUTES.LEAGUE} component={LeaguePage} />

                        <Route component={NotFoundPage} />
                    </Switch>

                </Layout>
            </Router>
        );
    }
}

export default withAuthentication(App);