import React from 'react'
import LeftMenu from './leftMenu/LeftMenu';
import './storiesCreateMain.css';
import { Avatar, Icon, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import NotificationsIcon from '@material-ui/icons/Notifications';
function StoriesCreate() {
    return (
        <div className="storiesCreate-container">
            <LeftMenu />
            <div className="storiesCreate-main">
                <nav className="storiesCreate-navBar">
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                    <IconButton>
                        <NotificationsIcon />
                    </IconButton>
                    <Avatar src="" />
                </nav>
                <div className="storiesCreate-preview">
                    <p>Preview</p>
                    <div className="storiesCreate-previewContent">
                        <div className="storiesCreate-storyCard">
                            <h3>START TYPING</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoriesCreate
