import React, { useContext } from 'react'
import FavoritesContext from '../store/favorites.context'
import MeetupList from '../Components/Layout/meetups/MeetupList'



export default function Favorites(props) {

    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if (favoritesCtx.totalFavorites === 0) {
        content = <p>You have no current favorites </p>
    } else {
        content = <MeetupList meetups={favoritesCtx.favorites} />
    }
    return (
        <section>
            <h1> MY FAVORITES </h1>
            {content}
        </section>
    )
}
