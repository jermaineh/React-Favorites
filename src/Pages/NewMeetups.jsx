import React from 'react';
import NewMeetupForm from '../Components/Layout/meetups/NewMeetupForm.jsx';
import { useNavigate } from 'react-router-dom';

export default function NewMeetups() {

    const navigate = useNavigate();

    function addMeetupHandler(meetupData) {
        fetch('https://react-proj1-1c462-default-rtdb.firebaseio.com/meetups.json', {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then(() => {
            navigate('/', { replace: true });
        });
    }
    return (
        <div>
            <h1>NEW MEETUPS PAGE</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </div>
    )
};
