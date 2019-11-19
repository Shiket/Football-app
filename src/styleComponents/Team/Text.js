import styled from 'styled-components'

export const Text = styled.span`
    font-size: 15px;

    @media (max-width: 600px) {
        display: ${props => (props.dnone ? 'none' : 'visible')};
   }
`;

export const Scroll = styled.div`
    overflow:auto;
    text-align: justify;
    text-justify: inter-word;
`
export const Link = styled.a`
    color: #fff;
`