import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import './storyDetailsMain.css';

function StoryDetailsMain() {
    return (
        <div className="storyDetailsMain">
            <div className="storyDetailsMain-arrowIcons">
                <ArrowBackIosIcon />
            </div>
            <div className="storyDetailsMain-story">

            </div>
            <div className="storyDetailsMain-arrowIcons">
                <ArrowForwardIosIcon />
            </div>
        </div>
    )
}

export default StoryDetailsMain
