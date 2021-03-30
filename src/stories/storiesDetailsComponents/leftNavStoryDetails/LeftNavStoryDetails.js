import React, { useEffect, useState } from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';

import './leftNavStoryDetails.css';
import { Link } from 'react-router-dom';

function LeftNavStoryDetails({stories,user}) {
    const [yourStory,setYourStory] = useState([]);
    const [friendsStory,setFriendsStory] = useState([]);
    useEffect(() => {
        setFriendsStory(
            stories.filter((story) => {
                return story.data.createdBy !== user.uid
            })
        )
        setYourStory(
            stories.filter((story) => {
                return story.data.createdBy === user.uid
            })
        )
    },[stories]);
    return (
        <div className="leftNavStoryDetails">
            <nav className="leftNavStoryDetails-nav">
                <Link to="/">
                    <IconButton style={{width: '40px', height: '40px'}}>
                        <CloseIcon />
                    </IconButton>
                </Link>
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="facebook-logo" />
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
                        <Avatar src={yourStory[0]?.data.profileURL} />
                        <div>
                            <h4>{yourStory[0]?.data.username}</h4>
                            <p>{yourStory[0]?.data.lastUpdate.toDate().toUTCString()}</p>
                        </div>
                    </div>
                    <Link to="/stories/create">
                        <IconButton>
                            <AddIcon />
                        </IconButton>
                    </Link>
                </div>
                {friendsStory?.map((user) => {
                    return (
                        <div className="leftNavStoryDetails-storyCreator">
                            <div className="leftNavStoryDetails-storyCreator__infoUser">
                                <Avatar src={user.data.profileURL} />
                                <div>
                                    <h4>{user.data.username}</h4>
                                    <p>{user.data.lastUpdate.toDate().toUTCString()}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <p className="leftNavStoryDetails-bottomInfo">
                    When friends, groups and Pages post stories, their stories will be shown here.
                </p>
            </div>
        </div>
    )
}

export default LeftNavStoryDetails
