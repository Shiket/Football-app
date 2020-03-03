import styled from 'styled-components'

export const Matches = styled.div`
    flex-direction:column;
    padding-bottom:10px;
    width:30%;
    display: ${props => (props.dnone ? 'none' : 'flex')};

@media (max-width: 1400px) {
    flex-direction: column;
    width:43%;
    margin-right:3%;
    display: ${props => (props.dnone ? 'none' : 'flex')};
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