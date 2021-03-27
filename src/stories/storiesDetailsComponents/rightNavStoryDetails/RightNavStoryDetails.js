import React from 'react'

import AddIcon from '@material-ui/icons/Add';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Avatar, IconButton } from '@material-ui/core';

import './rightNavStoryDetails.css';

function RightNavStoryDetails() {
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
                <Avatar />
            </nav>
            <div className="rightNavStoryDetails-storyDetails">
                <div className="rightNavStoryDetails-storyDetails__stories">
                    <h4>Story details</h4>
                    <div className="rightNavStoryDetails-storyDetails__storiesList">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <IconButton>
                            <AddIcon />
                        </IconButton>
                    </div>
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
