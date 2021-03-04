import React from 'react';
import PropTypes from 'prop-types';
import './Navigation.css';

const Navigation = (props) => (
  <div className="navigation">
    <span>E-Shopper</span>
    <span>
      My Basket :
      {props.cartItems}
    </span>
  </div>
);

Navigation.propTypes = {
  cartItems: PropTypes.number.isRequired,
};

export default Navigation;
