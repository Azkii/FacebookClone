import React, { useState } from 'react';
import './leftMenu.css';
import CloseIcon from '@material-ui/icons/Close';
import SettingsIcon from '@material-ui/icons/Settings';
import { Avatar, IconButton } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const fontStylesArr = [
    {
      value: 'Text',
      label: 'Text',
    },
    {
      value: 'Text2',
      label: 'Text2',
    },
    {
      value: 'Text3',
      label: 'Text3',
    },
    {
      value: 'Text4',
      label: 'Text4',
    },
];
const backgroundOptionsArr = [
    {
        id: 1,
        backgroundURL: 'https://i.pinimg.com/736x/fb/96/e8/fb96e88c4b1217b4d3d484680176b4d7.jpg'
    },
    {
        id: 2,
        backgroundURL: 'https://i.pinimg.com/236x/6c/86/2d/6c862d23bec853bb06f1bbc945ecb867.jpg'
    },
    {
        id: 3,
        backgroundURL: 'https://i.pinimg.com/736x/83/9f/29/839f29b1369091736d193959436f5070.jpg'
    },
    {
        id: 4,
        backgroundURL: 'https://i.pinimg.com/originals/ee/26/8f/ee268f7e334f70a476924cfd483dd27b.jpg'
    },
    {
        id: 5,
        backgroundURL: 'https://i.pinimg.com/736x/30/ea/e5/30eae5c3046b6183feecd42f9f926019.jpg'
    },
    {
        id: 6,
        backgroundURL: 'https://www.teahub.io/photos/full/207-2073999_background-story-instagram-summer.jpg'
    },
    {
        id: 7,
        backgroundURL: 'https://i.pinimg.com/originals/d7/6d/ed/d76ded8915550027dd688d3e8722cbfe.jpg'
    },
    {
        id: 8,
        backgroundURL: 'https://i.pinimg.com/originals/d6/48/b1/d648b1c9644870f3afa07a1d402446f5.jpg'
    },
    {
        id: 9,
        backgroundURL: 'https://i.pinimg.com/originals/6c/5a/db/6c5adb47f7d02952319e960a17810038.jpg'
    },
    {
        id: 10,
        backgroundURL: 'https://i.pinimg.com/736x/fb/96/e8/fb96e88c4b1217b4d3d484680176b4d7.jpg'
    },
    {
        id: 11,
        backgroundURL: 'https://i.pinimg.com/236x/6c/86/2d/6c862d23bec853bb06f1bbc945ecb867.jpg'
    },
    {
        id: 12,
        backgroundURL: 'https://i.pinimg.com/236x/6c/86/2d/6c862d23bec853bb06f1bbc945ecb867.jpg'
    },
    {
        id: 13,
        backgroundURL: 'https://i.pinimg.com/736x/83/9f/29/839f29b1369091736d193959436f5070.jpg'
    },
    {
        id: 14,
        backgroundURL: 'https://i.pinimg.com/originals/ee/26/8f/ee268f7e334f70a476924cfd483dd27b.jpg'
    },
    {
        id: 15,
        backgroundURL: 'https://i.pinimg.com/736x/30/ea/e5/30eae5c3046b6183feecd42f9f926019.jpg'
    },
    {
        id: 16,
        backgroundURL: 'https://www.teahub.io/photos/full/207-2073999_background-story-instagram-summer.jpg'
    },
    {
        id: 17,
        backgroundURL: 'https://i.pinimg.com/originals/d7/6d/ed/d76ded8915550027dd688d3e8722cbfe.jpg'
    },
    {
        id: 18,
        backgroundURL: 'https://i.pinimg.com/originals/d6/48/b1/d648b1c9644870f3afa07a1d402446f5.jpg'
    },
    {
        id: 19,
        backgroundURL: 'https://i.pinimg.com/originals/6c/5a/db/6c5adb47f7d02952319e960a17810038.jpg'
    }
]

function LeftMenu({storyProp,setStoryProp,user}) {

    const [fontStyles, setFontStyles] = React.useState('Text');
    const [backgroundShow,setBackgroundShow] = useState(false);
    const handleFontStyles = (event) => {
        setFontStyles(event.target.value);
    };

    const moreBackgroundOptions = () => {
        if (backgroundShow) {
            const backgroundBox = document.querySelector(".storiesCreate-yourStory-inputBackground");
            backgroundBox.style.paddingBottom = '50px';
            backgroundBox.style.height = 'auto';
            setBackgroundShow(!backgroundShow);
        }
        else {
            const backgroundBox = document.querySelector(".storiesCreate-yourStory-inputBackground");
            backgroundBox.style.paddingBottom = '';
            backgroundBox.style.height = '';
            setBackgroundShow(!backgroundShow);
        }
    };

    const submitStory = (e) => {
        e.preventDefault();
        if (storyProp.text === "") return
        console.log("approved");
    };

    return (
        <div className="storiesCreate-leftMenu">
            <nav className="storiesCreate-leftMenu-nav">
                <IconButton className="storiesCreate-leftMenu-navIconBtn">
                    <CloseIcon />
                </IconButton>
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" />
            </nav>
            <div className="storiesCreate-yourStory">
                <header>
                    <h1>Your Story</h1>
                    <IconButton className="storiesCreate-leftMenu-navIconBtn">
                        <SettingsIcon />
                    </IconButton>
                </header>
                <div className="storiesCreate-yourStory-profile">
                    <Avatar src={user.photoURL} />
                    <p>{user.displayName}</p>
                </div>
                <div className="storiesCreate-yourStory-inputs">
                <TextField
                 className="storiesCreate-yourStory-input"
                 label="Text"
                 placeholder="Start typing"
                 multiline
                 rows={7}
                 variant="outlined"
                 value = {storyProp.text}
                 onChange = {(e) => {
                    let {text,...rest} = storyProp;
                    setStoryProp (
                        { text : e.target.value, ...rest }
                    );
                 }}
                />
                <TextField
                className="storiesCreate-yourStory-input"
                select
                value={fontStyles}
                onChange={handleFontStyles}
                variant="outlined"
                >
                {fontStylesArr.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
                <div className="storiesCreate-yourStory-inputBackground storiesCreate-yourStory-input">
                    <p>Backgrounds</p>
                    <div>
                        {backgroundOptionsArr.map((backgroundOption) => {
                            return <div
                             style={{backgroundImage: `url(${backgroundOption.backgroundURL})`}}
                             key={backgroundOption.id}
                             className="storiesCreate-bubbleOption"
                             onClick={() => {
                                let {backgroundURL,...rest} = storyProp;
                                setStoryProp (
                                    {
                                        backgroundURL : backgroundOption.backgroundURL,
                                        ...rest 
                                    }
                                );
                            }}
                            >
                            </div>
                        })}
                    </div>
                    <button onClick={ moreBackgroundOptions }>
                        {backgroundShow ? <KeyboardArrowDownIcon /> : <KeyboardArrowDownIcon style={{transform: `rotate(180deg)`}} />}
                    </button>
                </div>
                </div>
            </div>
            <form onSubmit={submitStory}>
                <button>Discard</button>
                <button type="submit">Share the story</button>
            </form>
        </div>
    )
}

export default LeftMenu
