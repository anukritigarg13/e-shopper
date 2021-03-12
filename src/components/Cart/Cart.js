import React from 'react';
import PropTypes from 'prop-types';
import './Cart.css';
import Button from '../Button/Button';
import OrderDescTable from '../OrderDescriptionTable/OrderDescriptionTable';

const Cart = (props) => {
  const { cartItemsCount, products } = props;
  const cartTotal = Object.keys(products)
    .reduce((totalPrice, productCategory) => totalPrice + products[productCategory]
      .reduce((subTotalPrice, product) => subTotalPrice
      + (product.itemCount * product.price), 0),
    0);
  const existingProducts = Object.keys(products)
    .reduce((acc, category) => {
      const filteredProductsInCategory = products[category]
        .filter((product) => product.itemCount > 0);
      const newAcc = { ...acc, [category]: filteredProductsInCategory };
      return newAcc;
    }, {});
  if (cartItemsCount === 0) {
    return <div className="cart-item-heading" data-testid="cart"><h1>Your cart is empty</h1></div>;
  }
  return (
    <div className="cart" data-testid="cart">
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
const productsShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
});
Cart.propTypes = {
  cartItemsCount: PropTypes.number.isRequired,
  products: PropTypes.objectOf(PropTypes.arrayOf(productsShape)).isRequired,
};
export default Cart;
