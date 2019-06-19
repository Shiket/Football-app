import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../utils/theme';
import loginBg from '../img/bg.jpg'

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Helvetica Neue light';
        background: url(${loginBg}) no-repeat center center fixed;
        margin:0;
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
            <GlobalStyle />
            {children}
        </>
    </ThemeProvider>

)

export default Layout