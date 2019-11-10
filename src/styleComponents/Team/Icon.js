import styled from 'styled-components'

export const Icon = styled.img`
    width:30px;
    height:30px;
    margin-right: 15px;
    margin-left: 20px;

@media (max-width: 1160px) {
    margin-right: 15px;
    margin-left: 15px;
}
`;

export const SocialIcon = styled.img`
    width:30px;
    height:30px;
    margin-right:30px;

    @media (max-width: 1160px) {
        margin-top:23px;
        margin-right:60px;
   }

   @media (max-width: 790px) {
        margin-top:23px;
        margin-right:0px;
   }

   @media (max-width: 600px) {
        margin-top:0px;
        margin-left:15px;
        margin-right:15px;
   }
`;