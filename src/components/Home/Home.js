import React from 'react';
import PropTypes from 'prop-types';
import ProductList from '../ProductList/ProductList';
import './Home.css';

const Home = ({ categorisedProducts, addItemHandler, removeItemHandler }) => Object
  .keys(categorisedProducts).map((category) => (
    <ProductList
      key={category}
      category={category}
      products={categorisedProducts[category]}
      add={addItemHandler}
      remove={removeItemHandler}
    />
  ));
const productsShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
});
Home.propTypes = {
  addItemHandler: PropTypes.func.isRequired,
  removeItemHandler: PropTypes.func.isRequired,
  categorisedProducts: PropTypes.objectOf(PropTypes.arrayOf(productsShape)).isRequired,
};
export default Home;
