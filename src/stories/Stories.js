import React, { useEffect, useState } from 'react';
import './stories.css';

import LeftNavStoryDetails from './storiesDetailsComponents/leftNavStoryDetails/LeftNavStoryDetails';
import StoryDetailsMain from './storiesDetailsComponents/storyDetailsMain/StoryDetailsMain';
import RightNavStoryDetails from './storiesDetailsComponents/rightNavStoryDetails/RightNavStoryDetails';
import { matchPath } from "react-router";

import { useStateValue } from '../stateProvider/StateProvider';
import db from '../firebase';


function Stories() {
    const [stories,setStories] = useState([]);
    const [selectedStories,setSelectedStories] = useState([]);
    const [currentStoryView,setCurrentStoryView] = useState([0]);
    const [{user}] = useStateValue();
    const match = matchPath(window.location.pathname, {
        path: "/stories/:id",
        exact: true,
        strict: false
    });

    useEffect(() => {
        db.collection('Story')
            .orderBy('lastUpdate', 'desc')
            .onSnapshot(snap => {
                setStories(snap.docs.map(doc => {
                    return {
                        id: doc.id,
                        data: doc.data()
                    }
                }))
            })
    },[])

    useEffect(() => {
        setSelectedStories(
            stories.filter((story) => {
                return story.id === match.params.id
            })
        )
    },[stories])

    return (
        <div className="storiesDetails">
            <LeftNavStoryDetails user={user} stories={stories} />
            <StoryDetailsMain selectedStories={selectedStories} currentStoryView={currentStoryView} setCurrentStoryView={setCurrentStoryView} />
            <RightNavStoryDetails user={user} selectedStories={selectedStories} currentStoryView={currentStoryView} setCurrentStoryView={setCurrentStoryView} />
        </div>
    )
}

export default Stories