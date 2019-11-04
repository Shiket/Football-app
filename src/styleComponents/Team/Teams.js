import styled from 'styled-components'
import player from '../../assets/playerIcon.png'

export const Teams = styled.div`
    width:200px;
    border-right: 2px solid #fff;
    margin-right:15px;
    display:flex;
    flex-direction:row;
    align-items: center;
    margin-left: 20px;


    &:before{
        content: '${props => (props.win ? 'W' : (props.lose ? 'L' : 'D'))}';
        background-color: ${props => (props.win ? '#51a90e' : (props.lose ? '#b91c1c' : '#e2b820'))};
        width:25px;
        height: 25px;
        margin-right:15px;
        text-align:center;
        padding-top:2px;
    }
`;

export const Date = styled.span`
    width:105px;
    border-right: 2px solid #fff;
    margin-right:10px;
    display:flex;
`;

export const PlayersList = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    max-height:300px;
    width: 100%;
`

export const SinglePlayer = styled.div`
    min-width:200px;
    height:30px;
    display:flex;
    flex-direction: row;
    align-items:center
    margin-right:5px;

    ::before{
        content: '';
        display:inline-block;
        width:22px;
        height:23px;
        margin-right:5px;
        background: url(${player});
    }
`
