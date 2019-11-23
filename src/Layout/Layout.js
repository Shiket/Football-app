import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../utils/theme';
import bg from '../assets/bg1.jpg'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');
    html {
        margin:0;
        padding:0;
        max-height:100vh;
    }

    body {
        font-family: 'Quicksand' ,'Helvetica Neue light';
        background: url(${bg}) no-repeat center center fixed;
        margin:0;
        padding:0;
        color: ${({ theme }) => theme.colors.white}
        background-size: cover;
        max-height: 100vh;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: #fff;
    }

    ::-webkit-scrollbar-thumb {
        background: #353535;
    }

        ::-webkit-scrollbar-thumb:hover {
    background: #555;
    }

    body .ReactTable.-striped .rt-tr.-odd { background:rgba(0,0,0,0.25) };
    body .ReactTable.-striped .rt-tr:hover { background:rgba(0,0,0,0.2) };
    body .ReactTable .rt-tr:hover .rt-td {
    background: rgba(0,0,0,0.5);
    transition:0.5s;
    }

    body .ReactTable .rt-tbody .rt-tr-group{
        border-bottom:none;
    }

    body .ReactTable .rt-tr .rt-td{ border:none }
  }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    a {
        color: ${({ theme }) => theme.colors.white};
        text-decoration: none;
    }
    @-webkit-keyframes autofill {
        to {
            color: #fff;
            background: transparent;
        }
    }

    input:-webkit-autofill {
        -webkit-animation-name: autofill;
        -webkit-animation-fill-mode: both;
    }
`;

const Layout = ({ children }) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle/>
            {children}
        </>
    </ThemeProvider>

);

export default Layout