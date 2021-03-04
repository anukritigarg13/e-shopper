import React from 'react';
import PropTypes from 'prop-types';

const Cart = (props) => (
  <div>
    Hello there!
    {' '}
    {props.cartItems}
  </div>
);
Cart.propTypes = {
  cartItems: PropTypes.string.isRequired,
};
export default Cart;
