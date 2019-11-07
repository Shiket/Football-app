import styled from 'styled-components'

export const MainSection = styled.span`
    font-size: 18px;
    margin-top:3vh;
    margin-bottom: 10px;
    margin-left: ${props => (props.marginL ? '8%' : '0px')};
`;