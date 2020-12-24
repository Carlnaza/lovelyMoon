import React, { useState } from 'react';
import clsx from 'clsx';
import {
    withStyles,
    makeStyles,
    Link,
    Box
} from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: '2%',
        paddingRight: '2%',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    listItemLink: {
        fontWeight: 700
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

export default function TemporaryDrawer() {
    const classes = useStyles();

    const cartAmount = 5;
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem>
                    <Link className={classes.listItemLink}>
                        <Button>Home</Button>
                    </Link>
                </ListItem>
                <ListItem >
                    <Link className={classes.listItemLink}>
                        <Button>About Us</Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link className={classes.listItemLink}>
                        <Button>Contact Us</Button>
                    </Link>
                </ListItem>
                <Divider />
                {
                    isLoggedIn ?
                        <ListItem>
                            <Link className={classes.listItemLink}>
                                <Button>My Account</Button>
                            </Link>
                        </ListItem>
                        :
                        <ListItem>
                            <Link className={classes.listItemLink}>
                                <Button>Login</Button>
                            </Link>
                        </ListItem>
                }

            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <Box display="flex">
                <Box flexGrow={1}>
                    <IconButton onClick={toggleDrawer('left', true)}>
                        <MenuRoundedIcon />
                    </IconButton>
                </Box>
                <Box>
                    <Link to="/myaccount/cart" style={{ textDecoration: 'none' }}>
                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={cartAmount} color="secondary">
                                <LocalMallOutlinedIcon fontSize="default" />
                            </StyledBadge>
                        </IconButton>
                    </Link>
                </Box>
            </Box>
            <Drawer anchor='left' open={state['left']} onClose={toggleDrawer('left', false)}>
                {list('left')}
            </Drawer>
        </div>
    );
}