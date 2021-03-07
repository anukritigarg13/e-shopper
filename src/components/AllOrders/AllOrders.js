import React from 'react';
import PropTypes from 'prop-types';
import AllOrdersTable from '../AllOrdersTable/AllOrdersTable';
import './AllOrders.css';

const AllOrders = ({ allOrders }) => allOrders.map((order) => (
  <AllOrdersTable key={order.id} order={order} />
));
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
