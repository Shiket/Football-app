import styled from 'styled-components'

export const RowCenter = styled.div`
    display:flex;
    flex-direction:column;

@media(max-width: 1300px) and (min-width: 850px){
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    width:100%;
    min-height:320px;
}
@media(max-width: 850px){
    display:block;
}
`