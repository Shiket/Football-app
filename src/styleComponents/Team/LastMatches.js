import styled from 'styled-components'

export const LastMatches = styled.div`
    display:flex;
    flex-direction:column;
    width:3%;
    padding-bottom:10px;
    width:20%;
    display: ${props => (props.dnone ? 'none' : 'visible')};

@media (max-width: 1400px) {
    display:flex;
    flex-direction: column;
    width:43%;
    margin-right:3%;
    display: ${props => (props.dnone ? 'none' : 'visible')};
}

@media (max-width: 1160px) {
    display:flex;
    flex-direction: column;
    jusitfy-content:space-around;
    min-width:250px;
    margin-right:20px;
}
@media (max-width: 600px) {
    margin-left:auto;
    margin-right:auto;
    width:290px;
    padding-left:10px;
}
`