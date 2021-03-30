import { Avatar } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './story.css';
function Story({ backImg, profile, text, pathID }) {
    return (
        <Link to={`/stories/${pathID}`}>
        <div style={{ background: `url(${backImg})`,padding: `5px 0` }} className="story">
            <Avatar className="story-avatar" src={profile} />
            <h4>{text}</h4>
        </div>
        </Link>
    )
}

export default Story
