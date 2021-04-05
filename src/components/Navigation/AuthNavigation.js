import React, { useState, useEffect, useCallback } from 'react'
import { MenuWrapper, HeadSection, Username, WrapperCenter, NavIcon, NavButton, LogoutButton, NavLink } from '../../styleComponents';
import { IMAGES } from '../../assets/index'
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../../components/Firebase';

const AuthNav = ({ firebase, authUserId }) => {
    const [menu, showMenu] = useState(false);
    const [user, setUser] = useState('username');

    const SignOut = () => {
        firebase.doSignOut()
        showMenu(!menu)
    }

    const getUsername = useCallback(async()=>{
        firebase.username(authUserId).on("value", snapshot => {
            setUser(snapshot.val())
        })
    },[firebase, authUserId])

    useEffect(() => {
        getUsername()
    }, [getUsername]);

    return (
        <>
            <WrapperCenter row center>
                <NavIcon onClick={() => showMenu(!menu)} src={IMAGES.burger} alt='left arrow' />
            </WrapperCenter>
            {menu &&
                <MenuWrapper>
                    <HeadSection>
                        <NavIcon onClick={() => showMenu(!menu)} src={IMAGES.close} alt='right arrow' />
                        <Username>{user.charAt(0).toUpperCase()+user.slice(1)}</Username>
                    </HeadSection>
                    <NavButton as={Link} to={ROUTES.ACCOUNT} onClick={() => showMenu(!menu)}>Reset/change password</NavButton>
                    <NavButton as={Link} to={ROUTES.PASSWORD_FORGET} onClick={() => showMenu(!menu)}>Forgot password?</NavButton>
                    <NavLink target="_blank" href="https://dwportfolio.netlify.app/" rel="noopener noreferrer" onClick={() => showMenu(!menu)}>Portfiolio</NavLink>
                    <NavButton href="mailto:dwrona9@gmail.com">Contact with me: <br /><br />  <spaan>dwrona9@gmail.com</spaan></NavButton>
                    <LogoutButton as={Link} to={ROUTES.SIGN_IN} onClick={() => SignOut()}>Sign out</LogoutButton>
                </MenuWrapper>
            }
        </>
    );
}
export const AuthNavigation = withFirebase(AuthNav)