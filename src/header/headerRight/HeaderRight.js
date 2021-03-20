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
import { makeStyles } from '@material-ui/core/styles';

import { CSSTransition } from 'react-transition-group';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

function HeaderRight() {

    const [{user},dispatch] = useStateValue();

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
    <IconButton onClick={() => setOpen(!open)}>
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
                    <DropDownItem leftIcon={<Avatar className={classes.small} />}>
                        Your Profile
                    </DropDownItem>
                    <DropDownItem goToMenu="settings"  leftIcon={<FeedbackIcon className={classes.small} />}>
                        Feedback
                    </DropDownItem>
                    <DropDownItem leftIcon={<MeetingRoomIcon />}>
                        Log out
                    </DropDownItem>
                </div>
            </CSSTransition>
            
            <CSSTransition 
             in={activeMenu === 'settings'}
             unmountOnExit
             timeout={500}
             classNames="menu-secondary"
             onEnter={calcHeight}
            >
                <div className="main-menu">
                    <DropDownItem goToMenu="main" >
                        fuck go back
                    </DropDownItem>
                </div>
            </CSSTransition>
        </div>
    )
}

export default HeaderRight
