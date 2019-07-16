import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import SignOutButton from '../SignOut/SignOut';
import { AuthUserContext } from '../Session';
import ball from '../../assets/ball.png'
import Layout from '../../Layout/Layout';
import { Header, Logo, Wrapper } from '../../styleComponents';

const Navigation = () => (
    <Layout>
        <Header>
            <Wrapper row as={Link} to={ROUTES.landing}>
                <img src={ball} width="37" height="37" alt="logo-img" />
                <Logo>Football app</Logo>
            </Wrapper>

                <AuthUserContext.Consumer>
                    {authUser =>
                        authUser ? <NavigationAuth /> : <NavigationNonAuth />
                    }
                </AuthUserContext.Consumer>
        </Header>
    </Layout>

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