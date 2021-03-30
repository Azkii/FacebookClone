import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import './storyDetailsMain.css';

function StoryDetailsMain({selectedStories,currentStoryView,setCurrentStoryView}) {
    const goBack = () => {
        (currentStoryView === 0) ? setCurrentStoryView(selectedStories[0].data.storyArr.length-1) : setCurrentStoryView(currentStoryView-1)
    }
    const goForward = () => {
        (currentStoryView >= selectedStories[0].data.storyArr.length-1) ? setCurrentStoryView(0) : setCurrentStoryView(currentStoryView+1)
    }
    return (
        <div className="storyDetailsMain">
            <div className="storyDetailsMain-arrowIcons" onClick={goBack}>
                <ArrowBackIosIcon />
            </div>
            <div className="storyDetailsMain-story" style={{backgroundImage: `url(${selectedStories[0]?.data.storyArr[currentStoryView]?.imgURL})`}}>
                <h3>{selectedStories[0]?.data.storyArr[currentStoryView]?.text}</h3>
            </div>
            <div className="storyDetailsMain-arrowIcons" onClick={goForward}>
                <ArrowForwardIosIcon />
            </div>
        </div>
    )
}

export default StoryDetailsMain
