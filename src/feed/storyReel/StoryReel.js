import React, { useEffect, useState, Component } from 'react';
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
            .orderBy('timeStamp', 'desc')
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
            <Story 
             backImg="https://images.wallpaperscraft.com/image/city_vector_panorama_119914_300x168.jpg"
             profile="https://deno.land/logo.svg"
             text="Dawid Pacanowski"
            />
            <Story
             backImg="https://wallup.net/wp-content/uploads/2018/03/19/592348-cyberpunk-neon-748x421.jpg"
             profile="https://i2.wp.com/www.jacketscreator.com/wp-content/uploads/2020/07/kazuma-kiryu-jacket.jpg?fit=1275%2C1500&ssl=1"
             text="Kazuma Kiryu"
            />
            <Story 
             backImg="https://i.pinimg.com/736x/b0/ee/91/b0ee91f7c8e29ea41b8105c8a4b4d653.jpg"
             profile="https://i.pinimg.com/originals/52/aa/1a/52aa1a52290d9809c1c74a9dad7c7263.jpg"
             text="Coffe"
            />
            {stories.map(story => {
                return (
                    <Story 
                     key={story.id}
                     backImg={story.data.imgURL}
                     profile={story.profileURL}
                     text={story.username}
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
