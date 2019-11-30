import styled from 'styled-components'
import logo from '../../assets/logo.png'
export const HeadSection = styled.div`
    height: 75px;
    width: 100%;
    background-color: #3a3a3a;
    border-bottom: 3px solid #fff;
    display:flex;
    justify-content: space-between;
    align-items:center;
`

export const Username = styled.span`
    font-size:23px;
    margin-right: 15px;
    display:flex;
    align-items:center;

    ::after {
        content: '';
        display:inline-block;
        width:45px;
        height:45px;
        margin-right:15px;
        margin-left:15px;
        background: url(${logo});
    }
`