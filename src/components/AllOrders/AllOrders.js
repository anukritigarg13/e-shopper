import React from 'react';
import PropTypes from 'prop-types';

const AllOrders = ({ allOrders }) => (
  <div>
    All Orders
    {' '}
    {allOrders}
  </div>
);

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
