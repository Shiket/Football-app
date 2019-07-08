import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../utils/theme';
import bg from '../img/bg1.jpg'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

    body {
        font-family: 'Montserrat','Helvetica Neue light';
        background: url(${bg}) no-repeat center center fixed;
        margin:0;
        padding:0;
        color: ${({ theme }) => theme.colors.white}
        background-size: cover;
        height: 100%;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    a {
        color: ${({ theme }) => theme.colors.white};
        text-decoration: none;
    }
`

const Layout = ({ children }) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle/>
            {children}
        </>
    </ThemeProvider>

)

export default Layout