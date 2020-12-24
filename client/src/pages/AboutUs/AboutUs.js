import React from 'react';

// Components
import Navbar from '../../components/Navbar'

// Library
import {
    Paper,
    Typography,
    Container,
    Fade,
    makeStyles
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    content: {
        padding: '2%',
        marginTop: '3%'
    },
    h1: {
        fontSize: '40px',
        fontWeight: 700
    }
}));

const AboutUs = () => {

    const classes = useStyles();

    return (
        <>
            <Navbar />
            <Container>
                <Fade in timeout={1000}>
                    <Paper className={classes.content} variant="outlined">
                        <Typography className={classes.h1} variant="h1" component="h1" gutterBottom>
                            About Us
                    </Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                    </Paper>
                </Fade>
            </Container>
        </>
    );
};

export default AboutUs;