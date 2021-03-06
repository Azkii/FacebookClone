import React, { useEffect, useState } from 'react';
import './storyReel.css';
import Story from './Story';
import db from '../../firebase';
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';

import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';

function StoryReel() {
    const [stories,setStories] = useState([]);
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
    return (
        <Carousel itemsToShow={5} className="storyReel">
            {stories
             .slice(0, 5)
             .map(story => {
                return (
                    <Story 
                     key={story.id}
                     backImg={story.data.storyArr[story.data.storyArr.length-1].imgURL}
                     profile={story.data.profileURL}
                     text={story.data.username}
                     pathID = {story.id}
                    />
                )
            })}
            <Link to="/stories/create">
                <div className="addStory">
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                </div>
            </Link>
        </Carousel>
    )
}

export default StoryReel
