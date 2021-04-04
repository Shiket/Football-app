import styled from 'styled-components'
import player from '../../assets/playerIcon.png'

export const Teams = styled.div`
    width:300px;
    border-right: 2px solid #fff;
    margin-right:15px;
    display:flex;
    flex-direction:row;
    align-items: center;
    margin-left: 3%;
    font-size:19px;

    @media(max-width:1920px){
        width:250px;
        font-size:18px;
    }
    @media(max-width:1300px){
        font-size:16px;
    }

    &:before{
        content: '${props => (props.win ? 'W' : (props.lose ? 'L' : 'D'))}';
        background-color: ${props => (props.win ? '#51a90e' : (props.lose ? '#b91c1c' : '#e2b820'))};
        width:25px;
        height: 25px;
        margin-right:5%;
        text-align:center;
        padding-top:2px;
    }
`;

export const Date = styled.span`
    border-right: 2px solid #fff;
    margin-right:8px;
    display:flex;
    text-align:center;
    font-size:19px;
    width:100px; 
    min-width:83px;
@media(max-width:1920px){
    font-size:17px;
    margin-right:8px;
}
`;

export const PlayersList = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    padding-left: 15px;
    width: 100%;
    overflow-y:auto;
    max-height:35%;
`

export const SinglePlayer = styled.div`
    min-width:220px;
    height:32px;
    display:flex;
    flex-direction: row;
    align-items:center;
    margin: 12px 5px 0 0;
    font-size:19px;

    @media(max-width:1920px){
        margin: 8px 5px 0 0;
        font-size:18px;
    }

    ::before{
        content: '';
        display:inline-block;
        width:22px;
        height:23px;
        margin-right:3px;
        background: url(${player});
    }
`

export const Score = styled.div`
    font-size:18px;
    min-width:35px;

    @media(max-with:1920px){
        font-size:17px;
    }
    @media(max-with:1300px){
        font-size:16px;
    }
`
export const Result = styled.span`
    font-size:18px;
    @media(max-width:1920px){
        font-size:17px;
    }
    @media(max-width:1300px){
        font-size:16px;
    }
`