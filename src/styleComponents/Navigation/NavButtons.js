import styled, { keyframes } from 'styled-components';

import { zoomIn } from 'react-animations';

const zoom = keyframes`${zoomIn}`;

export const NavButton = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:100%;
    padding-top:30px;
    padding-bottom:30px;
    border-bottom: 1px solid #3a3a3a;
    border-right: 10px solid #3498db;
    cursor: pointer;
    animation: 0.5s ${zoom};

    :hover{
        background-color: #3a3a3a;
        transition: 0.2s;
        border-right:10px solid #fff;
    }

    @media (max-height: 510px) {
    padding-top:15px;
    padding-bottom:15px;
    }
`;

export const NavLink = styled.a`
    display:flex;
    color: #fff;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:100%;
    padding-top:30px;
    padding-bottom:30px;
    border-bottom: 1px solid #3a3a3a;
    border-right: 10px solid #3498db;
    cursor: pointer;
    animation: 0.5s ${zoom};

    :hover{
        background-color: #3a3a3a;
        transition: 0.2s;
        border-right:10px solid #fff;
    }

    @media (max-height: 510px) {
    padding-top:15px;
    padding-bottom:15px;
    }
`;

export const LogoutButton = styled.button`
    padding:8px 45px;
    align-self:center;
    bottom: 0;
    margin-bottom:20px;
    position:absolute;
    font-family: 'Quicksand' ,'Helvetica Neue light';
    background-color: ${({ theme }) => theme.colors.transparent};
    color: #fff;
    font-size:1em;
    cursor: pointer;
    border: 3px solid #fff;
    border-color: #3498db;
    animation: 0.5s ${zoom};

    :hover{
        background-color: #3a3a3a;
        transition: 0.5s;
    }

    @media (max-height: 390px) {
        margin-bottom:3px
        padding:4px 30px;
    }
`;