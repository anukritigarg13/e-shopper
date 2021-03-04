import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product/Product';
import './ProductList.css';

const ProductList = (props) => props.products.map((product) => (
  <Product
    key={product.id}
    itemName={product.itemName}
    imgSrc={product.imgSrc}
    imgAlt={product.imgAlt}
    companyName={product.companyName}
    unitPrice={product.unitPrice}
    unitQuantity={product.unitQuantity}
    itemCount={product.itemCount}
    add={() => props.add(product.id)}
    remove={() => props.remove(product.id)}
  />
));

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ProductList;
