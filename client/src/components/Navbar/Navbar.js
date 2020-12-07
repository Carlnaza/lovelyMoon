import React from 'react';
import { Link } from 'react-router-dom';

// Library
import {
    makeStyles,
    Button,
    Box
} from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '10%',
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
        margin: ".5em"
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

const cartAmount = 0;

const Navbar = () => {

    const classes = useStyles();

    return (
        <>
            <Box display="flex" justifyContent="flex-end" className={classes.userInfo}>
                <Link to="/myaccount" style={{ textDecoration: 'none' }}>
                    <Button className={classes.userInfoText}>My Account</Button>
                </Link>
                <Button className={classes.userInfoText}>Logout</Button>
            </Box>
            <div style={{ width: '100%' }}>
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
        </>
    );
};

export default Navbar;