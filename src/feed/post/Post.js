import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './post.css'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import CloseIcon from '@material-ui/icons/Close';

import { makeStyles } from '@material-ui/core/styles';

import { useStateValue } from '../../stateProvider/StateProvider';
import db from '../../firebase';

const useStyles = makeStyles((theme) => ({
    small: {
      width: theme.spacing(4),
      height: theme.spacing(4),
      marginRight: '10px',
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    iconSmall: {
        width: '12px',
        height: '12px'
    }
}));

function Post({profile,image,username,timeStamp,messege,userID,messegeID,comments}) {
    const classes = useStyles();
    const [{user}] = useStateValue();
    const [showComments,setShowComments] = useState(false);
    const [inputComment,setInputComment] = useState("");
    const deletePost = () => {
        db
         .collection("posts")
         .doc(messegeID)
         .delete()
         .then(() => {
            console.log("messege deleted")
          })
         .catch((err) => {
              console.log(err);
          })
    };
    
    const pushComment = (e) => {
        e.preventDefault();

        const newComment = {
            userURL: user.photoURL,
            username: user.displayName,
            text: inputComment,
            commentKey: `${user.uid}-${new Date().getTime()}`,
            createdBy: user.uid,
        }

        const post = db.collection("posts").doc(messegeID)

        setInputComment("");

        return post.update({
            "comments" : [...comments,newComment]
        })
        .then(() => {
            console.log("Document successfully updated!");
        })
        .catch((error) => {
            console.error("Error updating document: ", error);
        })
    }

    const deleteComment = (e) => {
        const post = db.collection("posts").doc(messegeID);
        return post.update({
            "comments" : comments.filter((comment) => {
                console.log(comment.commentKey);
                return comment.commentKey !== e.target.getAttribute('data-key');
            })
        })
        .then(() => {
            console.log("Document successfully updated!");
        })
        .catch((error) => {
            console.error("Error updating document: ", error);
        })
    }
    return (
        <div className="post">
            <div className="post-top">
                <Avatar src={profile} className="post-avatar" />
                <div className="post-topInfo">
                    <h4>{username}</h4>
                    <p>{new Date(timeStamp?.toDate()).toUTCString()}</p>
                </div>
                {user.uid === userID ? 
                    <button className="post-deleteBtn" onClick={deletePost}>
                        <CloseIcon />
                    </button>
                    :
                    ""
                }
            </div>
            <div className="post-bottom">
                <p>{messege}</p>
            </div>
            <div className="post-image">
                <img src={image} alt="" />
            </div>
            <div className="post-reactions">
                <div className="post-reaction">
                    <ThumbUpAltIcon />
                    <p>Like</p>
                </div>
                <div className="post-reaction" onClick={() => {setShowComments(!showComments)}}>
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post-reaction">
                    <ShareIcon />
                    <p>Share</p>
                </div>
            </div>
            {showComments ? 
                <div className="post-comments">
                    {comments.map((comment) => {
                        return (
                            <div key={comment.commentKey} className="post-comment">
                                <Avatar className={classes.small} src={comment.userURL} />
                                <div className="post-commentText">
                                    <h4>{comment.username}</h4>
                                    <p>{comment.text}</p>
                                    {comment.createdBy === user.uid ?
                                        <div className="post-commentDelete" >
                                            <CloseIcon 
                                            className={classes.iconSmall}
                                            onClick={deleteComment}
                                            data-key={comment.commentKey}
                                            />
                                        </div>
                                    :
                                        ""
                                    }
                                </div>
                            </div>
                        )
                    })}
                    <form className="post-form">
                        <Avatar className={classes.small} />
                        <input
                         type="text" 
                         placeholder="your comment..."
                         value={inputComment}
                         onChange={(e) => {setInputComment(e.target.value)}}
                        />
                        <button 
                         type="submit" 
                         hidden 
                         onClick={pushComment}
                        />
                    </form>
                </div>
            :
                ""
            }
        </div>
    )
}

export default Post
