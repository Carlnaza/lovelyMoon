import axios from 'axios';

const Product = {
    find: () => axios.get('/api/products'),
    findOne: (id) => axios.get(`/api/product/${id}`)
};

export default Product;