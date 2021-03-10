import React from 'react';
import PropTypes from 'prop-types';
import './OrderDescriptionTable.css';

const OrderDescTable = ({ products }) => {
  const categoriesInCart = Object.keys(products).filter((category) => {
    const categoryExistInCart = products[category].find((product) => product.itemCount > 0);
    if (categoryExistInCart) {
      return true;
    }
    return false;
  });
  console.log(categoriesInCart);
  const itemsInCart = categoriesInCart.map((productCategory) => {
    const categoryItemsInCart = products[productCategory].map((product) => (
      <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.itemCount}</td>
        <td>{product.itemCount * product.price}</td>
      </tr>
    ));
    return (
      <>
        <tr><td className="category-row" colSpan="4">{productCategory}</td></tr>
        {categoryItemsInCart}
      </>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>ITEM DESCRIPTION</th>
          <th>UNIT PRICE</th>
          <th>QUANTITY</th>
          <th>SUBTOTAL</th>
        </tr>
      </thead>
      <tbody>
        {itemsInCart}
      </tbody>
    </table>
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
OrderDescTable.propTypes = {
  products: PropTypes.objectOf(PropTypes.arrayOf(productsShape)).isRequired,
};
export default OrderDescTable;
