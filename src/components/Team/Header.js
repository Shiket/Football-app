import React from 'react'
import { AuthUserContext } from '../../components/Session';
import { TeamHeader, BackArrow, Text,   Favourite, PrevPage } from "../../styleComponents"
import { IMAGES } from '../../assets/index'
import { useLocation, useHistory, useRouteMatch } from 'react-router-dom'

export const Header = ({firebase}) => {

    let location = useLocation()
    let history = useHistory()
    let match = useRouteMatch()

    return(
        <TeamHeader>
            <PrevPage row pointer onClick={history.goBack}><BackArrow src={IMAGES.leftArrow} alt='back arrow' />{match.params.team}
                <Text dnone>&emsp;&emsp; {location.state.state[0].win}W &emsp; {location.state.state[0].draw}
                    D &emsp;{location.state.state[0].loss}L</Text>
            </PrevPage>

            <AuthUserContext.Consumer>
                {authUser => authUser ?
                    <Favourite onClick={async () => {
                        const teamId = location.state.state[0].idTeam;
                        console.log(teamId)
                        // await firebase.addTeamToFavorite(authUser.uid, teamId);
                        // await firebase.getAllFavouriteTeams(authUser.uid)

                        console.log(await firebase.getRefToFav(authUser.uid))
                    }} src={IMAGES.star} alt='favourite icon' />

                    : <Favourite onClick={() => alert('You have to sign in!')} src={IMAGES.star} alt='favourite icon' />
                }



            </AuthUserContext.Consumer>

        </TeamHeader>
    );
}