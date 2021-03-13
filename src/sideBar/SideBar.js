import userEvent from '@testing-library/user-event';
import React from 'react';
import './sideBar.css';
import SideBarRow from './SideBarRow';

import FlagIcon from '@material-ui/icons/Flag';
import GroupIcon from '@material-ui/icons/Group';
import StoreIcon from '@material-ui/icons/Store';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { useStateValue } from '../stateProvider/StateProvider';

function Sidebar() {

    const [{user},dispatch] = useStateValue();

    return (
        <div className="sideBar">
            <SideBarRow src={user.photoURL} name={user.displayName} />
            <SideBarRow Icon={FlagIcon} name='Pages' />
            <SideBarRow Icon={GroupIcon} name='Messenger' />
            <SideBarRow Icon={StoreIcon} name='MarketPlace' />
            <SideBarRow Icon={VideoLibraryIcon} name='Watch' />
            <SideBarRow Icon={ExpandMoreIcon} name='Show more' />
        </div>
    )
}

export default Sidebar
