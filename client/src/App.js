import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import Intro from './pages/Intro';
import Home from './pages/Home';
import Products from './pages/Products'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import AdminDashboard from './pages/AdminDashboard'
import AdminLogin from './pages/AdminLogin'
import PageNotFound from './pages/404Page'

// Utils
import Product from './utils/ProductUtils/Product';
import ProductContext from './utils/ProductUtils/ProductContext';

// Library
import {
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core'

// Theming ------------------------------->
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Lato',
      'sans-serif'
    ].join(',')
  },
  listItemText: {
    fontFamily: [
      'Lato',
      'sans-serif'
    ].join(',')
  }
});

const App = () => {

  const [productState, setProductState] = useState({
    products: [],
    product: {}
  });

  // Get All Products
  productState.getAllProducts = async () => {
    const { data } = await Product.find();
    setProductState({ ...productState, products: data })
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <ProductContext.Provider value={productState}>
          <Switch>
            <Route path="/" exact component={Intro} />
            <Route path="/store" exact component={Home} />
            <Route path="/products/:id" component={Products} />
            <Route path="/aboutus" exact component={AboutUs} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/myaccount/cart/:id" component={Cart} />
            <Route path="/admin" exact component={AdminLogin} />
            <Route path="/admin/dashboard/:id" component={AdminDashboard} />
            {/* 404 Default Check */}
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </ProductContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
