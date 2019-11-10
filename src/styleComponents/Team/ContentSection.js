import styled from 'styled-components'

export const ContentSection = styled.div`
    display:flex;
    flex-direction:column;
    width:80%;
    margin-left:2%;
    max-height:calc(99vh - 200px);
    overflow:auto;

    @media (max-width: 1400px) {
        display:flex;
        flex-direction: column;
        width:100%;
    }
    @media (max-width: 1160px) {
      display: ${props => (props.lg ? 'none' : 'visible')};
    }
    @media (max-width: 600px) {
      display: ${props => (props.lg ? 'none' : 'visible')};
    }
`;

export const DescriptionSection = styled.div`
    display:flex;
    flex-direction: column;
    width:70%;
    max-height:350px;
    margin-right:3%;
    display: ${props => (props.sm ? 'none' : 'visible')};
    display: ${props => (props.md ? 'none' : 'visible')};

    @media (max-width: 1400px) {
        display:flex;
        flex-direction: column;
        width:57%;
        margin-right:3%;
        display: ${props => (props.sm ? 'none' : 'visible')};
    }

     @media (max-width: 1160px) {
         width:100%;
         max-height:100%;
         padding-left:25px;
         padding-right:25px;
         margin-bottom:30px;
         display: ${props => (props.md ? 'visible' : 'none')};
     }

      @media (max-width: 600px) {
         width:100%;
         max-height:100%;
         padding-left:15px;
         padding-right:10px;
         display:flex;
         jusitfy-content:center;
         padding-bottom:15px;
         display: ${props => (props.sm ? 'visible' : 'none')};
        display: ${props => (props.md ? 'none' : 'visible')};
     }
`