import React, { useEffect, useContext, useState } from 'react';

// Context
import Product from '../../utils/ProductUtils/Product'
import ProductContext from '../../utils/ProductUtils/ProductContext'

// Components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import logo from '../../images/lovelymoon-logo.png'

// Library
import {
    Container,
    Typography,
    makeStyles,
    Grid,
    Paper,
    CardMedia,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Box,
    Divider,
    Input,
    useTheme
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '2%'
    },
    h1: {
        fontSize: '40px',
        fontWeight: 700,
        color: '#868686',
        [theme.breakpoints.down('sm')]: {
            fontSize: '32px'
        }
    },
    price: {
        fontSize: '32px',
        fontWeight: 400,
        color: '#868686',
        [theme.breakpoints.down('sm')]: {
            fontSize: '24px'
        }
    },
    productInfo: {
        padding: '2%'
    },
    styleInput: {
        marginTop: '2%'
    },
    cartBtn: {
        marginTop: '2%',
        backgroundColor: '#fee6ff',
        color: '#868686',
        fontWeight: 700,
        fontFamily: [
            'Lato',
            'sans-serif'
        ].join(',')
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    }
}));

export default function Products({ match }) {

    const classes = useStyles();
    const [productState, setProductState] = useState({})
    const [rendered, setRendered] = useState(false);
    const [style, setStyle] = useState("")

    const handleChange = (event) => {
        setStyle(event.target.value)
    }

    const getOneItem = async (id) => {
        const { data: product } = await Product.findOne(id)
        setProductState(product)
        setRendered(true)
    }

    useEffect(() => {
        setRendered(false)
        getOneItem(match.params.id);

    }, [])


    return (
        <>
            {
                rendered ?
                    <>
                    {console.log(productState.images[0])}
                        <Navbar />
                        <Container className={classes.root}>
                            <Grid container>
                                <Grid
                                    item
                                    lg={6}
                                >
                                    <Paper>
                                        <CardMedia
                                            className={classes.productImages}
                                            component="img"
                                            alt={productState.title}
                                            height="500"
                                            image={productState.images[0] !== undefined ? productState.images[0] : logo}
                                            title={productState.title}
                                        />
                                    </Paper>
                                </Grid>
                                <Grid
                                    className={classes.productInfo}
                                    item
                                    lg={6}>
                                    <Typography className={classes.h1} component="h1" variant="h1">{productState.title}</Typography>
                                    <Typography className={classes.price} component="h3" variant="h3">${productState.price}.00</Typography>
                                    <Box className={classes.styleInput}>
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <InputLabel id="demo-simple-select-outlined-label">Styles</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={style}
                                                onChange={handleChange}
                                                label="style"
                                            >
                                                <MenuItem value=""><em>None</em></MenuItem>
                                                {
                                                    productState.style.map((item) => {
                                                        <MenuItem value={item}><p>{item}</p></MenuItem>
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </Box>
                                    <Divider />
                                    <Button className={classes.cartBtn} variant="outlined">ADD TO CART</Button>
                                </Grid>
                            </Grid>
                        </Container>
                        <Footer />
                    </>
                    :
                    <></>
            }

        </>
    )
};