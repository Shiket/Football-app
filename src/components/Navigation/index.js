import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import SignOutButton from '../SignOut';
import { AuthUserContext } from '../Session';
import ball from '../../img/ball.png'

const Navigation = () => (

    <div className="header">
        <Link className="logo" to={ROUTES.LANDING}>
            <img className="logo-img" src={ball} width="38" height="38" alt="ball" />
            <div className="logo-name">Football app</div>
        </Link>

        <div className="nav">
            <AuthUserContext.Consumer>
                {authUser =>
                    authUser ? <NavigationAuth /> : <NavigationNonAuth />
                }
            </AuthUserContext.Consumer>
        </div>
    </div>

);

const NavigationAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li>
            <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        <li>
            <Link to={ROUTES.ADMIN}>Admin</Link>
        </li>
        <li>
            <SignOutButton />
        </li>
    </ul>
);

const NavigationNonAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
    </ul>
);


export default Navigation;