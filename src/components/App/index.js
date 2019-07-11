import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import NotFound from '../NotFound'

import indexHOC from './indexHOC';
import Layout from '../../Layout/Layout'
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

class App extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Navigation />

                    <Switch>
                        <Route exact path={ROUTES.LANDING} render={() => <LandingPage leagues={this.props.leagues} windowWidth={this.props.windowWidth} />} />
                        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
                        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
                        <Route path={ROUTES.HOME} component={HomePage} />
                        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
                        <Route path={ROUTES.ADMIN} component={AdminPage} />

                        <Route component={NotFound} />
                    </Switch>

                </Layout>
            </Router>
        );
    }
}

export default withAuthentication(indexHOC(App));