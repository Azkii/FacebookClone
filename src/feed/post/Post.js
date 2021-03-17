import { Avatar } from '@material-ui/core'
import React from 'react'
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
}));

function Post({profile,image,username,timeStamp,messege,userID,messegeID}) {
    const classes = useStyles();
    const [{user},dispatch] = useStateValue();

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
            <div className="post-comments">
                <div className="post-comment">
                    <Avatar className={classes.small} />
                    <div className="post-commentText">
                        <h4>Azuki_</h4>
                        <p>Fighto</p>
                    </div>
                </div>
                <div className="post-comment">
                    <Avatar className={classes.small} />
                    <div className="post-commentText">
                        <h4>Azuki_</h4>
                        <p>Koniecznie włącz dźwięk oglądając! Zmieniaj świat razem z namiKoniecznie włącz dźwięk oglądając! Zmieniaj świat razem z nami  </p>
                    </div>
                </div>
                <form className="post-form">
                    <Avatar className={classes.small} />
                    <input type="text" placeholder="your comment..." />
                </form>
            </div>
        </div>
    )
}

export default Post
