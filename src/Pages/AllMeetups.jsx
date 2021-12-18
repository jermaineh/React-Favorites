import React, { useState, useEffect } from 'react'
import MeetupList from '../Components/Layout/meetups/MeetupList';

export default function AllMeetups() {
    const [isLoading, setIsLoading] = useState();
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://react-proj1-1c462-default-rtdb.firebaseio.com/meetups.json'
        ).then((response) => {
            return response.json();
        })
            .then((data) => {
                const meetups = [];

                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key]
                    };
                    meetups.push(meetup);
                }
                setIsLoading(false);
                setLoadedMeetups(meetups)
            })


    }, []);

    if (isLoading) {
        return (
            <section>
                <p>is Loading...</p>
            </section>
        )
    }


    return (
        <section>

            <h1> ALL MEETUPS </h1>
            <MeetupList meetups={loadedMeetups}
            />

        </section>
    );
}
