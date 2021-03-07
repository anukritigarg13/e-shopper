import React from 'react';
import PropTypes from 'prop-types';
import OrderDescTable from '../OrderDescriptionTable/OrderDescriptionTable';

const AllOrders = ({ allOrders }) => allOrders.map((order) => {
  const {
    orderId, orderDetails, amount, items, date, time,
  } = order;
  return (
    <div key={orderId}>
      <table>
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
      <OrderDescTable key={orderId} products={orderDetails} />
    </div>
  );
});
const allOrdersShape = {
  orderId: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  items: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,

};
AllOrders.propTypes = {
  allOrders: PropTypes.arrayOf(PropTypes.shape(allOrdersShape)).isRequired,
};
export default AllOrders;
