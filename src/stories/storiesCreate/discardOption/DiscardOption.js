import React, { useCallback } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import './discardOption.css';
import {useHistory} from 'react-router-dom';
function DiscardOption({setShowDiscardOptions}) {

    const history = useHistory();
    const handleDiscard = useCallback(() => history.push('/'), [history]);
    const cancelDiscard = () => {
        setShowDiscardOptions(false);
    }

    return (
        <div className="discardOption-background">
        <div className="discardOption">
            <nav>
                <h3>
                    Discard story?
                </h3>
                <IconButton>
                    <CloseIcon onClick={cancelDiscard} />
                </IconButton>
            </nav>
            <div>
                <p>Are you sure that you want to discard this story? Your story won't be saved.</p>
                <div className="discardOption-buttons">
                    <button className="discardOption-buttons__cancel" onClick={cancelDiscard}>Continue Editing</button>
                    <button className="discardOption-buttons__discard" onClick={handleDiscard}>Discard</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default DiscardOption
