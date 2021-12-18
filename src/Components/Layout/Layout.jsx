import React from 'react'
import classes from './Layout.module.css'
import MainNav from './MainNav'

export default function Layout(props) {
    return (
        <div>
            <MainNav></MainNav>
            <main className={classes.main}>
                {props.children}
            </main>
        </div>
    )
}
