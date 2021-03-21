import React, { useState } from 'react';
import './settings.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
function SettingsDisplayAccess({classes}) {
    const [darkMode,setDarkMode] = useState("darkModeOFF");
    const [compactMode,setCompactMode] = useState("compactModeOFF");

    const handleChangeDarkMode = (event) => {
        setDarkMode(event.target.value);
    };
    const handleChangeCompactMode = (e) => {
        setCompactMode(e.target.value);
    }

    return (
        <>
        <div className="darkMode-settings">
            <NightsStayIcon />
            <div>
                <h4>Dark mode</h4>
                <p>Adjust the appearance of Facebook to reduce glare and give your eyes a break.</p>
                <RadioGroup name="darkMode" value={darkMode} onChange={handleChangeDarkMode}>
                    <FormControlLabel 
                    className={classes.radio}
                    value="darkModeOFF"
                    control={<Radio color="primary" />}
                    label="OFF"
                    labelPlacement="start"
                    />
                    <FormControlLabel
                    className={classes.radio}
                    value="darkModeON"
                    control={<Radio color="primary" />}
                    label="ON"
                    labelPlacement="start"
                    />
                </RadioGroup>
            </div>
        </div>
        <div className="darkMode-settings">
            <ViewCompactIcon />
            <div>
                <h4>Compact mode</h4>
                <p>Make your font size smaller so that more content can fit on the screen.</p>
                <RadioGroup name="compactMode" value={compactMode} onChange={handleChangeCompactMode}>
                    <FormControlLabel 
                    className={classes.radio}
                    value="compactModeOFF"
                    control={<Radio color="primary" />}
                    label="OFF"
                    labelPlacement="start"
                    />
                    <FormControlLabel
                    className={classes.radio}
                    value="compactModeON"
                    control={<Radio color="primary" />}
                    label="ON"
                    labelPlacement="start"
                    />
                </RadioGroup>
            </div>
        </div>
        </>
    )
}

export default SettingsDisplayAccess