import styled, { keyframes } from 'styled-components';
import { slideInRight } from 'react-animations';

const SlideRight = keyframes`${slideInRight}`;

export const TableWrapper = styled.div`
width:100%;
overflow:auto;
animation: 0.2s ${SlideRight};
margin-top: 5vh;
`