import { Avatar } from '@material-ui/core';
import React from 'react';
import './story.css';
function Story({ backImg, profile, text }) {
    return (
        <div style={{ background: `url(${backImg})` }} className="story">
            <Avatar className="story-avatar" src={profile} />
            <h4>{text}</h4>
        </div>
    )
}

export default Story
