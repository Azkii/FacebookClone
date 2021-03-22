import React from 'react';
import './leftMenu.css';
import CloseIcon from '@material-ui/icons/Close';
import SettingsIcon from '@material-ui/icons/Settings';
import { Avatar, IconButton } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const currencies = [
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

function LeftMenu() {

    const [currency, setCurrency] = React.useState('EUR');
    const handleChange = (event) => {
        setCurrency(event.target.value);
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
                    <Avatar />
                    <p>Test ABC</p>
                </div>
                <div className="storiesCreate-yourStory-inputs">
                <TextField
                 className="storiesCreate-yourStory-input"
                 label="Text"
                 placeholder="Start typing"
                 multiline
                 rows={7}
                 variant="outlined"
                />
                <TextField
                className="storiesCreate-yourStory-input"
                select
                value={currency}
                onChange={handleChange}
                variant="outlined"
                >
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
                <div className="storiesCreate-yourStory-inputBackground storiesCreate-yourStory-input">
                    <p>Backgrounds</p>
                    <div>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                    </div>
                    <button>
                        <KeyboardArrowDownIcon />
                    </button>
                </div>
                </div>
            </div>
            <form>
                <button>Discard</button>
                <button type="submit">Share the story</button>
            </form>
        </div>
    )
}

export default LeftMenu
