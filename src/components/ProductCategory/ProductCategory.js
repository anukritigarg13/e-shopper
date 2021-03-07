import React from 'react';
import PropTypes from 'prop-types';
import ProductList from '../ProductList/ProductList';
import './ProductCategory.css';

const ProductCategory = ({
  category, products, addItemHandler, removeItemHandler,
}) => (
  <div className="product-container">
    <div className="product-type">{category}</div>
    <div className="product-list">
      <ProductList
        category={category}
        products={products}
        add={addItemHandler}
        remove={removeItemHandler}
      />
    </div>
  </div>
);
const productsShape = {
  id: PropTypes.number.isRequired,
  imgAlt: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  unitPrice: PropTypes.number.isRequired,
  unitQuantity: PropTypes.string.isRequired,
  itemCount: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};
ProductCategory.propTypes = {
  category: PropTypes.string.isRequired,
  addItemHandler: PropTypes.func.isRequired,
  removeItemHandler: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape(productsShape)).isRequired,
};
export default ProductCategory;
