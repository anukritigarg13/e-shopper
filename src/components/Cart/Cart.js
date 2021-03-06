import React from 'react';
import PropTypes from 'prop-types';
import './Cart.css';
import Button from '../Button/Button';

const Cart = (props) => {
  const { cartItemsCount, products } = props;
  const cartTotal = products
    .reduce((totalPrice, product) => totalPrice + (product.itemCount * product.unitPrice), 0);
  const itemsInBasket = products.map((product) => (
    <tr>
      <td>
        {product.itemName}
        {' '}
        {product.companyName}
        {' '}
        {product.unitQuantity}
      </td>
      <td>{product.unitPrice}</td>
      <td>{product.itemCount}</td>
      <td>{product.unitPrice * product.itemCount}</td>
    </tr>
  ));

  if (cartItemsCount === 0) {
    return <div className="cart-item-heading"><h1>Your cart is empty</h1></div>;
  }
  return (
    <div className="cart">
      <div className="cart-item-heading">
        <h1>
          Your items in basket:
          {' '}
          {cartItemsCount}
        </h1>

      </div>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Unit Price</th>
            <th>Items in cart</th>
            <th>Sub-Total</th>
          </tr>
        </thead>

        {itemsInBasket}
      </table>
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
