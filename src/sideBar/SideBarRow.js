import { Avatar} from '@material-ui/core';
import React from 'react';
import './sideBarRow.css';
function SideBarRow({src,Icon,name}) {
    return (
        <div className="sideBarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <h4>{name}</h4>
        </div>
    )
}

export default SideBarRow
