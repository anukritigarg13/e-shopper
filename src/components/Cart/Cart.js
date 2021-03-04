import React from 'react';
import PropTypes from 'prop-types';

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
    <div>
      Here are your cart items!
      <table>
        <tr>
          <th>Product</th>
          <th>Unit Price</th>
          <th>Items in cart</th>
          <th>Sub-Total</th>
        </tr>
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
