import React from 'react'
import { WrapperCenter, SignInMessage } from '../../styleComponents/index'
import * as ROUTES from '../../constants/routes'
import { Link } from 'react-router-dom'

export const FavouriteTeams = () => {
    return(
        <WrapperCenter>
            <SignInMessage as={Link} to={ROUTES.SIGN_IN}>You have to Sign in! to see this section </SignInMessage>
            <br />
            <SignInMessage as={Link} to={ROUTES.SIGN_UP}>Don't have an account yet? Create new account!</SignInMessage>
        </WrapperCenter>
    );
}