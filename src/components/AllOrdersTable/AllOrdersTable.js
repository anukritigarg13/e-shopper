import React from 'react';
import PropTypes from 'prop-types';
import OrderDescTable from '../OrderDescriptionTable/OrderDescriptionTable';

const AllOrdersTable = ({ order }) => {
  const {
    orderId, orderDetails, amount, items, date, time,
  } = order;
  return (
    <div>
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
            <td>{orderId}</td>
            <td>{items}</td>
            <td>
              {date}
              {'\n'}
              {time}
            </td>
            <td>{amount}</td>
          </tr>
        </tbody>
      </table>
      <OrderDescTable products={orderDetails} />
    </div>
  );
};
const ordersShape = {
  orderId: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  items: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,

};
AllOrdersTable.propTypes = {
  order: PropTypes.shape(ordersShape).isRequired,
};
export default AllOrdersTable;
