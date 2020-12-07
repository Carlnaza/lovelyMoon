import React, { useEffect, useContext } from 'react';

// Components
import Navbar from '../../components/Navbar';

// Library
import {
    Typography,
    Container,
    Grid,
    CardActionArea,
    CardMedia,
    CardContent,
} from '@material-ui/core';
import {
    makeStyles,
} from "@material-ui/core/styles";

// Utils
import ProductContext from '../../utils/ProductUtils/ProductContext'

const useStyles = makeStyles((theme) => ({
    heroBanner: {
        height: '20vh',
        paddingLeft: '5%',
        paddingRight: '5%',
        marginBottom: '2%'
    },
    heroBannerText: {
        marginTop: '5%',
        fontSize: '34px',
        textAlign: 'center'
    },
    heroBannerSubText: {
        fontSize: '18px',
        textAlign: 'center'
    },
    backgroundNone: {
        backgroundColor: 'none'
    },
    productTitle: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
            wordWrap: 'break-word !important'
        }
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
            <div className={classes.heroBanner}>
                <Typography
                    className={classes.heroBannerText}
                    variant="h1"
                    component="h1"
                    gutterBottom
                >
                    Welcome to Lovely Moon!
                </Typography>
                <Typography className={classes.heroBannerSubText} variant="body1">
                    ♡ shop restocked now! follow my shop instagram for stock updates & studio pics @lovelymoonshoppe
                    thanks for visiting ♡
                </Typography>
            </div>
        );
    };

    const Products = (props) => {
        return (
            <Grid
                mt={3}
                item
                xl={3}
                lg={3}
                md={3}
                xs={6}
                className={classes.root}
            >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={props.title}
                        height="250"
                        image="https://leanfrontiers.com/wp-content/uploads/2018/12/logo-placeholder-png.png"
                        title={props.title}
                    />
                    <CardContent>
                        <Typography className={classes.productTitle} align="center" gutterBottom variant="h5" component="h2">
                            {props.title}
                        </Typography>
                        <Typography align="center" variant="h5" color="textSecondary" component="h3" noWrap>
                            ${props.price}.00
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Grid>
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
        </>
    );
};

export default Home;