import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Components
import Drawer from './Drawer.js'

// Library
import {
    makeStyles,
    Button,
    Box,
} from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

// Logo
import logo from '../../images/lovelymoon-logo.png'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '10%',
    },
    mainNav: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    verticalAlign: {
        top: '50%'
    },
    userInfo: {
        height: '5%',
    },
    userInfoText: {
        fontSize: '10px'
    },
    button: {
        margin: ".5em",
        fontWeight: 700,
        color: '#868686'
    },
    logoContainer: {
        height: '75px',
        display: 'flex',
        justifyContent: 'center'
    },
    logo: {
        height: '100px'
    },
    mobileHamburgerMenu: {
        left: 0,
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    }
}));

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

const cartAmount = 5;

const Navbar = () => {

    const classes = useStyles();
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const MainNav = () => {
        return (
            <div className={classes.mainNav}>
                <Box display="flex" justifyContent="center">
                    <Link to="/store" style={{ textDecoration: 'none' }}>
                        <Button className={classes.button}>Home</Button>
                    </Link>
                    <Link to="/aboutus" style={{ textDecoration: 'none' }}>
                        <Button className={classes.button}>About Us</Button>
                    </Link>
                    <Link to="/contact" style={{ textDecoration: 'none' }}>
                        <Button className={classes.button}>Contact</Button>
                    </Link>
                    <Link to="/myaccount/cart" style={{ textDecoration: 'none' }}>
                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={cartAmount} color="secondary">
                                <LocalMallOutlinedIcon fontSize="default" />
                            </StyledBadge>
                        </IconButton>
                    </Link>
                </Box>
            </div>
        )
    }

    return (
        <>
            {
                isLoggedIn ?
                    <Box display="flex" justifyContent="flex-end" className={classes.userInfo}>
                        <Link to="/myaccount" style={{ textDecoration: 'none' }}>
                            <Button className={classes.userInfoText}>My Account</Button>
                        </Link>
                        <Button className={classes.userInfoText}>Logout</Button>
                    </Box>
                    : <></>
            }
            <Drawer />
            <div className={classes.logoContainer}>
                <Link to="/store">
                    <img className={classes.logo} alt="lovely moon logo" src={logo} />
                </Link>
            </div>
            <MainNav />
        </>
    );
};

export default Navbar;