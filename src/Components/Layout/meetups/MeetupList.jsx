import React from 'react'
import classes from './MeetupList.module.css'
import MeetupItems from './MeetupItems.jsx'


export default function MeetupList(props) {

    return (
        <ul className={classes.item}>
            {props.meetups.map((meetups) => (
                <MeetupItems
                    key={meetups.id}
                    id={meetups.id}
                    image={meetups.image}
                    title={meetups.title}
                    address={meetups.address}
                    description={meetups.description}
                />
            ))}

        </ul>
    )
}
