import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import ball from '../../assets/ball.png'
import { Header, Logo, WrapperCenter, NavBall } from '../../styleComponents/index';
import {NoAuthNavigation, AuthNavigation} from '../index'

const Navigation = () => (
        <Header>
            <WrapperCenter row as={Link} to={ROUTES.LANDING}>
                <NavBall animate src={ball} alt="ball img"/>
                <Logo>Football app</Logo>
            </WrapperCenter>
                <AuthUserContext.Consumer>
                    {authUser => authUser ? <AuthNavigation /> : <NoAuthNavigation />}
                </AuthUserContext.Consumer>
        </Header>
);

export default Navigation;