import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import React, { useState } from 'react';
import './messegeSender.css';
import { useStateValue } from '../../stateProvider/StateProvider'

import db from '../../firebase';
import firebase from 'firebase';
function MessegeSender() {

    const [{user},dispatch] = useStateValue();

    const [inputText, setInputText] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const handleSubmit = e => {
        e.preventDefault();

        db.collection("posts").add({
            image: imageUrl,
            messege: inputText,
            profile: user.photoURL,
            timeStamp: 
            firebase
             .firestore
             .FieldValue
             .serverTimestamp(),
            username: user.displayName
        })
        //push to db
        setInputText('');
        setImageUrl('');
    }
    return (
        <div className="messegeSender">
            <div className="messegeSender-top">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                     required
                     className="messageSender-input"
                     type="text"
                     placeholder="message"
                     value={inputText}
                     onChange={(e) => setInputText(e.target.value)}
                    />
                    <input
                     type="text"
                     placeholder="imgUrl"
                     value={imageUrl}
                     onChange={(e) => {setImageUrl(e.target.value)}}
                    />
                    <button onClick={handleSubmit} type="submit" />
                </form>
            </div>
            <div className="messegeSender-bottom">
                <div className="messageSender-option">
                    <VideocamIcon style={{color: "#F10066"}} />
                    <h4>Live video</h4>
                </div>
                <div className="messageSender-option">
                    <PhotoLibraryIcon style={{color: "#8bc34a"}} />
                    <h4>Photo/Movie</h4>
                </div>
                <div className="messageSender-option">
                    <SentimentVerySatisfiedIcon style={{color: "#FFD700"}} />
                    <h4>Feelings/Mood</h4>
                </div>
            </div>
        </div>
    )
}

export default MessegeSender
