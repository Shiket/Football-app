import React, { useState } from 'react'
import { MenuWrapper, HeadSection, Username, WrapperCenter, NavIcon, NavButton, LogoutButton, NavLink } from '../../styleComponents';
import { IMAGES } from '../../assets/index'
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../../components/Firebase';

const AuthNav = ({firebase}) => {
    const [menu, showMenu] = useState(false);

    const SignOut = () =>{
        firebase.doSignOut()
        showMenu(!menu)
    }
    return (
        <>
            <WrapperCenter row center>
                <NavIcon onClick={() => showMenu(!menu)} src={IMAGES.burger} alt='left arrow' />
            </WrapperCenter>
            {menu &&
                <MenuWrapper>
                    <HeadSection>
                        <NavIcon onClick={() => showMenu(!menu)} src={IMAGES.close} alt='right arrow' />
                        <Username>Username</Username>
                    </HeadSection>
                    <NavButton as={Link} to={ROUTES.ACCOUNT} onClick={() => showMenu(!menu)}>Reset/change password</NavButton>
                    <NavButton as={Link} to={ROUTES.PASSWORD_FORGET} onClick={() => showMenu(!menu)}>Forgot password?</NavButton>
                    <NavLink target="_blank" href="https://shiket.github.io/portfolio" rel="noopener noreferrer" onClick={() => showMenu(!menu)}>Portfiolio</NavLink>
                    <NavButton as={Link}>Contact with me: <br /><br />  <span>dwrona9@gmail.com</span></NavButton>
                <LogoutButton as={Link} to={ROUTES.SIGN_IN} onClick={() => SignOut()}>Sign out</LogoutButton>
                </MenuWrapper>
            }
        </>
    );
}
export const AuthNavigation = withFirebase(AuthNav)