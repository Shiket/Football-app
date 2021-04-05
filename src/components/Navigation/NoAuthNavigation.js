import React, { useState } from 'react'
import { MenuWrapper, HeadSection, Username, WrapperCenter, NavIcon, NavButton, LogoutButton, NavLink } from '../../styleComponents';
import { IMAGES } from '../../assets/index'
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

export const NoAuthNavigation = () => {
    const [menu, showMenu] = useState(false);

    return(
        <>
        <WrapperCenter row center>
            <NavIcon onClick={() => showMenu(!menu)} src={IMAGES.burger} alt='left arrow'/>
        </WrapperCenter>
            {menu &&
            <MenuWrapper>
                <HeadSection>
                    <NavIcon onClick={() => showMenu(!menu)} src={IMAGES.close} alt='right arrow'/>
                    <Username>Guest</Username>
                </HeadSection>
                <NavButton as={Link} to={ROUTES.SIGN_UP} onClick={() => showMenu(!menu)}>Create new account</NavButton>
                <NavButton as={Link} to={ROUTES.PASSWORD_FORGET} onClick={() => showMenu(!menu)}>Forgot password?</NavButton>
                <NavLink target="_blank" href="https://dwportfolio.netlify.app/" rel="noopener noreferrer"  onClick={() => showMenu(!menu)}>Portfiolio</NavLink>
                <NavButton href="mailto:dwrona9@gmail.com">Contact with me: <br /><br />  <span>dwrona9@gmail.com</span></NavButton>
                <LogoutButton as={Link} to={ROUTES.SIGN_IN} onClick={() => showMenu(!menu)}>Sign in</LogoutButton>
            </MenuWrapper>
            }
        </>
    );
}