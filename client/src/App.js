import React, { useState } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

// Pages
import Intro from './pages/Intro';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Cart from './pages/Cart'

// Utils
import Product from './utils/ProductUtils/Product';
import ProductContext from './utils/ProductUtils/ProductContext';

function App() {

  const [productState, setProductState] = useState({
    products: []
  });

  // Get All Products
  productState.getAllProducts = () => {

    Product.find()
      .then(({ data }) => {
        setProductState({ ...productState, products: data })
      })
      .catch(err => console.error(err));

  };

  return (
    <>
      <ProductContext.Provider value={productState}>
        <Switch>
          <Route path="/" exact component={Intro} />
          <Route path="/store" exact component={Home} />
          <Route path="/aboutus" exact component={AboutUs} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/myaccount/cart" component={Cart} />
        </Switch>
      </ProductContext.Provider>
    </>
  );
}

export default App;
