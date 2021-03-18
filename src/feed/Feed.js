import React, { useEffect, useState } from 'react';
import './feed.css';
import StoryReel from './storyReel/StoryReel';
import MessegeSender from './messageSender/MessegeSender';
import Post from './post/Post';
import db from '../firebase';

export default function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts')
            .orderBy('timeStamp', 'desc')
            .onSnapshot(snap => {
                setPosts(snap.docs.map(doc => {
                    return {
                        id: doc.id,
                        data: doc.data()
                    }
                }))
            })
    },[])
    return (
        <div className="feed">
            <StoryReel />
            <MessegeSender />
            {posts.map(post => {
                return (
                    <Post
                    key={post.id}
                    profile = {post.data.profile}
                    image = {post.data.image}
                    username = {post.data.username}
                    timeStamp = {post.data.timeStamp}
                    messege = {post.data.messege}
                    userID = {post.data.userID}
                    messegeID = {post.id}
                    comments = {post.data.comments}
                   />
                )
            })}
        </div>
    )
}
