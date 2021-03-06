import React from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';

import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StoreIcon from '@material-ui/icons/Store';
import PersonPinIcon from '@material-ui/icons/PersonPin';

import HeaderRight from './headerRight/HeaderRight';
function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="Facebook-logo"></img>
                <div className="header-input">
                    <SearchIcon />
                    <input type="text" placeholder="Search here" />
                </div>
            </div>
            <div className="header-center">
                <div className="header-mainMenu header-mainMenu--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header-mainMenu">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header-mainMenu">
                    <SubscriptionsIcon fontSize="large" />
                </div>
                <div className="header-mainMenu">
                    <StoreIcon fontSize="large" />
                </div>
                <div className="header-mainMenu">
                    <PersonPinIcon fontSize="large" />
                </div>
            </div>
            <div className="header-right">
                <HeaderRight />
            </div>
        </div>
    )
}

export default Header
