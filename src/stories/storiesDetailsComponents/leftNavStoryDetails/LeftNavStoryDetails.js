import React from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';

import './leftNavStoryDetails.css';

function LeftNavStoryDetails() {
    return (
        <div className="leftNavStoryDetails">
            <nav className="leftNavStoryDetails-nav">
                <IconButton>
                    <CloseIcon />
                </IconButton>
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" />
            </nav>
            <header className="leftNavStoryDetails-header">
                <h3>Stories</h3>
                <div className="leftNavStoryDetails-header__options">
                    <p>Archive</p>
                    <p>Settings</p>
                </div>
            </header>
            <div className="leftNavStoryDetails-storyCreators">
                <h4>Your story</h4>
                <div className="leftNavStoryDetails-storyCreator">
                    <div className="leftNavStoryDetails-storyCreator__infoUser">
                        <Avatar />
                        <div>
                            <h4>User Name</h4>
                            <p>Activity</p>
                        </div>
                    </div>
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                </div>
                <div className="leftNavStoryDetails-storyCreator">
                    <div className="leftNavStoryDetails-storyCreator__infoUser">
                        <Avatar />
                        <div>
                            <h4>User Name</h4>
                            <p>Activity</p>
                        </div>
                    </div>
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                </div>
                <p className="leftNavStoryDetails-bottomInfo">
                    When friends, groups and Pages post stories, their stories will be shown here.
                </p>
            </div>
        </div>
    )
}

export default LeftNavStoryDetails
