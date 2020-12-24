import React, { useEffect, useContext, lazy } from 'react';

// Components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'

// Library
import {
    Typography,
    Container,
    Grid,
    CardActionArea,
    CardMedia,
    CardContent,
    Paper,
    Box,
    Link,
    Fade
} from '@material-ui/core';
import {
    makeStyles,
} from "@material-ui/core/styles";

// Utils
import ProductContext from '../../utils/ProductUtils/ProductContext'

const useStyles = makeStyles((theme) => ({
    productImages: {
        [theme.breakpoints.down('sm')]: {
            height: '250px'
        }
    },
    heroBanner: {
        height: '300px',
        padding: '1% 5% 1% 5%',
        [theme.breakpoints.down('sm')]: {
            marginTop: '3%',
            height: '250px'
        }
    },
    heroBannerContent: {
        display: 'flex',
        justifyContent: 'center'
    },
    heroBannerPaper: {
        paddingLeft: '3%',
        paddingRight: '3%',
        paddingBottom: '5%'
    },
    heroBannerText: {
        marginTop: '5%',
        fontSize: '34px',
        textAlign: 'center',
        color: '#868686'
    },
    heroBannerSubText: {
        fontSize: '18px',
        textAlign: 'center',
        color: '#868686'
    },
    backgroundNone: {
        backgroundColor: 'none'
    },
    productTitle: {
        color: '#868686',
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
            wordWrap: 'break-word !important'
        }
    },
    linkOverwrite: {
        color: '#868686'
    }
}));

const Home = () => {

    const classes = useStyles();

    const {
        getAllProducts,
        products
    } = useContext(ProductContext)

    useEffect(() => {
        getAllProducts();
        // eslint-disable-next-line
    }, []);

    const HeroBanner = () => {
        return (
            <Fade in timeout={500}>
                <div className={classes.heroBanner}>
                    <Grid className={classes.heroBannerContent} container>
                        <Paper className={classes.heroBannerPaper} p={2} variant="outlined">
                            <Typography
                                className={classes.heroBannerText}
                                variant="h1"
                                component="h1"
                                gutterBottom
                            >
                                <Box fontWeight={700}>
                                    Welcome to Lovely Moon!
                            </Box>
                            </Typography>
                            <Typography className={classes.heroBannerSubText} component="div" variant="body1">
                                <Box>
                                    ♡ Shop RESTOCKED now!
                            </Box>
                                <Box> Follow our shop instagram for stock updates & studio pics
                            <Link className={classes.linkOverwrite} href="https://www.instagram.com/lovelymoonshoppe/" target="_blank"> @lovelymoonshoppe </Link>
                                </Box>
                                <Box>
                                    ♡ thanks for visiting ♡
                            </Box>
                            </Typography>
                        </Paper>
                    </Grid>
                </div>
            </Fade>
        );
    };


    const Products = (props) => {
        return (
            <Fade in timeout={1000}>
                <Grid
                    mt={3}
                    item
                    xl={3}
                    lg={3}
                    md={6}
                    sm={6}
                    xs={12}
                >
                    <Paper variant="outlined">
                        <CardActionArea>
                            <CardMedia
                                className={classes.productImages}
                                component="img"
                                alt={props.title}
                                height="250"
                                image="https://leanfrontiers.com/wp-content/uploads/2018/12/logo-placeholder-png.png"
                                title={props.title}
                            />
                            <CardContent>
                                <Typography className={classes.productTitle} align="center" gutterBottom variant="h5" component="h2" noWrap>
                                    {props.title}
                                </Typography>
                                <Typography align="center" variant="h5" color="textSecondary" component="h3" noWrap>
                                    ${props.price}.00
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Paper>
                </Grid>
            </Fade>
        )
    }

    return (
        <>
            <Navbar />
            <HeroBanner />
            <Container>
                <Grid container spacing={4}>
                    {
                        products.map((product, i) =>
                            <Products
                                key={i}
                                sku={product.sku}
                                price={product.price}
                                title={product.title}
                                description={product.description}
                            />
                        )
                    }
                </Grid>
            </Container>
            <Footer />
        </>
    );
};

export default Home;