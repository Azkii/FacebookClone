import { Button } from '@material-ui/core'
import React from 'react'
import './login.css'
import { makeStyles } from '@material-ui/core/styles';
import {auth,provider} from '../firebase';
import { actionTypes } from '../stateProvider/Reducer';
import { useStateValue } from '../stateProvider/StateProvider';
const useStyles = makeStyles((theme) => ({
    root: {
        background: '#4178e6',
        width: '300px',
        height: '40px',
        fontWeight: 'bold',
        opacity: 0.9,
        "&:hover, &:focus": {
            opacity: 1,
            background: '#4178e6',
        }
    },
  }));
function Login() {
    const [state,dispatch] = useStateValue();

    const classes = useStyles();
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider)
        .then((res) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: res.user,
            })
        })
        .catch((err) => {
            alert(err);
        })
    }
    return (
        <div className="login">
            <div className="login-logo">
            <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" />
            <img src="https://logofirmy.net/wp-content/uploads/2020/04/Facebook-Logo.png" />
            </div>
            <Button className={classes.root} variant="contained" color="primary" type="submit" onClick={signIn}>Login in by Google</Button>
        </div>
    )
}

export default Login
