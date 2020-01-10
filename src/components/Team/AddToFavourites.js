import React, { useState, useEffect, useCallback } from 'react'
import { Favourite } from "../../styleComponents"
import { IMAGES } from '../../assets/index'

export const AddToFavourites = ({ firebase, authUserId, teamId }) => {
    const [favourites, setFavourites] = useState([])
    const [onFavouriteList, addTeamToList] = useState(false)

    const teamOnFavouriteList = useCallback(async() => {
        await firebase.getFavourites(authUserId).once("value", async snapshot => {
            setFavourites(snapshot.val())
        })
        await firebase.getFavourites().off()
    }, [firebase, setFavourites, authUserId])

    const addTeam = useCallback(async()=>{
        favourites.includes(teamId) ? addTeamToList(true) : addTeamToList(false)
    },[favourites, teamId])

    useEffect(() => {
        teamOnFavouriteList()
    }, [teamOnFavouriteList]);

    useEffect(() => {
        addTeam()
    }, [addTeam])

    return (
        <>
            {onFavouriteList ? <Favourite onClick={async () => {
                await firebase.addRemoveFromFavourites(authUserId, teamId)
                await addTeamToList(!onFavouriteList)
            }} src={IMAGES.favourite} alt='favourite icon' /> :

                <Favourite onClick={async () => {
                    await firebase.addRemoveFromFavourites(authUserId, teamId)

                    await addTeamToList(!onFavouriteList)
                }} src={IMAGES.heart} alt='heart icon' />}
        </>
    )
}

