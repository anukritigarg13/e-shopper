import React from 'react';
import PropTypes from 'prop-types';
import './OrderDescriptionTable.css';

const OrderDescTable = ({ products }) => {
  const itemsInBasket = products.map((product) => {
    const {
      itemName, itemCount, unitPrice, unitQuantity, companyName,
    } = product;
    return (
      <tbody key={product.id}>
        <tr>
          <td>
            {itemName}
            {' '}
            {companyName}
            {' '}
            {unitQuantity}
          </td>
          <td>{unitPrice}</td>
          <td>{itemCount}</td>
          <td>{unitPrice * itemCount}</td>
        </tr>
      </tbody>

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

      {itemsInBasket}
    </table>
  );
};
const productTableShape = {
  itemName: PropTypes.string.isRequired,
  itemCount: PropTypes.number.isRequired,
  unitPrice: PropTypes.number.isRequired,
  unitQuantity: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
};
OrderDescTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape(productTableShape)).isRequired,
};

export default OrderDescTable;
