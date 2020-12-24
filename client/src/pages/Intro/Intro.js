import React from 'react';
import { Link } from 'react-router-dom'

// Library
import {
    makeStyles,
    Typography,
    Grid,
    Button
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
    }
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
            <Grid item xs={3}>
                <Typography
                    className={classes.h1}
                    variant="h1"
                    component="h1"
                >
                    Lovely Moon
                </Typography>
                <Grid item style={{ textAlign: 'center' }}>
                    <Link to="/store">
                        <Button>Shop</Button>
                    </Link>
                </Grid>
            </Grid>

        </Grid>
    );
};

export default Intro;