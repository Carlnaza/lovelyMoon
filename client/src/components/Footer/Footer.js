import React from 'react';

// Library
import {
    makeStyles,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        height: '150px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '4%'
    },
    text: {
        fontWeight: 700,
        color: '#868686'
    }
});

const Footer = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Typography className={classes.text}>
            ♡ Merry Christmas ♡
            </Typography>
        </div>
    )
};

export default Footer;