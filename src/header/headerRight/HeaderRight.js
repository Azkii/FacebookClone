import React,{ useState } from 'react';
import './headerRight.css';


import { useStateValue } from '../../stateProvider/StateProvider';

import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import FeedbackIcon from '@material-ui/icons/Feedback';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SettingsIcon from '@material-ui/icons/Settings';
import LockIcon from '@material-ui/icons/Lock';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AppsIcon from '@material-ui/icons/Apps';
import LanguageIcon from '@material-ui/icons/Language';
import HelpIcon from '@material-ui/icons/Help';
import EmailIcon from '@material-ui/icons/Email';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import StarIcon from '@material-ui/icons/Star';

import SettingsDisplayAccess from './display&accessSettings/SettingsDisplayAccess'

import { makeStyles } from '@material-ui/core/styles';

import { CSSTransition } from 'react-transition-group';

const useStyles = makeStyles((theme) => ({
    smaller: {
        width: theme.spacing(2),
        height: theme.spacing(2),
      },
    small: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    radio: {
        margin: `0px`,
        marginTop: `5px`,
        fontWeight: `bold`,
        width: `220px`,
        display: `flex`,
        justifyContent: `space-between`,
    }
  }));

function HeaderRight() {

    const [{user}] = useStateValue();

    const [open,setOpen] = useState(false);
    return (
        <>
            <div className="header-info">
                <Avatar src={user.photoURL} />
                <h4>{user.displayName}</h4>
            </div>
            <NavButton icon={<AddIcon />} />
            <NavButton icon={<ForumIcon />} />
            <NavButton icon={<NotificationsIcon />} />
            <NavButton open={open} setOpen={setOpen} icon={ open ? <ExpandLessIcon/> : <ExpandMoreIcon />}>
                <DropDownMenu />
            </NavButton>
        </>
    )
}
const NavButton = ({icon,children,open,setOpen}) => {

    return (
    <>
    <IconButton onClick={() => {
        open === undefined ? console.log("option in production") : setOpen(!open)}
    }>
        {icon}
    </IconButton>
    {open && children}
    </>
    )
} 

const DropDownMenu = () => {

    const classes = useStyles();

    const [activeMenu,setActiveMenu] = useState('main');

    const [menuHeight,setMenuHeight] = useState(null);

    const calcHeight = (elem) => {
        const height = elem.offsetHeight + 35;
        setMenuHeight(height);
    }
    const [{user}] = useStateValue();
    const logOut = () => {
        console.log(user);
     
    }

    const DropDownItem = ({children, goToMenu, leftIcon, rightIcon}) => {
        return (
            <div className="dropDownItem" onClick={() => goToMenu && setActiveMenu(goToMenu)}>
                <span className="dropDownItem-leftIcon">{leftIcon}</span>
                {children}
                <span className="dropDownItem-rightIcon">{rightIcon}</span>
            </div>
        )
    }

    return (
        <div className="dropDown-menu" style={{height: menuHeight}}>
            <CSSTransition 
             in={activeMenu === 'main'}
             unmountOnExit
             timeout={500}
             classNames="menu-primary"
             onEnter={calcHeight}
            >
                <div className="main-menu">
                    <DropDownItem leftIcon={<Avatar className={classes.small} src={user.photoURL} />}>
                        Your Profile
                    </DropDownItem>
                    <DropDownItem leftIcon={<FeedbackIcon className={classes.small} />}>
                        Feedback
                    </DropDownItem>
                    <DropDownItem goToMenu="settings" rightIcon={<ArrowForwardIosIcon className={classes.smaller} />}  leftIcon={<SettingsIcon className={classes.small} />}>
                        Settings & privacy
                    </DropDownItem>
                    <DropDownItem goToMenu="helpSupport" rightIcon={<ArrowForwardIosIcon className={classes.smaller} />}  leftIcon={<HelpIcon className={classes.small} />}>
                        Help & support
                    </DropDownItem>
                    <DropDownItem goToMenu="displayAccess" rightIcon={<ArrowForwardIosIcon className={classes.smaller} />}  leftIcon={<NightsStayIcon className={classes.small} />}>
                        Display & accessibility
                    </DropDownItem>
                    <div onClick={logOut}>
                        <DropDownItem leftIcon={<MeetingRoomIcon />}>
                            <div>Log out</div>
                        </DropDownItem>
                    </div>
                </div>
            </CSSTransition>
{/* settings nested */}
            <CSSTransition 
             in={activeMenu === 'settings'}
             unmountOnExit
             timeout={500}
             classNames="menu-secondary"
             onEnter={calcHeight}
            >
                <div className="main-menu">
                    <DropDownItem leftIcon={<ArrowForwardIosIcon style={{transform: `Rotate(180deg)`}}/>} goToMenu="main" >
                        <p style={{marginTop: `-5px`}}>Back</p>
                    </DropDownItem>
                    <DropDownItem leftIcon={<SettingsIcon />} >
                        <p style={{marginTop: `-5px`}}>Settings</p>
                    </DropDownItem>
                    <DropDownItem leftIcon={<LockIcon />} >
                        <p style={{marginTop: `-5px`}}>Privacy Checkup</p>
                    </DropDownItem>
                    <DropDownItem leftIcon={<LockIcon />} >
                        <p style={{marginTop: `-5px`}}>Privacy shortcuts</p>
                    </DropDownItem>
                    <DropDownItem leftIcon={<FormatListBulletedIcon />} >
                        <p style={{marginTop: `-5px`}}>Activity log</p>
                    </DropDownItem>
                    <DropDownItem leftIcon={<AppsIcon />} >
                        <p style={{marginTop: `-5px`}}>News Feed preferences</p>
                    </DropDownItem>
                    <DropDownItem leftIcon={<LanguageIcon />} >
                        <p style={{marginTop: `-5px`}}>Language</p>
                    </DropDownItem>
                </div>
            </CSSTransition>
{/* help and support nested */}
            <CSSTransition 
             in={activeMenu === 'helpSupport'}
             unmountOnExit
             timeout={500}
             classNames="menu-secondary"
             onEnter={calcHeight}
            >
                <div className="main-menu">
                    <DropDownItem leftIcon={<ArrowForwardIosIcon style={{transform: `Rotate(180deg)`}}/>} goToMenu="main" >
                        <p style={{marginTop: `-5px`}}>Back</p>
                    </DropDownItem>
                    <DropDownItem leftIcon={<HelpIcon />} >
                        <p style={{marginTop: `-5px`}}>Help center</p>
                    </DropDownItem>
                    <DropDownItem leftIcon={<EmailIcon />} >
                        <p style={{marginTop: `-5px`}}>Support inbox</p>
                    </DropDownItem>
                    <DropDownItem leftIcon={<ReportProblemIcon />} >
                        <p style={{marginTop: `-5px`}}>Report a problem</p>
                    </DropDownItem>
                </div>
            </CSSTransition>
{/* display and accessibility nested */}
            <CSSTransition 
             in={activeMenu === 'displayAccess'}
             unmountOnExit
             timeout={500}
             classNames="menu-secondary"
             onEnter={calcHeight}
            >
                <div className="main-menu">
                    <DropDownItem leftIcon={<ArrowForwardIosIcon style={{transform: `Rotate(180deg)`}}/>} goToMenu="main" >
                        <p style={{marginTop: `-5px`}}>Back</p>
                    </DropDownItem>
                    <SettingsDisplayAccess classes={classes} />
                    <DropDownItem goToMenu='keyBoard' rightIcon={<ArrowForwardIosIcon className={classes.smaller} />} leftIcon={<KeyboardIcon />} >
                        <p style={{marginTop: `-5px`}}>Keyboard</p>
                    </DropDownItem>
                </div>
            </CSSTransition>
{/* keyBoardSettings nested x2 */}
            <CSSTransition 
             in={activeMenu === 'keyBoard'}
             unmountOnExit
             timeout={500}
             classNames="menu-third"
             onEnter={calcHeight}
            >
                <div className="main-menu">
                    <DropDownItem leftIcon={<ArrowForwardIosIcon style={{transform: `Rotate(180deg)`}}/>} goToMenu="displayAccess" >
                        <p style={{marginTop: `-5px`}}>Back</p>
                    </DropDownItem>
                    <DropDownItem leftIcon={<KeyboardIcon />}>
                        <p style={{marginTop: `-5px`}}>See all keyboard shortcuts</p>
                    </DropDownItem>
                    <DropDownItem leftIcon={<StarIcon />}>
                        <p style={{marginTop: `-5px`}}>Change single character keyboard shortcuts</p>
                    </DropDownItem>
                </div>
            </CSSTransition>
        </div>
    )
}

export default HeaderRight
