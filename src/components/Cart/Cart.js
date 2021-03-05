import React from 'react';
import PropTypes from 'prop-types';
import './Cart.css';

const Cart = (props) => {
  const itemsInBasket = props.products.map((product) => (
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
  if (props.cartItemsCount === 0) {
    return 'Your cart is empty';
  }
  return (
    <div className="cart">
      <div className="cart-item-heading">
        <h1>
          Your items in basket:
          {' '}
          {props.cartItemsCount}
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
    </div>
  );
};

Cart.propTypes = {
  cartItemsCount: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
export default Cart;
