import React from 'react';
import PropTypes from 'prop-types';
import ProductList from '../ProductList/ProductList';
import './Home.css';

const Home = ({
  category, products, addItemHandler, removeItemHandler,
}) => (
  
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
Home.propTypes = {
  category: PropTypes.string.isRequired,
  addItemHandler: PropTypes.func.isRequired,
  removeItemHandler: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape(productsShape)).isRequired,
};
export default Home;
