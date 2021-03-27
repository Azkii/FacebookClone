import React from 'react';
import './stories.css';

import LeftNavStoryDetails from './storiesDetailsComponents/leftNavStoryDetails/LeftNavStoryDetails';
import StoryDetailsMain from './storiesDetailsComponents/storyDetailsMain/StoryDetailsMain';
import RightNavStoryDetails from './storiesDetailsComponents/rightNavStoryDetails/RightNavStoryDetails';

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