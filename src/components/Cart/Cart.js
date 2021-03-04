import React from 'react';
import PropTypes from 'prop-types';

const Cart = (props) => {
  const itemsInBasket = Object.keys(props.cartItems).map((itemName) => (
    <div>
      <p>{itemName}</p>
      <p>{props.cartItems[itemName]}</p>
    </div>
  ));
  if (props.cartItemsCount === 0) {
    return 'Your cart is empty';
  }
  return (
    <div>
      Here are your cart items!
      {' '}
      {itemsInBasket}
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.shape({}).isRequired,
  cartItemsCount: PropTypes.number.isRequired,
  // products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
export default Cart;
