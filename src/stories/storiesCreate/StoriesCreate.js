import React, { useState } from 'react'
import LeftMenu from './leftMenu/LeftMenu';
import './storiesCreateMain.css';
import { Avatar, Icon, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { useStateValue } from '../../stateProvider/StateProvider';

function StoriesCreate() {
    const [{user}] = useStateValue();
    const [story,setStory] = useState (
        {
            id: null,
            createdBy: user.displayName,
            userURL: user.photoURL,
            text: "",
            backgroundURL: null,
            fontStyle: null,
        }
    );
    return (
        <div className="storiesCreate-container">
            <LeftMenu storyProp = {story} setStoryProp={setStory} user={user} />
            <div className="storiesCreate-main">
                <nav className="storiesCreate-navBar">
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                    <IconButton>
                        <NotificationsIcon />
                    </IconButton>
                    <Avatar src={user.photoURL} />
                </nav>
                <div className="storiesCreate-preview">
                    <p>Preview</p>
                    <div className="storiesCreate-previewContent">
                        <div 
                         className="storiesCreate-storyCard"
                         style={{backgroundImage: `url(${story.backgroundURL})`}}
                        >
                            <h3>
                                {story.text === "" ? "START TYPING" : story.text}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoriesCreate
