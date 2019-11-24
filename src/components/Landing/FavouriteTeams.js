import React from 'react'
import { WrapperCenter, FormTitle, FormLogo } from '../../styleComponents/index'
import * as ROUTES from '../../constants/routes'
import { Link } from 'react-router-dom'
import { IMAGES } from '../../assets/index'

export const FavouriteTeams = () => {
    return(
        <WrapperCenter>
            <WrapperCenter marginB row>
                <img src={IMAGES.ball} width="48" height="48" alt="ball" />
                <FormLogo>Football app</FormLogo>
                <br /><br /><br /><br />
            </WrapperCenter>
            <FormTitle>You have to <Link to={ROUTES.SIGN_IN}>Sign in!</Link> to see this section </FormTitle>
            <FormTitle>Don't have an account yet? <Link to={ROUTES.SIGN_UP}>Create new account!</Link></FormTitle>
        </WrapperCenter>
    );
}