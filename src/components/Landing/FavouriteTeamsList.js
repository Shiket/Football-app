import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios';
import * as DATA from '../../constants/data';

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
        const stateData = requests.map(r => ({
            teamName: r.data.teams[0].strTeam,
            logo: r.data.teams[0].strTeamBadge
        }));
        setFavouriteTeamsData(stateData);
    }, []);

    const cancelFirebaseSubscription = () => firebase.getFavourites().off();

    useEffect(() => {
        setFavouriteTeam();
        return () => cancelFirebaseSubscription();
    }, []);

    if (favouriteTeamsData.length === 0) return <div>ADD TEAMS TO FAV</div>;
    return (
        <>
            {favouriteTeamsData.map(a => (
                <div>
                    {a.teamName}
                </div>
            ))}
        </>
    );
}