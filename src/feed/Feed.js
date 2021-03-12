import React from 'react';
import './feed.css';
import StoryReel from './storyReel/StoryReel';
import MessegeSender from './messageSender/MessegeSender';
import Post from './post/Post';
export default function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessegeSender />

            <Post
             profile = {'https://upload.wikimedia.org/wikipedia/commons/8/84/Deno.svg'}
             image = {'https://www.telepolis.pl/media/cache/resolve/amp_recommended_size/images/miniatury/oregairu-3-ikona.png'}
             username = {'Dawid Pacanowski'}
             timeStamp = {'15'}
             messege = {"that's works"}
            />
            <Post
             profile = {'https://upload.wikimedia.org/wikipedia/commons/8/84/Deno.svg'}
             image = {''}
             username = {'Kamil Star'}
             timeStamp = {'test'}
             messege = {"thest 2"}
            />
        </div>
    )
}
