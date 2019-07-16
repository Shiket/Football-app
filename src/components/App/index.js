import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import LandingPage from '../Landing/Landing';
import SignUpPage from '../SignUp/SignUp';
import SignInPage from '../SignIn/SignIn';
import PasswordForgetPage from '../PasswordForget/PasswordForget';
import HomePage from '../Home/Home';
import AccountPage from '../../pages/AccountPage/AccountPage';
import AdminPage from '../../pages/AdminPage/AdminPage';
import League from '../League/League';
import NotFound from '../NotFound/NotFound';

import Layout from '../../Layout/Layout';
import { withAuthentication } from '../Session';
import { ROUTES } from '../../constants/routes';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Navigation />

          <Switch>
            <Route exact path={ROUTES.landing} component={LandingPage} />} />
            <Route exact path={ROUTES.signUp} component={SignUpPage} />
            <Route exact path={ROUTES.signIn} component={SignInPage} />
            <Route
              exact
              path={ROUTES.passwordForget}
              component={PasswordForgetPage}
            />
            <Route exact path={ROUTES.home} component={HomePage} />
            <Route exact path={ROUTES.account} component={AccountPage} />
            <Route exact path={ROUTES.admin} component={AdminPage} />
            <Route exact path={ROUTES.league} component={League} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default withAuthentication(App);
