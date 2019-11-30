import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';

const Zoom = keyframes`${zoomIn}`;

export const Headers = styled.div`
    display:flex;
    flex-direction:row;
    animation: 0.2s ${Zoom};
    width:82%;
    margin-top:6vh;
`;

export const Switch = styled.button`
    width:100%;
    height:100%;
    padding-top:17px;
    padding-bottom: 17px;
    background-color: ${props => (props.color ? '#06313fcc' :'#101010d9')};
    font-size: 17px;
    border:none;
    font-family: 'Quicksand' ,'Helvetica Neue light';
    color: #fff;
    cursor: pointer;
    display:flex;
    border-bottom: 3px solid #fff !important;
    justify-content:center;
    border-radius: 0px;

        :focus{
            border:none;
            outline:0px;
        }
    }
`