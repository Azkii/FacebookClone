import React from 'react';
import './stories.css';

import LeftNavStoryDetails from './storiesDetailsComponents/leftNavStoryDetails/LeftNavStoryDetails';
import StoryDetailsMain from './storiesDetailsComponents/StoryDetailsMain';
import RightNavStoryDetails from './storiesDetailsComponents/RightNavStoryDetails';

function Stories() {
    return (
        <div className="storiesDetails">
            <LeftNavStoryDetails />
            <StoryDetailsMain />
            <RightNavStoryDetails />
        </div>
    )
}

export default Stories