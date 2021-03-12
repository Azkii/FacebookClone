import { Avatar } from '@material-ui/core'
import React from 'react'
import './post.css'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
function Post({profile,image,username,timeStamp,messege}) {
    return (
        <div className="post">
            <div className="post-top">
                <Avatar src={profile} className="post-avatar" />
                <div className="post-topInfo">
                    <h4>{username}</h4>
                    <p>{timeStamp}</p>
                </div>
            </div>
            <div className="post-bottom">
                <p>{messege}</p>
            </div>
            <div className="post-image">
                <img src={image} />
            </div>
            <div className="post-reactions">
                <div className="post-reaction">
                    <ThumbUpAltIcon />
                    <p>Like</p>
                </div>
                <div className="post-reaction">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post-reaction">
                    <ShareIcon />
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
}

export default Post
