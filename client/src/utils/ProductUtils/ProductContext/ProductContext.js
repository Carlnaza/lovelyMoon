import { createContext } from 'react';

const ProductContext = createContext({
    products: [],
    product: {},
    getOneProduct: () => { },
    getAllProducts: () => { }
});

export default ProductContext;
