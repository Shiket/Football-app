import React from 'react'
import { WrapperCenter, SignInMessage } from '../../styleComponents/index'
import { AuthUserContext } from '../../components/Session';
import { FavouriteTeamsList } from '../index'
import * as ROUTES from '../../constants/routes'
import { Link } from 'react-router-dom'
import { withFirebase } from '../../components/Firebase/index';

const FavouriteTeamsContent = ({firebase}) => {
    return (
        <AuthUserContext.Consumer>
            {authUser => authUser ?
                <FavouriteTeamsList firebase={firebase} authUserId={authUser.uid}/>
                : <WrapperCenter>
                    <SignInMessage as={Link} to={ROUTES.SIGN_IN}>You have to Sign in! to see this section </SignInMessage>
                    <br />
                    <SignInMessage as={Link} to={ROUTES.SIGN_UP}>Don't have an account yet? Create new account!</SignInMessage>
                </WrapperCenter>
            }
        </AuthUserContext.Consumer>
    );
}

export const FavouriteTeams = withFirebase(FavouriteTeamsContent)