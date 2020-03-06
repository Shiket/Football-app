import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios';
import * as DATA from '../../constants/data';
import {
    FavouriteTeamsWrapper, FavouriteTeamRow, FavTeamLogo, FavTeamName, Link,
    SocialMediaIcon, LeagueName, SocialMediaIconsWrapper, SignInMessage, Wrapper
} from '../../styleComponents/index'
import { IMAGES } from '../../assets/index'

export const FavouriteTeamsList = ({ firebase, authUserId }) => {
    const [favouriteTeamsData, setFavouriteTeamsData] = useState([]);

    const setFavouriteTeam = useCallback(async () => {
        let teamIds = []

        await firebase.getFavourites(authUserId).once("value", snapshot => {
            teamIds = [...snapshot.val()]
        });

        if (teamIds.length === 0) {
          return
        }
        let promises = [];

        teamIds.forEach(id => promises.push(axios.get(DATA.TEAM_BY_ID + id)));
        const requests = await axios.all(promises);
        const stateData = requests.map((r, i) => ({
            id: teamIds[i],
            teamName: r.data.teams[0].strTeam,
            logo: r.data.teams[0].strTeamBadge,
            league: r.data.teams[0].strLeague,
            website: r.data.teams[0].strWebsite,
            twitter: r.data.teams[0].strTwitter,
            facebook: r.data.teams[0].strFacebook,
            instagram: r.data.teams[0].strInstagram,
            youtube: r.data.teams[0].strYoutube
        }));
        setFavouriteTeamsData(stateData);
    }, [authUserId, firebase]);

    useEffect(() => {
        setFavouriteTeam();
        return () => firebase.getFavourites().off();;
    }, [setFavouriteTeam, firebase]);

    const removeFromFav = async (teamId, userId) => {
        await firebase.removeTeamFromFavourites(teamId, userId)
        setFavouriteTeamsData(favouriteTeamsData.filter(a => a.id !== teamId))
    }

    if (favouriteTeamsData.length === 0) return <Wrapper><SignInMessage>Add your favourite teams to list!</SignInMessage></Wrapper>
    return (
        <FavouriteTeamsWrapper>
            {favouriteTeamsData.map(a => (
                <FavouriteTeamRow>
                    <FavTeamLogo src={a.logo} alt="logo" />
                    <FavTeamName>{a.teamName}</FavTeamName>
                    <LeagueName>{a.league}</LeagueName>
                    <SocialMediaIconsWrapper>
                        <Link target="_blank" rel="noopener noreferrer" href={'http://' + a.website}>{a.website === "" ? <div></div> : <SocialMediaIcon src={IMAGES.website} alt="website icon" />}</Link>
                        <Link target="_blank" rel="noopener noreferrer" href={'http://' + a.twitter}>{a.twitter === "" ? <div></div> : <SocialMediaIcon src={IMAGES.twitter} alt="twitter icon" />}</Link>
                        <Link target="_blank" rel="noopener noreferrer" href={'http://' + a.facebook}>{a.facebook === "" ? <div></div> : <SocialMediaIcon src={IMAGES.fb} alt="facebook icon" />}</Link>
                        <Link target="_blank" rel="noopener noreferrer" href={'http://' + a.instagram}>{a.instagram === "" ? <div></div> : <SocialMediaIcon src={IMAGES.ig} alt="instagram icon" />}</Link>
                    </SocialMediaIconsWrapper>
                    <SocialMediaIcon onClick={() => removeFromFav(a.id, authUserId)} src={IMAGES.close} alt="close icon" />
                </FavouriteTeamRow>
            ))}
        </FavouriteTeamsWrapper>
    );
}