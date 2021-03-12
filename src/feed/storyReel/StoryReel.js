import React from 'react';
import './storyReel.css';
import Story from './Story';
function StoryReel() {
    return (
        <div className="storyReel">
            <Story backImg="https://images.wallpaperscraft.com/image/city_vector_panorama_119914_300x168.jpg" profile="https://deno.land/logo.svg" text="Dawid Pacanowski" />
            <Story backImg="https://wallup.net/wp-content/uploads/2018/03/19/592348-cyberpunk-neon-748x421.jpg" profile="https://i2.wp.com/www.jacketscreator.com/wp-content/uploads/2020/07/kazuma-kiryu-jacket.jpg?fit=1275%2C1500&ssl=1" text="Kazuma Kiryu" />
            <Story backImg="https://i.pinimg.com/736x/b0/ee/91/b0ee91f7c8e29ea41b8105c8a4b4d653.jpg" profile="https://i.pinimg.com/originals/52/aa/1a/52aa1a52290d9809c1c74a9dad7c7263.jpg" text="Coffe" />
            <Story backImg="https://wallup.net/wp-content/uploads/2018/03/19/590770-city-science_fiction-cyberpunk-neon-748x479.jpg" profile="https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80" text="Boing" />
        </div>
    )
}

export default StoryReel
