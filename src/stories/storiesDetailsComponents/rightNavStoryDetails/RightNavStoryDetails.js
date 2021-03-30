import React from 'react'

import AddIcon from '@material-ui/icons/Add';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Avatar, IconButton } from '@material-ui/core';

import './rightNavStoryDetails.css';

import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';

function RightNavStoryDetails({user, selectedStories, currentStoryView, setCurrentStoryView}) {

    const changeSlideStory = (index) => {
        setCurrentStoryView(index)
    }

    return (
        <div className="rightNavStoryDetails">
            <nav className="rightNavStoryDetails-nav">
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar src={user.photoURL} />
            </nav>
            <div className="rightNavStoryDetails-storyDetails">
                <div className="rightNavStoryDetails-storyDetails__stories">
                    <h4>Story details</h4>
                    <Carousel itemsToShow={5}>
                        {selectedStories[0]?.data.storyArr.map((story,index) => {
                            return <div 
                             className={(index===currentStoryView) ? "rightNavStoryDetails-storyDetails__optionStory rightNavStoryDetails-storyDetails__optionStory--clicked" : "rightNavStoryDetails-storyDetails__optionStory"}
                             style={{background: `url(${story.imgURL})`}}
                             key={story.id}
                             onClick={() => changeSlideStory(index)}
                            >
                                {story.text}
                            </div>
                        })}
                        <Link to="/stories/create">
                            <IconButton>
                                <AddIcon />
                            </IconButton>
                        </Link>
                    </Carousel>
                </div>
                <div className="rightNavStoryDetails-storyDetails__viewers">
                    <header>
                        <VisibilityIcon />
                        <h4>No viewers yet</h4>
                    </header>
                    <p>
                        As people view your story, you'll see details here.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RightNavStoryDetails
