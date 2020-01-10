import React, { useState, useEffect, useCallback } from 'react'

export const FavouriteTeamsList = ({firebase, authUserId}) => {
    const [favouritesTeams, addFavourtieTeam] = useState([]);

    const setFavouriteTeam = useCallback(async () => {
        await firebase.getFavourites(authUserId).once("value", snapshot => {
            addFavourtieTeam(snapshot.val())
        })
        await firebase.getFavourites().off()
    }, [authUserId, firebase])

    useEffect(() => {
        setFavouriteTeam();
    },[setFavouriteTeam]);

    if (favouritesTeams.length === 0) return <div></div>
    return(
        <>
         {favouritesTeams.map(a => (
             <div>
                 {a} + <br />
             </div>
         ))}
        </>
    );
}