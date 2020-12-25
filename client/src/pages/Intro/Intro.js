import React from 'react';
import { Link } from 'react-router-dom'

// Components
import logo from '../../images/lovelymoon-logo.png'

// Library
import {
    makeStyles,
    Typography,
    Grid,
    Button,
    CardMedia
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    h1: {
        fontSize: '32px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '18px'
        }
    },
    buttonCenter: {
        display: 'flex',
        justifyContent: 'center'
    },
    logo: {
        height: '100px'
    },
}));

const Intro = () => {

    const classes = useStyles();

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
        >
            <Grid item>
                <img className={classes.logo} alt="lovely moon logo" src={logo} />
            </Grid>
            <Grid item>
                <Typography
                    className={classes.h1}
                    variant="h1"
                    component="h1"
                    gutterBottom
                >
                    Lovely Moon
                    </Typography>
            </Grid>
            <Grid item style={{ textAlign: 'center' }}>
                <Link to="/store" style={{ textDecoration: 'none' }}>
                    <Button variant="outlined">Shop</Button>
                </Link>
            </Grid>

        </Grid>
    );
};

export default Intro;