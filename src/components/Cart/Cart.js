import React from 'react';
import PropTypes from 'prop-types';
import './Cart.css';
import Button from '../Button/Button';
import OrderDescTable from '../OrderDescriptionTable/OrderDescriptionTable';

const Cart = (props) => {
  const { cartItemsCount, products } = props;
  const cartTotal = products
    .reduce((totalPrice, product) => totalPrice + (product.itemCount * product.unitPrice), 0);
  const existingProducts = products.filter((product) => product.itemCount > 0);

  if (cartItemsCount === 0) {
    return <div className="cart-item-heading"><h1>Your cart is empty</h1></div>;
  }
  return (
    <div className="cart">
      <div className="cart-item-heading">

        Your basket
        {'('}
        {cartItemsCount}
        {' Items)'}

      </div>
      <div className="order-table">
        <OrderDescTable products={existingProducts} />
      </div>
      <div className="buttons">
        <div className="continue-container">
          <Button className="nav-button" link="/" buttonName="Continue Shopping" />
        </div>

        <div className="checkout-container">
          <p>
            Total Cost:
            {cartTotal}
          </p>
          <Button className="nav-button" link="/checkout" buttonName="Checkout" />
        </div>

      </div>

    </div>
  );
};

Cart.propTypes = {
  cartItemsCount: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
export default Cart;
