import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import classes from './MainNav.module.css'
import FavoritesContext from '../../store/favorites.context'

export default function MainNav(props) {

    const favoritesCtx = useContext(FavoritesContext)

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                React Meetups
            </div>
            <nav>
                <ul>
                    <Link to='/'>
                        <li>All Meetups</li>
                    </Link>
                    <Link to='/new-meetups'>
                        <li>New Meetups</li>
                    </Link>
                    <Link to='/favorites'>
                        <li>Favorites{favoritesCtx.totalFavorites > 0 ? <span className={classes.badge}>{favoritesCtx.totalFavorites}</span> : null}</li>


                    </Link>
                </ul>
            </nav>
        </header>
    )
}


