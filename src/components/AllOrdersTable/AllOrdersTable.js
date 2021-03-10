import React from 'react';
import PropTypes from 'prop-types';
import OrderDescTable from '../OrderDescriptionTable/OrderDescriptionTable';
import './AllOrdersTable.css';

const AllOrdersTable = ({
  id, order, date, totalCost, totalItems,
}) => {
  const formattedDate = new Date(date).toDateString();
  console.log(formattedDate);
  return (
    <div className="orders-table">
      <table className="all-orders-table">
        <thead>
          <tr>
            <th>ORDER</th>
            <th>ITEMS</th>
            <th>DATE</th>
            <th>AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{totalItems}</td>
            <td>
              {formattedDate}
            </td>
            <td>{totalCost}</td>
          </tr>
        </tbody>
      </table>
      <div className="order-desc-table">
        <OrderDescTable products={order} />
      </div>

    </div>
  );
};
const productsShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
});
AllOrdersTable.propTypes = {
  order: PropTypes.objectOf(PropTypes.arrayOf(productsShape)).isRequired,
  date: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  totalCost: PropTypes.number.isRequired,
};
export default AllOrdersTable;
