import axios from 'axios';

const Product = {
    find: () => axios.get('/api/products')
};

export default Product;