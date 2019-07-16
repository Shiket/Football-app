import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import LandingPage from '../Landing/Landing';
import SignUpPage from '../SignUp/SignUp';
import SignInPage from '../SignIn/SignIn';
import PasswordForgetPage from '../PasswordForget/PasswordForget';
import HomePage from '../Home/Home';
import AccountPage from '../Account/Account';
import AdminPage from '../Admin/Admin';
import League from '../League/League'
import NotFound from '../NotFound/NotFound'

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
                        <Route exact path={ROUTES.LANDING} component={LandingPage} />} />
                        <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
                        <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
                        <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
                        <Route exact path={ROUTES.HOME} component={HomePage} />
                        <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
                        <Route exact path={ROUTES.ADMIN} component={AdminPage} />
                        <Route exact path={ROUTES.LEAGUE} component={League} />

                        <Route component={NotFound} />
                    </Switch>

                </Layout>
            </Router>
        );
    }
}

export default withAuthentication(App);