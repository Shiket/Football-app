import styled from 'styled-components'

export const Text = styled.span`
  font-size:18px;

   @media(max-width:1920px){
    font-size: 15px;
   }

   @media (max-width: 600px) {
     display: ${props => (props.dnone ? "none" : "visible")};
   }
 `;

export const Link = styled.a`
    color: #fff;
`