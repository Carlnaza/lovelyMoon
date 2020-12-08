import React from 'react';

// Library
import {
    makeStyles,
    Typography,
    Grid,
    Box
} from '@material-ui/core';

// Components
import Navbar from '../../components/Navbar'


const useStyles = makeStyles((theme) => ({
    fontSize: {
        fontSize: '48px',
        marginLeft: '5%'
    }
}));

const NotFoundPage = () => {

    const classes = useStyles();

    return (
        <>
            <Navbar />
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '70vh' }}
            >
                <Grid item xs={3}>
                    <Box display="flex">
                        <img width="250" height="250" src="https://i.imgur.com/6J0ZonU.png" alt="404 Cat" />
                        <Typography variant="h1" className={classes.fontSize}>
                            404: PAGE NOT FOUND
                    </Typography>
                    </Box>
                </Grid>

            </Grid>
        </>
    );
};

export default NotFoundPage;